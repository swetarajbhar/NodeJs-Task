$(document).ready(function(){
    alert('CMS Application Started');

    //Initialize Data-Table with All values from database//
    getdata();
    //Initialize Data-Table with All values from database//

    // Register Form Post//
        $('#addbtn').click(function(e){
            alert('Function Started');
            e.preventDefault();
            var certification = new Array();     // for Checkbox
            $('input[name=certification]:checked').each(function() {
                certification.push(this.value);
            });
             alert("Number of selected Certification: "+certification.length+"\n"+"And, they are: "+certification);
        
            var  gender =  $('input[name=gender]:checked',  '#registerForm').val();   //for RadioButton
            alert('Gender : ' + gender);

            var fname = $("#fname").val();
            var  lname = $("#lname").val();
            var  address = $('#address').val();
            var  age = $('#age').val();
            var country = $('#inputState').val();
            alert('Country : ' + country);
            var email = $('#email').val();
        
            var formData = {
            fname,
            lname,
            address,
            age,
            country,
            certification,
            gender,
            email
        };

        ajaxPost('/fill-details',"application/json",formData);
        resetData();
        });
    //Register Form Post//

    //Delete Button Ajax Call//
$(document).on('click','button.del',function(){
    var id = $(this).parent().find('button.del').val();
    alert('Id : ' + id);
    ajaxDelete('/delete/',"application/json",id)
});
 //Delete Button Ajax Call//

 
 //Update Button Ajax Call//

 $(document).on('click','button.edit',function(e){
    e.preventDefault(); 
    var id = $(this).parent().find('button.edit').val(); 
    alert('Id : ' + id);
    window.location.href='/fill-details/'+id;
    });


 //update button ajax Call//

 $('#updatebtn').click(function(e){
    var id = $('#xyz').val();
    alert('Update-Id : ' + id);
    var certification = new Array();     // for Checkbox
    $('input[name=certification]:checked').each(function() {
        certification.push(this.value);
    });
   alert("Number of selected Certification: "+certification.length+"\n"+"And, they are: "+certification);
    
   var  gender =  $('input[name=gender]:checked',  '#registerForm').val();   //for RadioButton
   alert('Gender : ' + gender);

    var fname = $("#fname").val();
      var  lname = $("#lname").val();
      var  address = $('#address').val();
      var  age = $('#age').val();
      var country = $('#inputState').val();
      alert('Country : ' + country);
      var email = $('#email').val();
    
    var formData = {
       fname  : fname,
       lname : lname,
       address : address,
       age : age,
       country : country,
       certification : certification,
       gender : gender,
       email : email
   };

    ajaxUpdate('/edit/',"application/json",formData,id);
    e.preventDefault();

    });


});