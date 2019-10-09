window.onload = function() {
    document.getElementById("username").innerHTML = "Welcome " + localStorage.getItem("username") +"!";
};

function logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("rol");
}