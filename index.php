<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Login form</title>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="css/login.css">
</head>
<body>
    <div class="login">
        <img src="images/login-user.svg" class="login-icon">
        <h1>Sign in</h1>
        <form>
            <p>Username</p>
            <input type="text" id="username" placeholder="Enter username">
            <p>Password</p>
            <input type="password" id="password" placeholder="Enter password">
            <input type="submit" id="loginButton" value="Login">
        </form>
    </div>    

    <script src="js/jquery-2.1.0.min.js"></script>
    <script src="js/login.js"></script>
</body>
</html>
