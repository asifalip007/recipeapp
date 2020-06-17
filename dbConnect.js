// setting up database connection using mongoose

const mongoose = require('mongoose');

// process.env.URI is declared in the .env file.
// URI is the database connection URL obtained from the database.
const uri = process.env.URI;

async function dbConnect () {
    // checks if database is already connected
    if(mongoose.connection.readyState===1){
        return;
    }
    // if not sets up a new connection
    await mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex: true,useFindAndModify:false});
    const db = mongoose.connection
    db.on('open', () => {
        console.log('Connected with database')
    })
    db.on('error', () => {
        console.log('Connection with database failed')
    })
}

//this function is exported to call wherever database connection is requried
export default dbConnect;