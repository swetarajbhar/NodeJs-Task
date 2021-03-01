function resetData(){
    $('#fname').val('') 
    $('#lname').val('') 
    $('#address').val('')
    $('#age').val('')
    $('#email').val('')
    $('#inputState').val('');
    $('input[name="certification"]:checked').prop('checked',false);
    $('input[type="radio"]').prop('checked', false);
}

function getdata()
{
    ajaxGet('/records',"application/json");
}


function setValues(response)
{
                $('#fname').val(response.data.fname);
                $('#lname').val(response.data.lname);
                $('#address').val(response.data.address);
                $('#age').val(response.data.age);
                $('#email').val(response.data.email);
                if(response.data.gender == "Male")
                {
                    $('form').find(':radio[name=gender][value="Male"]').prop('checked', true)
                }
                else
                {
                    $('form').find(':radio[name=gender][value="Female"]').prop('checked', true)
                }
                $('#inputState').val(response.data.country).attr("selected", "selected");
                for(var i=0;i<response.data.certification.length;i++)
                {
                    $("input[type=checkbox][value='"+response.data.certification[i]+"']").prop("checked",true);
                }
}



