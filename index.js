require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const MongoDB = require("./Database/MongoDB")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs")
app.use(require("./Routes/route"))
const PORT = 3000
MongoDB()
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
