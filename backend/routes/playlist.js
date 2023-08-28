const express=require("express");
const passport=require("passport")
const router=express.Router();
const Playlist=require("../models/Playlist");
const User=require("../models/User");

router.post("/create",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const currentUser =req.user;
    const {name,thumbnail,songs}=req.body;

    if(!name||!thumbnail||!songs){
        return res.status(301).json({err:"Insufficient Data"})
    }

    const playlistData={name,thumbnail,songs,owner:currentUser._id,collaborators:[]}

    const playlist =await Playlist.create(playlistData);
    return res.status(200).json(playlist)

});

router.get("/get/playlist/:playlistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const playlistId=req.params.playlistId;
    const playlist =await Playlist.findOne({_id :playlistId});

    if(!playlist){
        return res.status(301).json({err:"Invalid ID"});
    }
    return res.status(200).json(playlist)
});


router.get("/get/artist/:artistId",passport.authenticate("jwt",{session:false}),async(req,res)=>{
    const artistId=req.params.artistId;
    const artist =await User.findOne({_id:artistId});

    const playlists =await Playlist.find({owner:artistId});

    if(!artist){
        return res.status(304).json({err:"Invalid Artist ID"});
    }
    return res.status(200).json({data:playlists});
});

module.exports = router;