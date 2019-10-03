<?php
	$host = "ec2-54-83-201-84.compute-1.amazonaws.com";
	$user = "ryvfvynzqazlcx";
	$password = "54073c0f267ca0ace145876ac7d4d981064d8c9f1af3efd503512a629ec800b7";
	$dbname = "d1jv2gq7sc413i";
	$port = "5432";
	$conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password." options='--client_encoding=UTF8'";
	$conexion = pg_connect($conn_string);

	if($conexion) {
		$sql = "SELECT * FROM iot_table WHERE id=1";
		$rs = pg_query( $conexion, $sql );
		if( $rs ){
			if( pg_num_rows($rs) >= 0 ){
				while( $obj = pg_fetch_object($rs) )
					$temperature = $obj->temperature;
					$humidity = $obj->humidity;
					$temperature = $obj->date;
			}
		}
	} 

	$opcion = $_POST["opcion"];
	header('Content-Type: application/json');
	$datos = array(
		'estado' => 'ok',
		'temperatura' => $temperatura,
		'humidity' => $humidity,
		'date' => $date
	);
	echo json_encode($datos, JSON_FORCE_OBJECT);
?>