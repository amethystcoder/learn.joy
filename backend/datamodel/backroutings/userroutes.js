const express = require('express')
const routing = express.Router()
const dbase = require('../datamodels')

routing.get('/', async (req,res)=>{
    try{
       const user = await dbase.find()
       res.status(202).json(user)
    }
    catch (err){
        res.status(500).send(err)
    }
})

routing.patch('/:id', async (req,res)=>{
    try{
        const user = dbase.find({id:req.params})
        res.status(200).send(user)
    }
    catch{
        res.status(404).json({err:"user not found"})
    }
})

routing.post('/', async (req,res)=>{
    try{
        const user_to_check = await dbase.find({
            studentname: req.body.studentname,
            studentsurname: req.body.studentsurname,
            studentclass: req.body.studentclass,
            studentdept: req.body.studentdept
        })
        if(user_to_check.length == 0){
            const user = new dbase({
                idnumber: await dbase.countDocuments(),
                studentname: req.body.studentname,
                studentsurname: req.body.studentsurname,
                studentclass: req.body.studentclass,
                studentdept: req.body.studentdept,
                results: []
            })
            const newuser = await user.save()
            res.status(202).json(newuser)
        }
        else{
            res.status(202).json(user_to_check)       
        }
    }
    catch (err){
        res.status(500).send(err)
     }
})

module.exports = routing