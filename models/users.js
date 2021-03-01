const mongoose = require('mongoose');

// defining schema
const usersSchema = new mongoose.Schema({
	fname : {type : String},
    lname : {type : String},
    address : {type : String},
    age : {type : Number},
    country : {type : String},
    certification:[{type: String}],
    gender : {type : String},
    email : {type: String},
	date : {type : Date, default : Date.now}
});

// creating modal
const usersModel = mongoose.model('users', usersSchema);
module.exports = usersModel;