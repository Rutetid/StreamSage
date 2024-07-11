const express = require("express");
const router = express.Router();
const {User , List} =require("../db");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
	firstname: zod.string(),
	lastname: zod.string(),
})

router.post("/signup" , async (req,res)=>{
    const {success} = signupBody.safeParse(req.body)

    if(!success ){
        return res.status(411).json({
            message : "Incorrect input"
        })
    }

    const existingUsername = await User.findOne({
        username : req.body.username,
    });

    if(existingUsername){
        return res.status(411).json({
            message : "Email already Taken"
        })
    }
    const user = await User.create(req.body);
    userId = user._id;
    
    const list = await List.create({"userId" : userId  } );
    

    const token = jwt.sign({userId},JWT_SECRET);

    res.json({
        message : "User Created Successfully",
        token :  token,
    });

})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post( "/signin" , async (req,res)=>{
    const { success } = signinBody.safeParse(req.body);

    if(!success ){
        return res.status(411).json({
            message : "Incorrect input"
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username,
        password : req.body.password,
    })
    if(!existingUser){
        return res.status(411).json({
            message : "No existing user found ",
        })
    }
    const token = jwt.sign({
        userId : existingUser._id
    },JWT_SECRET);

    res.json({
        message : "user signed in successfully",
        token :  token ,
    })

})

module.exports = router;
