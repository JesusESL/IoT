$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();

        var _username = $("#username").val();
        var _pass = $("#pass").val();
        var usernameDB = "";
        var passDB = "";
        
        opcion = 1;
        datos = {"Opcion":opcion};
        $.ajax({
            url: "../php/login.php",
            type: "POST",
            data: datos
        }).done(function(respuesta){
            if (respuesta.estado === "ok") {
                console.log(JSON.stringify(respuesta))
                usernameDB = JSON.parse(respuesta.username);
                passDB = JSON.parse(respuesta.pass);
            }
        });
    });
});