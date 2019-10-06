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
                usernameDB = respuesta.username;
                passDB = respuesta.pass;
                console.log("DB");
                console.log(usernameDB);
                console.log(passDB);
                console.log("Form");
                console.log(_username);
                console.log(_pass);
                if((usernameDB == _username) && (passDB == _pass)){
                    console.log("Usuario correcto");
                    window.location.href = "../main-page.php";
                } else {
                    console.log("Usuario incorrecto");
                }
            }
        });
    });
});