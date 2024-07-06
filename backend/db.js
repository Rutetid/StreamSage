const mongoose = require("mongoose");
const { userInfo } = require("os");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

cconst userSchema = new mongoose.Schema({
    username : {
        type : String ,
        minLength : 3,
        maxLength : 30 , 
        trim : true ,
        unique : true , 
        required : true
    },
    password : {
        type : String ,
        minLength : 3,
        maxLength : 20 , 
        trim : true ,
        unique : false , 
        required : true
    },
    firstname : {
        type : String ,
        minLength : 3,
        maxLength : 20 ,
        unique : false , 
        trim : true ,
    },
    lastname : {
        type : String ,
        minLength : 3,
        maxLength : 20 , 
        unique : false,
        trim : true ,
    }

})

const watchlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    watchList : {
        type : [String],
    }
})

const User = mongoose.model('User', userSchema);
const List = mongoose.model("List",watchlistSchema);
module.exports = {
	User,
    List,
};
