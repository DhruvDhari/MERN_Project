import express from "express";
const app =express();
const port=8000;


app.get('/',(req,res)=>{
    res.send("hello bhai");
})

app.listen(port,()=>{
    console.log("App is running on port ",port);
})