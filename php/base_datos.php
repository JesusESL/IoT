<?php

	$temperatura = 0;
	
	$host = "ec2-54-83-201-84.compute-1.amazonaws.com";
	$user = "ryvfvynzqazlcx";
	$password = "54073c0f267ca0ace145876ac7d4d981064d8c9f1af3efd503512a629ec800b7";
	$dbname = "d1jv2gq7sc413i";
	$port = "5432";
	$conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password." options='--client_encoding=UTF8'";
	// establecemos una conexion con el servidor postgresSQL
	$conexion = pg_connect($conn_string);
	 
	// Revisamos el estado de la conexion en caso de errores. 
	if($conexion) {
		
		
		
		$sql = "SELECT * FROM test_table WHERE id=42";
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