<?php
	$host = "ec2-54-83-201-84.compute-1.amazonaws.com";
	$user = "ryvfvynzqazlcx";
	$password = "54073c0f267ca0ace145876ac7d4d981064d8c9f1af3efd503512a629ec800b7";
	$dbname = "d1jv2gq7sc413i";
	$port = "5432";
	$conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password." options='--client_encoding=UTF8'";
	$dbconn = pg_connect($conn_string);

	$id = $_GET["id"];
	$temperature = $_GET["temperature"];
	$humidity = $_GET["humidity"];
	$latitude = $_GET["latitude"];
	$longitude = $_GET["longitude"];
	date_default_timezone_set('America/Mexico_City');
	$date = date("Y-m-d");

	echo $latitud;
	echo "\n";

	if($temperature != null){
		$query =" UPDATE iot SET temperature = ".$temperature.", humidity = ".$humidity.", date = '".$date."' WHERE sensor_id =  ".$id."";
		pg_query($query) or die('Error: ' . pg_last_error());
		echo "Dato Actualizado";
	}

	if($latitude != null){
		$query =" UPDATE iot SET latitude = ".$latitude.", longitude = ".$longitude." WHERE sensor_id =  ".$id."";
		pg_query($query) or die('Error: ' . pg_last_error());
		echo "Dato Actualizado";
	}
	pg_close($dbconn);
?>