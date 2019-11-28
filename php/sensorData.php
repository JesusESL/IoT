<?php
	$host = "ec2-54-83-201-84.compute-1.amazonaws.com";
	$user = "ryvfvynzqazlcx";
	$password = "54073c0f267ca0ace145876ac7d4d981064d8c9f1af3efd503512a629ec800b7";
	$dbname = "d1jv2gq7sc413i";
	$port = "5432";
	$conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password." options='--client_encoding=UTF8'";
	$conexion = pg_connect($conn_string);

	$objects[] = 0;

	if($conexion) {
		$sql = "SELECT * FROM iot_table WHERE id=1";
		$rs = pg_query( $conexion, $sql );
		if( $rs ){
			if( pg_num_rows($rs) >= 0 ){
				while( $obj = pg_fetch_object($rs) ){
					$id = $obj->id
					$temperature = $obj->temperature;
					$humidity = $obj->humidity;
					$date = $obj->date;
					$latitude = $obj->date;
          $longitude = $obj->longitude;
          $sensor = array(
            'estado' => 'ok',
            'id' => $id,
            'temperature' => $temperature,
            'humidity' => $humidity,
            'date' => $date,
            'latitude' => $latitude,
            'longitude' => $longitude
          );
          console.log($sensor);
          array_push($objects, $sensor);
				}
			}
		}
	} 

	$opcion = $_POST["opcion"];
	header('Content-Type: application/json');
	echo json_encode($datos, JSON_FORCE_OBJECT);
?>