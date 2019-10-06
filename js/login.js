$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();
        
        var username = $("#username").val();
        var password = $("#password").val();
        
        opcion = 1;
        datos = {"Opcion":opcion};
        $.ajax({
            url: "../php/login.php",
            type: "POST",
            data: datos
            }).done(function(respuesta){
            if (respuesta.estado === "ok") {
                console.log(JSON.stringify(respuesta));
                usernameDB = JSON.parse(respuesta.username);
                passDB = JSON.parse(respuesta.pass);
                console.log(usernameDB);
                console.log(passDB);
                return 1;
            }
        });
    });
});