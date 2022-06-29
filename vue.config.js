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
          icon: './public/icon.ico',
          "requestedExecutionLevel": "requireAdministrator",
          "publish": [{
            "provider": "generic",
            "url": "https://angalware.com/dist/download/"
          }]
        },
        "nsis": {
          "installerIcon": "public/icon.ico",
          "uninstallerIcon": "public/icon.ico",
          "uninstallDisplayName": "angalware",
          "license": "public/license.txt",
          "oneClick": false,
          "allowToChangeInstallationDirectory": true
        }
      }
    }
  }
}