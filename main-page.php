<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Iot project</title>
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" type="text/css" href="css/main-page.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <script src="https://kit.fontawesome.com/f8dbaa81b2.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</head>
<body>
    <div class="wrapper">
        <div class="sidebar">
            <div class="logged-user">
                <img src="images/login-user2.svg" class="login-icon">
                <div id="username" class="username">Welcome!</div>
            </div>
            <ul>
                <li><a href="main-page.php"><i class="fas fa-cloud"></i>T/H</a></li>
                <li><a href="profile.php"><i class="fas fa-user"></i>Profile</a></li>
                <li><a href="settings.php"><i class="fas fa-cog"></i>Settings</a></li>
                <li><a href="index.php" onclick="return logOut();"><i class="fas fa-sign-out-alt"></i>Log out</a></li>
            </ul>
        </div>
        <div class="content">
            <div class="header">Temperature and Humidity</div>
            <div class="info">
                <div class="chart">
                    <p class="sensor_name">Temperature</p>
                    <div id="g1" class="gauge"></div>
                </div>
            
                <div class="chart">
                    <p class="sensor_name">Humidity</p>
                    <div id="g2" class="gauge"></div>
                </div>
                <br>
                <form class="buttons" action="php/sendData.php" method="POST">
                    <button id="power" class="waves-effect waves-light btn-large" value="1"><i class="large material-icons">power_settings_new</i></button>
                    <button id="add" class="waves-effect waves-light btn-large" value="2"><i class="material-icons">add</i></button>
                    <button id="remove" class="waves-effect waves-light btn-large" value="3"><i class="material-icons">remove</i></button>
                </form>
            </div>
        </div>
    </div>
    
    <script src="js/raphael-2.1.4.min.js"></script>
    <script src="js/justgage.js"></script>	
    <script src="js/jquery-2.1.0.min.js"></script>
    <script src="js/main-page.js"></script>
</body>
</html>
