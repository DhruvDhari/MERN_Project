const express=require("express");
const router=express.Router();
const User=require("../models/User");
const bcrypt=require("bcrypt");
const {getToken}=require("../utils/helpers");

router.post("/register",async(req,res)=>{
    //email, password ,firstName,lastName,username
    const{email,password,firstName,lastName,username}=req.body;

    //step 2: does a user with this email already exist?if yes,we throw an error..

    const user =await User.findOne({email:email});
    if(user){
        return res.status(403).json({error:"A user with this email already exists"})
    }
    const hashedPassword=bcrypt.hash(password,10);
    const newUserData={
        email,
        password:hashedPassword,
        firstName,
        lastName,
        username
    };
    const newUser =await User.create(newUserData);

    const token =await getToken(email,newUser);
});