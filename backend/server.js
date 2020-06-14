const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');


const server = express();
const port = process.env.PORT || 5000;
server.use(cors());
server.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected with database successfully")
})

const usersRouter = require('./routes/user');
const recipeRouter = require('./routes/recipe');

server.use('/users',usersRouter);
server.use('/recipes',recipeRouter);

server.listen(port, () => {
    console.log(`Server listening on ${port}`)
})