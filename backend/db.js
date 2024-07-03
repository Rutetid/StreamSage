const mongoose = require("mongoose");
const { userInfo } = require("os");

mongoose.connect("mongodb+srv://Prashant:PfG3COpqomJ5Ci3R@zealdris.kelwkym.mongodb.net/StreamSage");

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
