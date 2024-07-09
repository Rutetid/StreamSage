const mongoose = require("mongoose");
const { userInfo } = require("node:os");
const { json } = require("node:stream/consumers");
const { isBooleanObject } = require("node:util/types");
const { boolean } = require("zod");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);

const userSchema = new mongoose.Schema({
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
        type :[{
            backdrop_path : {type : String}, 
            id : {type : String},
            title: {type : String},
            name: {type : String},
            original_title : {type : String}, 
            overview : {type : String}, 
            poster_path : {type : String},
            media_type : {type : String},
            adult : {type : Boolean}, 
            original_language : {type : String}, 
            genre_ids : [{type : Number}],
            popularity : {type : String},
            release_date : {type : String}, 
            video : {type : String}, 
            vote_average : {type : String}, 
            vote_count : {type : String}, 
            

        }],
    }
})

const User = mongoose.model('User', userSchema);
const List = mongoose.model("List",watchlistSchema);
module.exports = {
    User,
    List
};
