window.onload = function() {
    document.getElementById("username_value").innerHTML = localStorage.getItem("username");
    document.getElementById("role_value").innerHTML = localStorage.getItem("rol");
};