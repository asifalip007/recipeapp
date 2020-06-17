// setting up databse models

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defines schema for each entry
const recipeSchema = new Schema ({
    username : {
        type: String,
        required: true,
        trim:true,
        minlength:3
    },
    name:{
        type: String,
        trim: true,
        required: true,
        minlength:3
    },
    date:{
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true,
    },
    foodname: {
        type: String,
        required: true,
    },
    procedure: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

// exports either existing modesl or a new created model.
module.exports = mongoose.models.Recipe || mongoose.model('Recipe', recipeSchema);