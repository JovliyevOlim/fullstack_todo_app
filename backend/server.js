const  express = require('express')
const colors =require('colors')
const mongoose  = require("mongoose")
const cors = require('cors')
const connectDB = require('./config/db')
const routes = require("./routes/ToDoRoute")

require('dotenv').config()

connectDB();
const app = express()
const PORT = process.env.PORT  || 5000
app.use(express.json())
app.use(cors())



app.use(routes)

app.listen(PORT,()=>console.log(`Listening on: ${PORT}`.red))