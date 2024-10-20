const express = require('express');
const app = express();
const PORT = 3003;

app.listen(PORT,(error)=>{
    if(!error)
        console.log('server is listining to port');
    else
        console.log('the error occured');
})

app.get('/',(req,res)=>{
    console.log('success');
    res.status(200);
    res.send("Welcome to root URL of Server");
})

