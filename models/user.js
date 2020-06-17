// setting up databse models

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defines schema for each entry
const userSchema = new Schema ({
    name:{
        type: String,
        required: true,
        trim:true,
        minlength:3
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
},
{
    timestamps:true,
});

// exports either existing modesl or a new created model.
module.exports = mongoose.models.User || mongoose.model('User', userSchema);