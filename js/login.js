$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();

        var username = $("#username").val();
        var pass = $("#pass").val();
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
                usernameDB = JSON.parse(JSON.stringify(respuesta).username);
                passDB = JSON.parse(JSON.stringify(respuesta).pass);
            }
        });
    });
});