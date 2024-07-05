const mongoose = require("mongoose");
const { userInfo } = require("os");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        minLength : 3,
        maxLength : 20 , 
        trim : true ,
        unique : true , 
        required : true
    },
    password : {
        type : String ,
        minLength : 3,
        maxLength : 20 , 
        trim : true ,
        required : true
    },
    firstname : {
        type : String ,
        minLength : 3,
        maxLength : 20 , 
        trim : true ,
        unique : true 
    },
    lastname : {
        type : String ,
        minLength : 3,
        maxLength : 20 , 
        trim : true ,
        unique : true 
    }

})
const User = mongoose.model('User', userSchema);
module.exports = {
	User
};
