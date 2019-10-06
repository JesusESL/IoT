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
        <form method="POST" action="php/login.php">
            <p>Username</p>
            <input type="text" name="username" placeholder="Enter username">
            <p>Password</p>
            <input type="password" name="password" placeholder="Enter password">
            <input type="submit" name="" value="Login">
        </form>
    </div>    

</body>
</html>
