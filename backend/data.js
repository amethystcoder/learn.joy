const express = require('express')
const mongo = require('mongoose')
const cors = require('cors')
const bodyparser = require("body-parser")

mongo.connect('mongodb://127.0.0.1:27017/users',{useNewUrlParser: true})

let database = mongo.connection

database.on('error',(err) => console.log(err))
database.once('connection', () => console.log('Datbase started successfully'))

const expressapp = express()
const PORT = 8080

expressapp.use(bodyparser.json())
expressapp.use(bodyparser.urlencoded({}))

expressapp.use(cors({
    origin:'http://localhost:4200'
}))

expressapp.listen(PORT, () => {
    console.log('server started')
})

expressapp.use(express.json())
expressapp.on('error',(err) =>{
    console.log(err)
})

let Userroutes = require('./datamodel/backroutings/userroutes')
expressapp.use('/users',Userroutes)

