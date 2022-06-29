'use strict';
var packager = require('electron-packager');
var options = {
    'arch': 'ia32',
    'platform': 'win32',
    'dir': './',
    'app-copyright': 'Angalware',
    'app-version': '1.0.0',
    'asar': true,
    'icon': './public/icon.ico',
    'name': 'angalwareDesktop',
    'out': './releases',
    'overwrite': true,
    'prune': true,
    'version': '1.3.4',
    'version-string': {
        'CompanyName': 'Angalware Invoice',
        'FileDescription': 'Angalware Desktop Invoice Software', /*This is what display windows on task manager, shortcut and process*/
        'OriginalFilename': 'angalware',
        'ProductName': 'Angalware Invoice',
        'InternalName': 'Angalware'
    }
};
packager(options, function done_callback(err, appPaths) {
    console.log("Error: ", err);
    console.log("appPaths: ", appPaths);
});