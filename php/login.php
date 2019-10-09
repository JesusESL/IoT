<?php
    $host = "ec2-54-83-201-84.compute-1.amazonaws.com";
    $user = "ryvfvynzqazlcx";
    $password = "54073c0f267ca0ace145876ac7d4d981064d8c9f1af3efd503512a629ec800b7";
    $dbname = "d1jv2gq7sc413i";
    $port = "5432";
    $conn_string = "host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$password." options='--client_encoding=UTF8'";
    $conexion = pg_connect($conn_string);

    if($conexion) {
        $sql = "SELECT * FROM users";
        $rs = pg_query( $conexion, $sql );
        $usernames = pg_fetch_all_columns($rs, 1);
        $passwords = pg_fetch_all_columns($rs, 2);
        $roles = pg_fetch_all_columns($rs, 3);
        /*if( $rs ){
            for ($x = 0; $x < pg_num_cols($rs); $x++){
                if( pg_num_rows($rs) >= 0 ){
                    while( $obj = pg_fetch_object($rs) ){
                        array_push($usernames, $obj->username);
                        array_push($passwords, $obj->pass);
                    }
                }
            }
        }*/
    }
    
    $opcion = $_POST["opcion"];
	header('Content-Type: application/json');
	$datos = array(
		'estado' => 'ok',
		'usernames' => $usernames,
        'passwords' => $passwords,
        'roles' => $roles
	);
	echo json_encode($datos, JSON_FORCE_OBJECT);
?>