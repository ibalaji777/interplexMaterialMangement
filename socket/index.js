var socketPouchServer = require('socket-pouch/server');

socketPouchServer.listen(80, {
  remoteUrl: 'http://localhost:5555'
});