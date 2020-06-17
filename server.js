//next js runs on its own server. This is a custom server build using express.

const express = require('express');
const next = require('next');

// declaring a variable port for connection
const port  = process.env.PORT || 3000;

// checking whether the app is run in development or production mode.
const dev = process.env.NODE_ENV !== 'production'

// instance of next is created. The argument passed must be false for development mode and true for production mode
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();

    server.get('*',(req,res)=>{
        return handle(req,res)
    })
    server.post('*',(req,res)=>{
        return handle(req,res)
    })
    server.delete('*',(req,res)=>{
        return handle(req,res)
    })
    server.put('*',(req,res)=>{
        return handle(req,res)
    })

    // server starts running on available port
    server.listen(port, (err) => {
        if (err){console.log(err)}
        console.log(`Server running on port ${port}`)
    })
})

// when using custom server certain changes are to be made in package.json file.
// Ordinary next js app:
// "dev" : "next"
// "build" : "next buid"
// "start" : "next start"
// Custom server next js app:
// "dev" : "nodemon server.js"  (can also use node instead of nodemon)
// "build" : "next build"
// "start"  : "NODE_ENV=production nodemon server.js" 
// when using custom server every variable has to be set. So NODE_ENV is set to production before running the server.