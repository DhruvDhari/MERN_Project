const express =require("express");
const passport = require("passport");
const router=express.Router();
const Song=require("../models/Song");
// const User =require("../models/User");


<<<<<<< HEAD
router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
=======
// router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    router.post("/create",passport.authenticate("user"),async(req,res)=>{
>>>>>>> a614f5e8bd60c5ded2c264511a4bb90ad594a623

    const{name,thumbnail,track}=req.body;

    if(!name|| !thumbnail ||!track){
        return res.status(301).json({err:"Insufficient details to create song."});
    }
    const artist =req.user._id;
    const songDetails={name,thumbnail,track,artist};
    const createdSong=await Song.create(songDetails);
    return res.status(200).json(createdSong);


})

<<<<<<< HEAD
router.get("/get/mysongs",passport.authenticate("jwt",{session:false}),async(req,res)=>{
=======
// router.get("/get/mysongs",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    router.get("/get/mysongs",passport.authenticate("user"),async(req,res)=>{
>>>>>>> a614f5e8bd60c5ded2c264511a4bb90ad594a623

    const currentUser=req.user;
    const songs = await Song.find({artist:req.user._id});
    return res.status(200).json({data:songs});

});

<<<<<<< HEAD
module.exports =router;
=======
module.export =router;
>>>>>>> a614f5e8bd60c5ded2c264511a4bb90ad594a623
