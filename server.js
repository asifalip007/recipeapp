const express = require('express');
const next = require('next');

const port  = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();
    server.get('/',(req,res) => {
        app.render(req,res,'/index')
    })
    // server.get('/login',(req,res)=> {
    //     app.render(req,res,'/index')
    // })
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
    server.listen(port, (err) => {
        if (err){console.log(err)}
        console.log(`Server running on port ${port}`)
    })
})