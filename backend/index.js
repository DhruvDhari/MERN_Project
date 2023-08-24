import express from "express";
import mongoose from "mongoose";
import dotenv from"dotenv";
dotenv.config();
//require is used when type=commom.js or before es6
// const express =require("express");
// const mongoose =require("mongoose");
// require("dotenv").config();
const app =express();
const port=8000;



mongoose.connect("mongodb+srv://dmaster:"+process.env.MONGO_PASSWORD+"@cluster0.klv2gyk.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then((x)=>{
    console.log("Connected to Mongo !");
})
.catch((err)=>{
    console.log("Error while connecting to Mongo :",err);
});

app.get('/',(req,res)=>{
    res.send("hello bhai");
})

app.listen(port,()=>{
    console.log("App is running on port ",port);
})