const express = require('express')
const mongo = require('mongoose')

mongo.connect('mongodb://127.0.0.1:27017/users',{useNewUrlParser: true})

let database = mongo.connection

database.on('error',(err) => console.log(err))
database.once('connection', () => console.log('Datbase started successfully'))

const expressapp = express()
const PORT = 8080

expressapp.listen(PORT, () => {
    console.log('server started')
})

expressapp.use(express.json())
expressapp.on('error',(err) =>{
    console.log(err)
})

let Userroutes = require('../app/backroutings/userroutes')
expressapp.use('/users',Userroutes)

