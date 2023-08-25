const express=require("express");
const router=express.Router();
const User=require("../models/User");

router.post("/register",(req,res)=>{
    //email, password ,firstName,lastName,username
    const{email,password,firstName,lastName,username}=req.body;

    //step 2: does a user with this email already exist?if yes,we throw an error..
});