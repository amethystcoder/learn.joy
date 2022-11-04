const express = require('express')
const routing = express.Router()
const dbase = require('../datamodel/datamodels')

routing.get('/', async (req,res)=>{
    try{
       const user = await dbase.find()
       res.status(202).json(user)
       console.log('sent a get request')
    }
    catch (err){
        res.status(500).send(err)
    }
})

routing.patch('/:id', async (req,res)=>{
    try{
    }
    catch{
        
    }
})

routing.post('/', async (req,res)=>{
    const user = new dbase({
        studentname: req.body.studentname,
        studentsurname: req.body.studentsurname,
        studentclass: req.body.studentclass,
        studentdept: req.body.studentdept
    })
    try{
        const newuser = await user.save()
        res.status(202).json(newuser)
        console.log('sent a post request')
    }
    catch (err){
        res.status(400).json({errormsg: err.message})
    }
})

module.exports = routing