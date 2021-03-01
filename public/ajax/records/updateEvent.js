$(document).ready(function(){

    const id  = $('#xyz').val();
    ajaxFindById('/find-by-id/',"application/json",id);
  
});