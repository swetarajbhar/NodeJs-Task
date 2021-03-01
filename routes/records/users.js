var express = require('express');
var router = express.Router();
const {saveUsers,findUsers,findidUser,updateUser,deleteUser} = require('../../service/v1/users/records');



router.post('/fill-details',async(req,res)=>{
    try
    {
          if(req.body.certification == null)
          {
                req.body.certification='None';
          }
          const saveUsersResult = await saveUsers(req.body);
          console.log('Request Body : ' , req.body);
          console.log('Result : ' , saveUsersResult);
          res.send({msg : 'success'});
    }
    catch(error)
    {
        console.error('Router Error : ', error);
    }
});


router.get('/', async(req, res, next)=> {
    try
      {
          res.render('records/index',{title : 'This is Express'});
      }
      catch(error)
      {
          console.log('Route Error : ' , error);
          throw error;
      }
});


router.get('/records',async(req,res,next)=>{
    try
    {
          const findUsersResult = await findUsers();
          const result = findUsersResult;
          res.send({msg : 'success' , data : result});
    }
    catch(error)
    {
      console.log('Route Error : ' , error);
      throw error;
    }
  });

router.delete('/delete/:id',async(req,res)=>{
try{
    const id = req.params.id;
    console.log(' *** User Id :  *** ' , id);
    const deleteResult = await deleteUser(id);
          if(deleteResult != 0 )
          {
            console.log('Record deleted with id : ' ,id);
            console.log('Route Result  : ' , deleteResult);
            res.send({msg:'success'});
          }
          else
          {
            res.status(404).json({
              message : CONSTANT.users.delete[404],
              result : '',
            })
          }
      }
      catch(error)
      {
        console.log('Router Error  : ' , error);
        res.status(404).json({
          message : CONSTANT.users.delete[404],
          result : '',
        })
      }
});

router.get('/fill-details', async(req, res, next)=> {
    res.render('records/saveForm',{title : 'This is Express'});
});

router.get('/fill-details/:id',(req,res)=>{
    const  id = req.params.id;
    console.log('Id :' , id );
    res.render('records/saveForm',{title : 'Express',success: '', id: id});
  })

router.get('/find-by-id/:id',async(req,res)=>{
    try
    {
          const id = req.params.id;
          console.log('Params : ' , req.params.id);
          console.log('ID : ' , id);
          const findidUserResult  = await findidUser(id);
          console.log('User : ' , findidUserResult);
          res.send({msg : 'success' , data : findidUserResult});
    }
    catch(error)
    {
      console.log('Route Error : ' , error);
      throw error;
    }
});

router.post('/edit/:id',async(req,res)=>{
    try{
      const id = req.params.id;
      const bodyData = {};
      console.log('bodyData : ',bodyData);
      console.log(' Request Body :  ',req.body);
  
  
      if ( req.body.fname) bodyData.fname = req.body.fname;
      if ( req.body.lname) bodyData.lname = req.body.lname;
      if ( req.body.address) bodyData.address = req.body.address;
      if ( req.body.age) bodyData.age = req.body.age;
      if ( req.body.country) bodyData.country = req.body.country;
      if ( req.body.certification) bodyData.certification = req.body.certification;
      if ( req.body.gender) bodyData.gender = req.body.gender;
      if ( req.body.email) bodyData.email = req.body.email;
  
      console.log('bodyData 1 ',bodyData); 
  
        const updateResult = await updateUser(id, bodyData);
        if(updateResult!=0 )
          {
                const findUsersResult = await findUsers();
                const result = findUsersResult;
              console.log('Record Updated with id',id);
              res.send({msg : 'success'});
          }
          else
          {
              res.status(404).json({
                  message: CONSTANT.users.update[404],
                  result: '',
              })
          }
    }
    catch(error)
    {
      console.log('Router Error : ' , error);
      res.status(404).json({
        message : CONSTANT.users.update[404],
        result : '',
      })
    }
});


module.exports = router;