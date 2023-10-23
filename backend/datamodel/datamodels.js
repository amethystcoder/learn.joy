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
    usertotalscores:{
        type: Number,
        default: 0
    },
    totalscore: [{
        type: Number,
        default: 0
    }],
    results:[
        {
            year:{type:Number,required:true},
            year_results:[
                {
                    month:{type:String,required:true},
                    month_results:[
                        {
                            topic:{type:String,required:true},
                            scores:[
                                {type:String}
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})

module.exports = data.model('users',dataschemer)