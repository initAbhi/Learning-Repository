//External module 
const express = require("express")

//Local module
const requestHandler = require("./userinput");


const app = express();

app.get('/',(req,res,next) => {
    console.log(`First Middleware`,req.method, req.url);    
    next()
})

app.use('/submit',(req,res,next) => {
    console.log(`Second middleware`,req.method, req.url);    
    res.send("<p>Hello</p>")
})


app.listen(3000);