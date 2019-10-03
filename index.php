<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Iot project</title>
    <meta name="viewport" content="width=device-width">
    <style>
        .container {
        width: 450px;
        margin: 0 auto;
        text-align: center;
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
    <div class="container">
        <div id="g1" class="gauge"></div>
    </div>

    <script src="js/raphael-2.1.4.min.js"></script>
    <script src="js/justgage.js"></script>	
    <script src="js/jquery-2.1.0.min.js"></script>
    <script>
        var g1;
        document.addEventListener("DOMContentLoaded", function(event) {
            g1 = new JustGage({
                id: "g1",
                value: 0,
                min: 0,
                max: 100,
                donut: true,
                gaugeWidthScale: 0.6,
                counter: true,
                hideInnerShadow: true
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
                    g1.refresh(temperature);
                    return 1;
                } else
                    g1.refresh(0);
                });
            }
        ,1000);
    </script>
</body>
</html>
