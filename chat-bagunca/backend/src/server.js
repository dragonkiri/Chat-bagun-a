const {WebSocketServer} = require("ws")
const dontenv = require("dotenv")
dotenv.config()
const wss = new WebSocketServer({port : process.env.port || 8080 })

wss.on("conection", (ws)=>{
    ws.on('error',console.error)
    ws.on("mensage",(data)=>{
        wss.cliernts.array.forEach(client => client.send(data.toString()))
    })
    console.log("client connected")

})
