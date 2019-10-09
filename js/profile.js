window.onload = function() {
    document.getElementById("username").innerHTML = "Welcome " + localStorage.getItem("username") +"!";
    document.getElementById("username_value").innerHTML = localStorage.getItem("username");
    document.getElementById("role_value").innerHTML = localStorage.getItem("rol");
};

function logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("rol");
}