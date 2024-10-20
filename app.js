const express = require('express');

const app = express();
const PORT = 3003;
const router = express.Router();
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
});

app.get('/router' , function (req,res,next){
    console.log('Router Called');
    res.status(200);
    res.send("Welcome to router");
    res.end();
});

app.use(router);

app.get('/dbData',(req,res)=>{
    console.log('success');
    res.status(200);
    res.send("DB");
})

