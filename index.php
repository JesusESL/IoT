
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Obtener JSON con AJAX</title>
</head>

<body>
<h1>Datos para enviar a PHP</h1>

<input type="number" id="dato1" placeholder="dato1" accept="text/plain"><br><br>
<input type="number" id="dato2" placeholder="dato2" accept="text/plain"><br><br>
<input type="number" id="temperatura" placeholder="temperatura" accept="text/plain">

<div class="enviar"><a href="">Enviar</a></div>
<hr>
<div class="respuesta"></div>

<script src="js/jquery-2.1.0.min.js"></script>
<script>
$(".enviar").click(function(e) {
	
	e.preventDefault();
	var dato1 = $("#dato1").val(),
	dato2 = $("#dato2").val(),
	temperatura = $("#temperatura").val(),

	//"nombre del parámetro POST":valor (el cual es el objeto guardado en las variables de arriba)
	datos = {"dato1":dato1, "dato2":dato2,"temperatura":temperatura};

	$.ajax({
		url: "php/datos.php",
		type: "POST",
		data: datos
	}).done(function(respuesta){
		if (respuesta.estado === "ok") {
			console.log(JSON.stringify(respuesta));

			var dato1 = respuesta.dato1,
			dato2 = respuesta.dato2,
			temperatura = respuesta.temperatura;

			$(".respuesta").html("Servidor:<br><pre>"+JSON.stringify(respuesta, null, 2)+"</pre>");
		}
	});
});
</script>
</body>
</html>

