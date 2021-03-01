const usersModel = require('../../../models/users');
const mongoose = require ('mongoose');
const {ObjectId} = mongoose.Types;

class Records
{
    async saveAll(body){
        try
        {
            const result  = await usersModel({
                fname : body.fname,
                lname : body.lname,
                address : body.address,
                age : body.age,
                country : body.country,
                certification:body.certification,
                gender : body.gender,
                email : body.email
            }).save();
            return result;
        }
       
        catch(error)
        {
            console.error(error);
            throw error;
        }
    }

    async findAll(){
        try
        {
            const result = await usersModel.find({}).exec();
            return result;
        }
        catch(error)
        {
            console.error(error);
            throw error;
        }
    }

    async deleteUsers(id){
        try
        {
            const result  = await usersModel.deleteOne({
                    _id : id
                }).exec();
            return result;
        }
        catch(error)
        {
            console.error(error);
            throw error;
        }
    }

    async findidUsers(id){
        try
        {
            const result  = await usersModel.findById({
                _id : id
            }).exec();
            return result;
        }
        catch(error)
        {
            console.error(error);
            throw error;
        }
    }

    async updateUsers(id,body){
        try
        {
            const result  = await usersModel.updateOne({
                _id : id
            },{
                    $set : body,
            }).exec();
            console.log('Core Update Result  : ' , result);
            return result;
        }
        catch(error)
        {
            console.error(error);
            throw error;
        }
    }
}

module.exports={
    RecordsClass : Records,
}