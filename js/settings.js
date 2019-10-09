window.onload = function() {
    document.getElementById("username").innerHTML = "Welcome " + localStorage.getItem("username") +"!";
};