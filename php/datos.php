<?php
//Obtenemos los datos de los input
$dato1 = $_POST["dato1"];
$dato2 = $_POST["dato2"];
$temperatura = $_POST["temperatura"];

//Hacemos las comprobaciones que sean necesarias... (sanitizar los textos para evitar XSS e inyecciones de código, comprobar que la edad sea un número, etc.)
//Omitido para la brevededad del código
//PERO NO OLVIDES QUE ES ALGO IMPORTANTE.

//Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
header('Content-Type: application/json');
//Guardamos los datos en un array
$datos = array(
'estado' => 'ok',
'dato1' => $dato1, 
'dato2' => $dato2, 
'temperatura' => $temperatura
);
//Devolvemos el array pasado a JSON como objeto
echo json_encode($datos, JSON_FORCE_OBJECT);

    $host = "ec2-54-83-201-84.compute-1.amazonaws.com";
	$user = "ryvfvynzqazlcx";
	$password = "54073c0f267ca0ace145876ac7d4d981064d8c9f1af3efd503512a629ec800b7";
	$dbname = "d1jv2gq7sc413i";
	$port = "5432";
	
	$conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password." options='--client_encoding=UTF8'";
 
	// establecemos una conexion con el servidor postgresSQL
	$dbconn = pg_connect($conn_string);
	 
	// Revisamos el estado de la conexion en caso de errores. 
	if(!$dbconn) {
		echo "Error: No se ha podido conectar a la base de datos\n";
	} 
	else 
	{
		echo "Conexion exitosa!!\n";
	}
		
	if($temperatura!=null)
	{
		$query ="INSERT INTO test_tbl (dato1,dato2,temperatura) VALUES (".$datos1.",".$dato2.",".$temperatura.)";
		pg_query($query) or die('Error: ' . pg_last_error());
		echo "Dato insertado correctamente";
		
	}
	 
	//http_response_code(200)
	//header("Content-type:application/json");
	 
	// codificar la respuesta en formato JSON
	//echo json_encode($resutado); 
		 
	// Close connection
	pg_close($dbconn);
?>