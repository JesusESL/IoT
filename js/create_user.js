$(document).ready(function(){
  $('#basicform').submit(function(event){
      event.preventDefault();

      var username = $("#inputUserName").val();
      var email = $("#inputEmail").val();
      var id = $("#inputID").val();

      console.log(username);
  });
});