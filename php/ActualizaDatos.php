<?
	$host = "ec2-54-225-113-7.compute-1.amazonaws.com";
	$user = "gazcbqgnxtqhas";
	$password = "8cfc04b0dafa4a2a9a4c561fe6309990f5e640e7ab9841d899a2324fd9423bce";
	$dbname = "ddpd7e6mh8je0h";
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
	$humedad = $_GET["humedad"];
	
	$dato1 = $_GET["dato1"];
	
	$dato2 = $_GET["dato2"];
	
	date_default_timezone_set('America/Mexico_City');
	$tiempo = date("Y-m-d H:i:s");
	
	
	if($temperatura!=null)
	{
		$query ="UPDATE tbl_iot SET temperatura = ".$temperatura." WHERE id = 1";
		
		
		
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