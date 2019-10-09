<?php
    $host = "ec2-54-83-201-84.compute-1.amazonaws.com";
	$user = "ryvfvynzqazlcx";
	$password = "54073c0f267ca0ace145876ac7d4d981064d8c9f1af3efd503512a629ec800b7";
	$dbname = "d1jv2gq7sc413i";
	$port = "5432";
	$conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password." options='--client_encoding=UTF8'";
	$dbconn = pg_connect($conn_string);
	 
	if(!$dbconn) {
		echo "Error: No se ha podido conectar a la base de datos\n";
	} 
	else {
		echo "Conexion exitosa!!\n";
	}

	$button = $_POST["button"];
    console.log($button);
	/*if($button == "power"){
		$query ="UPDATE status_buttons SET powerButton=true, addButton=false, removeButton=false WHERE id = 1";
		pg_query($query) or die('Error: ' . pg_last_error());
		echo "Dato Actualizado";
	} else if($button == "add"){
		$query ="UPDATE status_buttons SET powerButton=false, addButton=true, removeButton=false WHERE id = 1";
		pg_query($query) or die('Error: ' . pg_last_error());
		echo "Dato Actualizado";
	} else if($button == "remove"){
		$query = "UPDATE status_buttons SET powerButton=false, addButton=false, removeButton=true WHERE id = 1";
		pg_query($query) or die('Error: ' . pg_last_error());
		echo "Dato Actualizado";
	} else{
        $query = "UPDATE status_buttons SET powerButton=false, addButton=false, removeButton=false WHERE id = 1";
		pg_query($query) or die('Error: ' . pg_last_error());
		echo "Dato Actualizado";
    }*/
	pg_close($dbconn);
?>

