module.exports = {
  configureWebpack:{
    devtool:'source-map'
// module:{
//   rules:[
//     {
//       test:/\.html$/i,
//       loader:'html-loader'
//     }
//   ]
// }
  },
  pluginOptions: {
    electronBuilder: {

      externals: [
        'electron',
      ],

         webSecurity:false,
    nodeIntegration: true,
    plugins: true,
    enableRemoteModule: true,
    nodeModulesPath: ['../../node_modules', './node_modules'],
      builderOptions: {
        win: {
          "target": [
            "nsis"
          ],
          icon: './public/interplex.png',
          // "requestedExecutionLevel": "requireAdministrator",
          // "publish": [{
          //   "provider": "generic",
          //   "url": "http://127.0.0.1:3333/update"
          // }]  
                    "publish": [{
                "provider": "github",
                "owner": "ibalaji777",
                "repo": "interplexMaterialMangement",
                "private":true,
                // "host":"github.com",
                // "token":"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"
          
              }],
        },
        // "nsis": {
        //   "installerIcon": "public/icon.ico",
        //   "uninstallerIcon": "public/icon.ico",
        //   "uninstallDisplayName": "qc",
        //   "license": "public/license.txt",
        //   "oneClick": false,
        //   "allowToChangeInstallationDirectory": true
        // },
        "nsis": {
          "artifactName": "${productName}-Setup-${version}.${ext}",
          "oneClick": true,
          // "perMachine": false,
          "allowToChangeInstallationDirectory": false,
          "runAfterFinish": true,
          "deleteAppDataOnUninstall": true,
          "installerIcon": "public/icon.ico",
          "uninstallerIcon": "public/icon.ico",
          "uninstallDisplayName": "qc",
          "license": "public/license.txt",
         
        }
      }
    }
  }
}