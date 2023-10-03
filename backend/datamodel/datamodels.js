const data = require('mongoose')

const dataschemer = new data.Schema({
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
    usertotalscores:{
        type: Number,
        default: 0
    },
    totalscore: [{
        type: Number,
        default: 0
    }]
})

module.exports = data.model('users',dataschemer)