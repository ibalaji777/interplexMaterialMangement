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
                "host":"github.com",
                "token":"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"

            
              }],
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