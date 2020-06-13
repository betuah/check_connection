const   express         = require("express"),
        http            = require("http"),
        socketIo        = require("socket.io")

const app       = express()
const server    = http.createServer(app)
const io        = socketIo(server, {pingInterval: 1000})
const port      = 3000 

server.listen(port, () => console.log(`Socket IO Server listen on port ${port}`));