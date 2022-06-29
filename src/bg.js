// 'use strict'

// import { app, protocol, BrowserWindow,ipcMain } from 'electron'
// import {
//   createProtocol,
//   /* installVueDevtools */
// } from 'vue-cli-plugin-electron-builder/lib'
// const isDevelopment = process.env.NODE_ENV !== 'production'

// //  
// // Keep a global reference of the window object, if you don't, the window will
// // be closed automatically when the JavaScript object is garbage collected.
// let win

// // Scheme must be registered before the app is ready
// protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

// function createWindow () {
//   // Create the browser window.
//   win = new BrowserWindow({ width: 800, height: 600, webPreferences: {
//     nodeIntegration: true,
//     webviewTag:true,
//     javascript:true,
//     nodeIntegrationInWork:true,
    
//     // sandbox:true,
//     enableRemoteModule:true,
//     webSecurity:false,
//     allowRunningInsecureContent:true,
//     plugins:true,
//   safeDialogs:true
//   } })
  

//   //printer setup-------------------------------------------------------------------------
//   ipcMain.on('getPrinterList', () => {

//     const list = win.webContents.getPrinters();

//     win.webContents.send('getPrinterList', list);
//   });
// //end printer setup-------------------------------------------------------------------------


//   if (process.env.WEBPACK_DEV_SERVER_URL) {
//     // Load the url of the dev server if in development mode
//     win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
//     if (!process.env.IS_TEST) win.webContents.openDevTools()
//   } else {
//     createProtocol('app')
//     // Load the index.html when not in development
//     win.loadURL('app://./index.html')
//   }

//   win.on('closed', () => {
//     win = null
//   })
// }

// // Quit when all windows are closed.
// app.on('window-all-closed', () => {
//   // On macOS it is common for applications and their menu bar
//   // to stay active until the user quits explicitly with Cmd + Q
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('activate', () => {
//   // On macOS it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (win === null) {
//     createWindow()
//   }
// })

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.on('ready', async () => {
//   if (isDevelopment && !process.env.IS_TEST) {
//     // Install Vue Devtools
//     // Devtools extensions are broken in Electron 6.0.0 and greater
//     // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
//     // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
//     // If you are not using Windows 10 dark mode, you may uncomment these lines
//     // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
//     // try {
//     //   await installVueDevtools()
//     // } catch (e) {
//     //   console.error('Vue Devtools failed to install:', e.toString())
//     // }

//   }
//   createWindow()
// })

// // Exit cleanly on request from parent process in development mode.
// if (isDevelopment) {
//   if (process.platform === 'win32') {
//     process.on('message', data => {
//       if (data === 'graceful-exit') {
//         app.quit()
//       }
//     })
//   } else {
//     process.on('SIGTERM', () => {
//       app.quit()
//     })
//   }
// }

'use strict'

import { app, protocol, BrowserWindow,ipcMain } from 'electron'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
// const fs = require('fs'); // module that interacts with the file system
const path = require('path');

// ---------------------------------myapp-----------------------------

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
  })
}










// -----------------------------end myapp-------------------------------
const isDevelopment = process.env.NODE_ENV !== 'production'
app.on('ready',()=>{

  app.setAppUserModelId("com.angalware.invoice")
  

});
// app.setAppUserModelId("com.angalware.soft")
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win,printWin;

// Scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], { secure: true })

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ frame:false, width: 800, height: 600, webPreferences: {
    nodeIntegration: true,
    plugins: true
  },
  //eslint-disable-next-line
  icon: path.join(__static, 'icon.ico'), })
  win.setMenu(null)


  //this window for printer paper 
  // printWin = new BrowserWindow({ width: 800, height: 600, titleBarStyle: "hidden", webPreferences: {
  //   nodeIntegration: true
  // } })


  // printWin.loadURL(`file://${process.cwd()}/static/print.html`);
  // // printWin.loadURL(`file://${__dirname}/test.html`)
  // printWin.webContents.openDevTools()

  //printer setup-------------------------------------------------------------------------
  ipcMain.on('getPrinterList', () => {
console.log("from main")
    const list = win.webContents.getPrinters();

    win.webContents.send('getPrinterList', list);
  });
//end printer setup-------------------------------------------------------------------------


// data share
ipcMain.on('webview',(event,args)=>{
// alert("got")

  console.log("i am form main js ther creawter  of the is fosfotware")

  win.webContents.send('webview_reply',args);

  printWin.webContents.send('main_to_print','i got data form main window');
  // console.log(args)
  
              })
  
  


  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  

  // if (process.env.WEBPACK_DEV_SERVER_URL) {
  //   // Load the url of the dev server if in development mode
  //   win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
  //   if (!process.env.IS_TEST) win.webContents.openDevTools()
  // } else {
  //   createProtocol('app')
  //   // Load the index.html when not in development

   
  //   win.loadURL('app://./index.html')
  // }




  win.on('closed', () => {
    win = null
  })
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
  createWindow()
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

