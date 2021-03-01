async function ajaxPost(url,headers,data){
    return new Promise((resolve,reject)=>{
        $.ajax({  
            url : url,  
            method : 'post', 
            data: JSON.stringify(data), 
            success:function(response){  
                  // alert(JSON.stringify(response));
                  // alert(response.msg);
                  $("#divMessage").show(); 
                  resolve(response);
            },  
            error: function(xhr, textStatus, errorThrown) {
              alert('ERROR : '+ JSON.stringify(xhr)); 
              reject(err) ;
              },
              dataType: "json",
              contentType: headers 
        }); 
    })  
}

async function ajaxGet(url,headers){
    return new Promise((resolve,reject)=>{
    $.ajax({  
        url: url,  
        method:'get',   
        success:function(response){  
                 if(response.msg=='success'){  
                   // $('tr.taskrow').remove();
                   $('#example').DataTable().clear().destroy();
                    $.each(response.data,function(index,data){  
                        //var url = url+data._id;   
                        $('tbody').append("<tr class='taskrow'><td>"+data.fname+"</td><td>"+data.lname+"</td><td>"+data.address+"</td><td>"+data.age+"</td><td>"+data.country+"</td><td>"+data.certification+"</td><td>"+data.gender+"</td><td>"+data.email+"</td><td><button class='btn btn-danger btn-xs del' value='"+data._id+"' ><i class='fa fa-trash'></i></button>&nbsp;&nbsp;<button class='btn btn-primary btn-xs edit' value='"+data._id+"' ><i class='fa fa-edit'></i></button></td></tr>");   
           });  
         $('#example').DataTable()
           } 
           resolve(response);
                        
        },
        error: function(xhr, textStatus, errorThrown) {
            alert('ERROR : '+ JSON.stringify(xhr)); 
            reject(xhr);
        },
        dataType: "json",
        contentType: headers
        });
    });
}

async function ajaxDelete(url,headers,id){
    return new Promise((resolve,reject)=>{
        $.ajax({  
            url:url+id,  
            method:'delete',  
            dataType:'json',    
            success:function(response){  
                if(response.msg=='success'){  
                    alert('Record deleted Successfully');  
                   // window.location.reload();
                    getdata(); 
                    resolve(response);
                }else{  
                    alert('data not get deleted');  
                }  
            },  
            error:function(err){  
                     alert('server error');
                     reject(err);    
            },
            contentType:headers 
        });  
    });  
}

async function ajaxFindById(url,headers,id){
    return new Promise((resolve,reject)=>{
        $.ajax({  
            url:url+id,  
            method:'get',  
            dataType:'json',
            contentType:headers,  
            success:function(response){  
                alert(JSON.stringify(response));
                alert(JSON.stringify(response.data.fname));
                setValues(response);
                resolve(response)
            },  
            error:function(err){  
                     alert('server error') ;
                     reject(err);    
            } 
        }); 
    })
}


async function ajaxUpdate(url,headers,formData,id){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url : url+id,  
            method : 'post', 
            data: JSON.stringify(formData), 
            success:function(response){  
                  // alert(JSON.stringify(response));
                  // alert(response.msg);
                  $("#divMessage1").show();
                  resetData();
                  resolve(response);
            },  
            error: function(xhr, textStatus, errorThrown) {
              alert('ERROR : '+ JSON.stringify(xhr)); 
              reject(xhr);
              },
              
              dataType: "json",
              contentType: headers
        })
    });
}