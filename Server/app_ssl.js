const   express         = require("express"),
        http            = require("http"),
        socketIo        = require("socket.io"),
        fs              = require("fs"),
        https           = require('https')

const privateKey  = fs.readFileSync('/home/sysadmin/server.key', 'utf8');
const certificate = fs.readFileSync('/home/sysadmin/server.cert', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const app               = express()
const httpServer        = http.createServer(app)
const httpsServer       = https.createServer(credentials, app)
const io                = socketIo(httpServer, {pingInterval: 1000})
const ios               = socketIo(httpsServer, {pingInterval: 1000})
const port              = 3000

app.get('/', (req, res) => {
  res.send('Hello :) ping me to check your connection!')
})

httpServer.listen(port, () => console.log(`Socket IO Server listen on port ${port}`));
httpsServer.listen(3443, () => console.log(`Socker IO with https listen on port 3443`));