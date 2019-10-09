window.onload = function() {
    document.getElementById("username").innerHTML = "Welcome " + localStorage.getItem("username") +"!";
    var role = localStorage.getItem("role")
    if (role == "admin"){
        document.getElementById("info").style.display = "block";
    } else{
        document.getElementById("info").style.display = "none";
    }
};

function logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("rol");
}