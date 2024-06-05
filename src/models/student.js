const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    age:{
        type: Number,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    carrer:{
        type: String,
        required: true
    },

    grade:{
        type: Number,
        required: true
    },
    phone:{
        type: String,
        required: false
    },
    subjects:{
        nameSubject:{
            type: [String],
            required: true
        },  
        teachersSubjects:{
            type: [String],
            required: true
        }
    }

});

module.exports = mongoose.model('Student', studentSchema);