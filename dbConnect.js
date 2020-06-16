const mongoose = require('mongoose');
const uri = process.env.URI;

async function dbConnect () {
    if(mongoose.connection.readyState===1){
        return;
    }
    await mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex: true,useFindAndModify:false});
    const db = mongoose.connection
    db.on('open', () => {
        console.log('Connected with database')
    })
    db.on('error', () => {
        console.log('Connection with database failed')
    })
}

export default dbConnect;