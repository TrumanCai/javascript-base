var path = require('path')
var httpServer = require('http-server')
var server = httpServer.createServer({
    root: path.resolve(__dirname, '../www/')
})
server.listen(8080)
