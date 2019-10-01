

function LeeTemperatura()
{
			temperatura=0;
			
			datos = {"Opcion":1};
			
			
			/*nombre = "n";
			apellido = "n";
			edad = "n";
			
			datos = {"nombre":nombre, "apellido":apellido,"edad":edad};
			*/
			
			
			$.ajax({
			url: "php/LeeDatos.php",
			type: "POST",
			data: datos
			}).done(function(respuesta){
			if (respuesta.estado === "ok") {
				console.log(JSON.stringify(respuesta));
				temperatura = JSON.parse(respuesta.temperatura);
				

			$(".respuesta").html("Servidor:<br><pre>"+JSON.stringify(respuesta, null, 2)+"</pre>");
			return 1;
			}
			else
								return 100;
			});
			

			
}