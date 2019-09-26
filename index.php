<?
	echo "Testing";
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

	$dato1 = $_GET["dato1"];
	$dato2 = $_GET["dato2"];
	$temperatura = $_GET["temperatura"];
	
	echo "Dato1".$dato1.",Dato2".$dato2.",Temperatura".$temperatura."\n";
	
	if($temperatura!=null)
	{
		$query ="INSERT INTO test_table (dato1,dato2,temperatura) VALUES (".$dato1.",".$dato2.",".$temperatura.")";
		
		pg_query($query) or die('Error: ' . pg_last_error());
		
		echo "Elemento guardados"
		console.log("Elemento guardados")	
	}
	console.log("Test")	
	// Close connection
	pg_close($dbconn);


?>