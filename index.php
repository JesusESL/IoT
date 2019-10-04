<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Iot project</title>
    <meta name="viewport" content="width=device-width">
    <style>
        .container1 {
            width: 450px;
            margin: 3em 0 0 15em;
            text-align: center;
            float: left;
        }

        .container2 {
            width: 450px;
            margin: 3em 15em 0 0;
            text-align: center;
            float: right;
        }

        .container3 {
            width: 450px;
            margin: 3em 0 0 15em;
            text-align: center;
            float: bottom;
        }

        h1{
            font-family:Arial, Helvetica, sans-serif;   
            margin-bottom: 0;
        }

        .gauge {
            width: 450px;
            height: 450px;
        }

        a:link.button,
        a:active.button,
        a:visited.button,
        a:hover.button {
            margin: 30px 5px 0 2px;
            padding: 7px 13px;
        }
    </style>
</head>
<body>
    <div class="container1">
        <h1>Temperatura</h1>
        <div id="g1" class="gauge"></div>
    </div>

    <div class="container2">
        <h1>Humedad</h1>
        <div id="g2" class="gauge"></div>
    </div>

    <script src="js/raphael-2.1.4.min.js"></script>
    <script src="js/justgage.js"></script>	
    <script src="js/jquery-2.1.0.min.js"></script>
    <script>
        var g1, g2;
        document.addEventListener("DOMContentLoaded", function(event) {
            g1 = new JustGage({
                id: "g1",
                value: 0,
                min: 0,
                max: 100,
                donut: true,
                gaugeWidthScale: 0.6,
                counter: true,
                hideInnerShadow: true,
                label: "°C"
                
            });
            g2 = new JustGage({
                id: "g2",
                value: 0,
                min: 0,
                max: 100,
                donut: true,
                gaugeWidthScale: 0.6,
                counter: true,
                hideInnerShadow: true,  
                label: "%"
            });
        });
        
        window.setInterval(
            function(){
                opcion = 1;
                datos = {"Opcion":opcion};
                $.ajax({
                url: "php/base_datos.php",
                type: "POST",
                data: datos
                }).done(function(respuesta){
                if (respuesta.estado === "ok") {
                    console.log(JSON.stringify(respuesta));
                    temperature = JSON.parse(respuesta.temperature);
                    humidity = JSON.parse(respuesta.humidity);
                    g1.refresh(temperature);
                    g2.refresh(humidity);
                    return 1;
                } else
                    g1.refresh(0);
                    g2.refresh(0);
                });
            }
        ,1000);
    </script>
</body>
</html>
