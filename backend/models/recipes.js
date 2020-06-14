const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;