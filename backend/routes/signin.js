const express = require("express");
const router = express.Router();
const {User} =require("../db");
const JWT_SECRET = require("../jwtsecret")
const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
	firstName: zod.string(),
	lastName: zod.string(),
})

router.post("/signin" , async (req,res)=>{
    const {success} = signupBody.safeParse(req.body)

    if(!success ){
        return res.status(411).json({
            message : "Incorredct input"
        })
    }

    const existingUsername = User.findOne({
        username : req.body.username,
    });

    if(existingUsername){
        return res.status(411).json({
            message : "Email already Taken"
        })
    }
    const user = User.create(req.body);

    userId = user._id;

    const token = jwt.sign({userId},JWT_SECRET);

    res.json({
        message : "User Created Successfully",
        token : token
    });

})
module.exports = router;
