const data = require('mongoose')

const dataschemer = new data.Schema({
    idnumber:{
        type:Number
    },
    studentname:{
        type: String,
        required: true
    },
    studentsurname:{
        type: String,
        required: true
    },
    studentclass:{
        type: String,
        required: true
    },
    studentdept:{
        type: String,
        required: true
    },
    results:[
        {
            year:{type:Number,required:true},
            month:{type:String,required:true},
            subject:{type:String,required:true},
            topic:{type:String,required:true},
            score:{type:Number}
        }
    ]
})

module.exports = data.model('users',dataschemer)