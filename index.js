const Eris = require("eris")
const http = require("http")
require("dotenv").config()

const client = new Eris(process.env.TOKEN)

client.connect()
console.log("Connected!")

http
  .createServer((_req, res) => res.end("the secret about that girl"))
  .listen(3000)
