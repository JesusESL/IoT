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

	$data[] = 0;

	if($dbconn) {
		$sql = "SELECT * FROM iot";
		$rs = pg_query( $dbconn, $sql );
		if( $rs ){
			if( pg_num_rows($rs) >= 0 ){
				while( $obj = pg_fetch_object($rs) ){
					echo "Testing";
					$sensor_id = $obj->sensor_id;
					echo $sensor_id;
					$username = $obj->username;
					echo $username;
					$email = $obj->email;
					echo $email;
					$latitude = $obj->latitude;
					echo $latitude;
					$longitude = $obj->longitude;
					echo $longitude;
					$temperature = $obj->temperature;
					echo $temperature;
					$humidity = $obj->humidity;
					echo $humidity;
					$date = $obj->date;
					echo $date;

					/*$datos = array(
						'sensor_id' => $sensor_id,
						'username' => $username,
						'email' => $email,
						'latitude' => $latitude,
						'longitude' => $longitude,
						'temperature' => $temperature
						'humidity' => $humidity
						'date' => $date
					);
					array_push($data, $datos);*/
				}
			}
		}
	}
	
?>