const express = require("express");
const router = express.Router();
const {User , List} = require("../db");
const authMiddleware = require("../authmiddleware");

router.post("/add",authMiddleware , async(req,res) =>{
    const user = await List.findOne({userId : req.userId});
    
})