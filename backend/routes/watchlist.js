const express = require("express");
const router = express.Router();
const {User , List} = require("../db");
const { authMiddleware } = require("../authmiddleware");
const { default: mongoose } = require('mongoose');


router.post("/add",authMiddleware , async(req,res) =>{

    const user = await List.findOne({userId : req.userId});

    if(!user){
        return res.status(404).json({
            message : "user not found",
        })
    };

    const movieData =  req.body.movie;

    const filter =  {userId : req.userId};
    const update = { $push: { watchList: movieData } };

    const result = await List.updateOne(filter, update);

    if (result.modifiedCount > 0) {
        res.json({
            message: "Updated Successfully",
        });
    } else {
        res.status(400).json({
            message: "Update failed",
        });
    }

    console.log(user.userId);

});

router.get(("/get",authMiddleware , async(req,res) =>{

    const user = await List.findOne({userId : req.userId});

    if(!user){
        return res.status(406).json({
            message : "user not found",
        })
    };
    console.log(user);
    const data =  await user.watchList.find({});

    if(!data){
        res.status(409).json({
            message : "couldn't fetch data from backend "
        })
    }
    console.log(data);
    res.json({
        data : data,
    })

}))

module.exports= router;