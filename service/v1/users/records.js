const crudFunction  = require('../../../core/v1/users/records');

const {saveAll,findAll,deleteUsers,findidUsers,updateUsers} = new crudFunction.RecordsClass();

async function saveUsers(params){
    try
    {
        const result  = await saveAll(params);
        return result;
    }
    catch(error)
    {
            console.error(error);
            throw error;
    }
}

async function findUsers(){
    try
    {
            const result  = await findAll();
            return result;
    }
    catch(error)
    {
            console.log('Service Error :' , error);
            throw error;
    }
}

async function findidUser(id){
    try
    {
        const result = await findidUsers(id);
        return result;
    }
    catch(error)
    {
        console.log('Service Error  : ' , error);
        throw 'error'
    }
}

async function updateUser(id,params){
    try{
        const result = await updateUsers(id , params);
        console.log('Service Result  : ' , result);
        return result;
    }
    catch(error)
    {
        console.log('error in service: ' ,error);
        throw 'error'
    }
}

async function deleteUser(id){
    try
    {
        const result = await deleteUsers(id);
        return result;
    }
    catch(error)
    {
        console.log('Service Error  : ' , error);
        throw 'error'
    }
}



module.exports = {saveUsers,findUsers,findidUser,updateUser,deleteUser};