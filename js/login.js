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
                console.log(JSON.stringify(respuesta));
                console.log(respuesta.username);
                usernameDB = JSON.parse(respuesta.username);
                console.log(respuesta.pass);
                passDB = JSON.parse(respuesta.pass);
                console.log(username);
                console.log(pass);
            }
        });
    });
});