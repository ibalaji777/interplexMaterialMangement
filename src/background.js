/*eslint-disable*/
'use strict'
import Vue from 'vue';
// const Vue =require('vue').default;
// const backend =require('../backend/index')
// import backend from '../backend/index.js'
// import dbserver from '../backend_db/server.js'
// const { app, BrowserWindow,ipcMain,protocol } = require('electron');
import { app, protocol, BrowserWindow,ipcMain,dialog } from 'electron'
app.setAppUserModelId("com.interplex.qc")

// import server from '../backend_resource/server.js'
//seted2 

// import googleDrive from '../google drive/index.js'
const schedule = require('node-schedule');
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
// const fs = require('fs'); // module that interacts with the file system
const path = require('path');

// --------------------------------app updater-----------------
console.log(" directory")
console.log(__dirname)
console.log(path.join(__static, 'icon.ico'))

import { autoUpdater } from 'electron-updater'
// autoUpdater.autoDownload = false;

process.env.GH_TOKEN = "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";
autoUpdater.logger = require("electron-log");
autoUpdater.logger.transports.file.level = "info";
// setInterval(() => {
//   autoUpdater.checkForUpdates()
// }, 60000)
// autoUpdater.on('update-downloaded', () => {
//   console.log('update-downloaded lats quitAndInstall');

//   if (process.env.NODE_ENV === 'production') { 
//     dialog.showMessageBox({
//       type: 'info',
//       title: 'Found Updates',
//       message: 'Found updates, do you want update now?',
//       buttons: ['Sure', 'No']
//     }, (buttonIndex) => {
//       if (buttonIndex === 0) {
//         const isSilent = true;
//         const isForceRunAfter = true; 
//         autoUpdater.checkForUpdates();

//         // autoUpdater.quitAndInstall(isSilent, isForceRunAfter); 
//         autoUpdater.quitAndInstall()

//       } 
//       // else {
//       //   updater.enabled = true
//       //   updater = null
//       // }
//     })
//   }
  
// })






// ---------------------------------myapp-----------------------------// ---------------------------------myapp-----------------------------

let myWindow = null

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (myWindow) {
      if (myWindow.isMinimized()) myWindow.restore()
      myWindow.focus()
    }
  })

  // Create myWindow, load the rest of the app, etc...
  app.whenReady().then(() => {
    
    myWindow = createWindow()
    //every minute
    schedule.scheduleJob('0 0/1 * 1/1 * ? *', function(){
      myWindow.webContents.send('shedule','every_minute') 
      // console.log('The answer to life, the universe, and everything!');
    });

    //every day 2pm
     schedule.scheduleJob('0 0 14 1/1 * ? *', function(){
      myWindow.webContents.send('shedule','every_day') 
      // console.log('The answer to life, the universe, and everything!');
    });

    //every 2 days at 2pm 
     schedule.scheduleJob('0 14 */2 * *', function(){
      myWindow.webContents.send('shedule','every_two_day') 
      // console.log('The answer to life, the universe, and everything!');
    });
    //every weak monday 
    schedule.scheduleJob('0 0 14 ? * MON *', function(){
      myWindow.webContents.send('shedule','every_weak') 
      // console.log('The answer to life, the universe, and everything!');
    });

  })
}










// -----------------------------end myapp-------------------------------
const isDevelopment = process.env.NODE_ENV !== 'production'
//added
Vue.config.devtools = process.env.NODE_ENV === 'development'
app.on('ready',()=>{
  if (process.env.NODE_ENV === 'production') { 
    autoUpdater.checkForUpdatesAndNotify();
  }

  // autoUpdater.checkForUpdatesAndNotify();

});
// app.setAppUserModelId("com.angalware.soft")
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win,printWin;

// Scheme must be registered before the app is ready
// protocol.registerStandardSchemes(['app'], { secure: true })
protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ frame:true, width: 800, height: 600, webPreferences: {
    webSecurity:false,
    nodeIntegration: true,
    plugins: true,
    contextIsolation: false,
    enableRemoteModule: true,
    webviewTag: true
  },
  //eslint-disable-next-line
  icon: path.join(__static, 'icon.ico'), })
// ------------------------------------------

ipcMain.on('update-software', function(event, arg) {
  autoUpdater.checkForUpdates();
  // autoUpdater.checkForUpdatesAndNotify();

  // autoUpdater.quitAndInstall(isSilent, isForceRunAfter); 
  autoUpdater.quitAndInstall()
   event.sender.send('software-update-response', arg);
});
// win.webContents.on('update-software', () => {
//   autoUpdater.checkForUpdates();
//   autoUpdater.checkForUpdatesAndNotify();

// });

autoUpdater.on("checking-for-update", (info) => {
  win.webContents.send("software-update-response", {info,msg:'chekcing for update'});
 
});
/*Download Completion Message*/
autoUpdater.on("update-downloaded", info => {
  win.webContents.send("software-update-response", {info,msg:'update-downloaded'});
});

