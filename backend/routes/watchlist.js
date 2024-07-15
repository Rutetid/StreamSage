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
    } 
    else {
        res.status(400).json({
            message: "Update failed",
        });
    }

    // console.log(user.userId);

});

router.put("/remove" , authMiddleware , async(req,res)=>{
    const user = await List.findOne({userId : req.userId});
    if (!user) {
        return res.status(406).json({
            message: "user not found",
        });
    }
    const movieId =  req.body.id || req.body.mal_id;
    const filter =  {userId : req.userId};
    const update = { $pull: { watchList : {id : movieId}} };
    const update2 = {$pull :{ watchList : {mal_id : movieId}}};
    const update3 = {$pull :{ watchList : {mdl_id : movieId}}};

    // console.log(update2);
    const result = await List.updateOne(filter,update) ;
    const result2 = await List.updateOne(filter,update2) ;
    const result3 = await List.updateOne(filter,update3) ;

    if (result.modifiedCount > 0) {
        res.json({
            message: "removed Successfully " + movieId,
        });
    } 
    else {
        if(result2.modifiedCount > 0 || result3.modifiedCount > 0) {
            res.json({
                message: "removed Successfully " + movieId,
            });
        }
        else
       { res.status(400).json({
            message: "remove failed",
        });
    }}
})

router.get("/list", authMiddleware, async (req, res) => {
        const user = await List.findOne({ userId: req.userId });
        
        if (!user) {
            return res.status(406).json({
                message: "user not found",
            });
        }
        

        // Assuming watchList is an array
        const data = user.watchList;

        if (!data || data.length === 0) {
            return res.status(409).json({
                message: "couldn't fetch data from backend",
            });
        }
        

        res.json({
            movies: data,
        });
    
});

module.exports= router;