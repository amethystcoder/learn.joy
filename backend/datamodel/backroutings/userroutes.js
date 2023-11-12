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
            res.status(202).json(user_to_check[0])       
        }
    }
    catch (err){
        res.status(500).send(err)
     }
})

routing.post('/addscore', async (req,res)=>{
    try{
        //TODO ADD SCORE TO DATABASE
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
        let date = new Date()
        let result_to_add = {
            year:date.getFullYear(),
            month:months[date.getMonth()],
            subject:req.body.score.topic_subject,
            topic:req.body.score.topic_name,
            score:req.body.score.score
        }
        dbase.findByIdAndUpdate({_id:req.body.id},{"$push":{"results":result_to_add}})
        res.status(200).send(user)
    }
    catch{
        res.status(404).json({err:"user not found"})
    }
})

module.exports = routing