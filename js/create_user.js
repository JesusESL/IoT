$(document).ready(function(){
  $('#basicform').submit(function(event){
      event.preventDefault();

      var username = $("#inputUserName").val();
      var email = $("#inputEmail").val();
      var id = $("#inputID").val();

      console.log(username);
      console.log(email);
      console.log(id);

      datos = {"username":username,
               "email":email,
               "id":id};
      console.log(datos);
      $.ajax({
        url: "../php/create_user.php",
        type: "POST",
        data: datos
      }).done(function(respuesta){
        console.log(respuesta);
      }
  });
});