/*Download Status Report*/
autoUpdater.on("download-progress", progressObj => {
  win.webContents.send("software-update-response", {info:progressObj,msg:'Download Progress'});
  });
autoUpdater.on("update-available", (info) => {
  // log.info("update_available”);
  win.webContents.send("software-update-response", {info,msg:'Update Available'});
  win.webContents.send("updater", "update_available");
});

autoUpdater.on("update-not-available", (info) => {
  // log.info("update_not_available");
  win.webContents.send("software-update-response",{info,msg:'update not available'});
  win.webContents.send("updater", "update_not_available");
});
// ------------------------------------------


    // if the render process crashes, reload the window
    //*******************crash***************************** */
  win.webContents.on('crashed', () => {
    win.destroy();
    createWindow();
  });

  // win.openDevTools()
  //******************crash********************************* */
  // win.setMenu(null)<---------------------- just release
// win.webContents.openDevTools();





if (process.env.WEBPACK_DEV_SERVER_URL) {
  // Load the url of the dev server if in development mode
  win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
  if (!process.env.IS_TEST) win.webContents.openDevTools()
  autoUpdater.updateConfigPath = path.join(
    __dirname,
    "../dev-app-update.yml" // change path if needed
  );
} else {
  createProtocol('app')
  // Load the index.html when not in development
  win.loadURL('app://./index.html')
}






win.on('closed', () => {
  win = null
})
// --------------------print window----------------------------
// printWin= new BrowserWindow({ frame:false, width: 800, height: 600, webPreferences: {
//   webSecurity:false,
//   nodeIntegration: true,
//   plugins: true,
//   enableRemoteModule: true
// },
// //eslint-disable-next-line
// icon: path.join(__static, 'icon.ico'), })
// printWin.setMenu(null)



//     // ---------------------windows communication start----------
//     ipcMain.on('nameMsg', (event, arg) => {
//         console.log("name inside main process is: ", arg); // this comes form within window 1 -> and into the mainProcess
//         // event.sender.send('nameReply', { not_right: false }) // sends back/replies to window 1 - "event" is a reference to this chanel.
//         // printWin.webContents.on('did-finish-load',()=>{

//         printWin.webContents.send( 'forWin2', arg ); // sends the stuff from Window1 to Window2.        })
//       // })

//     });


// ipcMain.on('asynchronous-message', function(event, arg) {
//   // console.log(event)
//   // console.log(arg)
//   // console.log('m i here');
//   event.sender.send('asynchronous-reply', 'pong');
// });


// if (process.env.WEBPACK_DEV_SERVER_URL) {
//   // Load the url of the dev server if in development mode
//   console.log(process.env.WEBPACK_DEV_SERVER_URL)
//   // printWin.loadURL( path.join(__dirname, 'public/report/index.html'))

//   printWin.loadURL(process.env.WEBPACK_DEV_SERVER_URL+'#/angalware_report')
//   if (!process.env.IS_TEST) printWin.webContents.openDevTools()
// } else {
//   createProtocol('app')
//   // Load the index.html when not in development
//   // printWin.loadURL( path.join(__dirname, 'public/report/index.html'))
//   printWin.loadURL('app://./index.html#angalware_report')
// }


// // data share
// ipcMain.on('webview',(event,args)=>{
// // alert("got")


//   win.webContents.send('webview_reply',args);

//   printWin.webContents.send('main_to_print','i got data form main window');
//   // console.log(args)
  
//               })
  
  


  //printer setup-------------------------------------------------------------------------
  ipcMain.on('getPrinterList', () => {
console.log("from main")
    const list = win.webContents.getPrinters();

    win.webContents.send('getPrinterList', list);
  });
//end printer setup-------------------------------------------------------------------------


}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
  await installVueDevtools()
} catch (e) {
  console.error('Vue Devtools failed to install:', e.toString())
}

  }
  // createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

// google drive window--------------------------------------------------
var childWindow;
// Function to create child window of parent one
function createChildWindow() {

  childWindow = new BrowserWindow({
    width: 500,
    height: 700,
    
    // modal: true,
    // show: false,
    icon:path.join(__static, 'icon.ico'),//'../public/icon.ico',
    // parent: myWindow, // Make sure to add parent window here
  
    // Make sure to add webPreferences with below configuration
    // webPreferences: {
    //   nodeIntegration: true,
    //   contextIsolation: false,
    //   enableRemoteModule: true,
    // },
  });
  childWindow.setIcon(path.join(__static, 'icon.ico'));

  childWindow.setMenu(null)
  // Child window loads settings.html file
  // childWindow.loadFile("http://localhost:3333/auth/login/google");
  childWindow.loadURL('http://localhost:3333/auth/login/google');
  // childWindow.once("ready-to-show", () => {
  //   childWindow.show();
  // });
  childWindow.webContents.on('crashed', () => {
    childWindow.destroy();
    createChildWindow();
  });
  
}
  
// ipcMain.on("openGoogleDriveAuthWindow", (event, arg) => {
//   createChildWindow();

 
// });
  