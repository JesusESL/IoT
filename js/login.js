$(document).ready(function(){
    $('form').submit(function(event){
        event.preventDefault();

        var _username = $("#username").val();
        var _pass = $("#pass").val();
        var _rol = "";
        var users = "";
        var passwords = "";
        var roles = "";
        
        opcion = 1;
        datos = {"Opcion":opcion};
        $.ajax({
            url: "../php/login.php",
            type: "POST",
            data: datos
        }).done(function(respuesta){
            if (respuesta.estado === "ok") {
                console.log(JSON.stringify(respuesta))
                users = respuesta.usernames;
                passwords = respuesta.passwords;
                roles = respuesta.roles;
                console.log("DB");
                console.log(users);
                console.log(passwords);
                console.log(roles);
                console.log("Form");
                console.log(_username);
                console.log(_pass);

                var i = 0;
                var flag = false;
                while(users[i] != null){
                    if(users[i] == _username){
                        _rol = respuesta.roles[i];
                        flag = true;
                        break;
                    }
                    i++;
                }

                if(flag){
                    console.log("Usuario correcto");
                    console.log(_username);
                    console.log(_rol);
                }else {
                    console.log("Usuario incorrecto"); 
                }

                /*if((usernameDB == _username) && (passDB == _pass)){
                    console.log("Usuario correcto");
                    localStorage.setItem("username", _username);
                    localStorage.setItem("password", _pass);
                    //window.location.href = "../main-page.php";
                } else {
                    console.log("Usuario incorrecto");
                }*/
            }
        });
    });
});