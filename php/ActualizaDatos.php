<?
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
	 
	
	$temperatura = $_GET["temperatura"];
	
	date_default_timezone_set('America/Mexico_City');
	$tiempo = date("Y-m-d H:i:s");
	
	
	if($temperatura!=null)
	{
		$query ="UPDATE test_table SET temperatura = ".$temperatura." WHERE id = 42";
		
		
		
		pg_query($query) or die('Error: ' . pg_last_error());
		
		echo "Dato Actualizado";
		
	}
	 
	
	//http_response_code(200)
	//header("Content-type:application/json");
	 
	// codificar la respuesta en formato JSON
	//echo json_encode($resutado); 
		 
		 
	 
	// Close connection
	pg_close($dbconn);


?>