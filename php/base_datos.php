<?php

	$temperatura = 0;
	
	$host = "ec2-54-225-113-7.compute-1.amazonaws.com";
	$user = "gazcbqgnxtqhas";
	$password = "8cfc04b0dafa4a2a9a4c561fe6309990f5e640e7ab9841d899a2324fd9423bce";
	$dbname = "ddpd7e6mh8je0h";
	$port = "5432";
	$conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password." options='--client_encoding=UTF8'";
	// establecemos una conexion con el servidor postgresSQL
	$conexion = pg_connect($conn_string);
	 
	// Revisamos el estado de la conexion en caso de errores. 
	if($conexion) {
		
		
		
		$sql = "SELECT * FROM tbl_iot WHERE id=1";
		// Ejecutar la consulta:
		$rs = pg_query( $conexion, $sql );
		if( $rs )
		{
		// Obtener el número de filas:
			 if( pg_num_rows($rs) >= 0 )
			{
				// Recorrer el resource y mostrar los datos:
				 while( $obj = pg_fetch_object($rs) )
					 
					 $temperatura = $obj->temperatura;
			}
			
		}
		
	} 



//Obtenemos los datos de los input
$opcion = $_POST["opcion"];

//Hacemos las comprobaciones que sean necesarias... (sanitizar los textos para evitar XSS e inyecciones de código, comprobar que la edad sea un número, etc.)
//Omitido para la brevededad del código
//PERO NO OLVIDES QUE ES ALGO IMPORTANTE.

//Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal
header('Content-Type: application/json');
//Guardamos los datos en un array
$datos = array(
'estado' => 'ok',

'temperatura' => $temperatura
);
//Devolvemos el array pasado a JSON como objeto
echo json_encode($datos, JSON_FORCE_OBJECT);
?>