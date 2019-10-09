<?php
    $_SESSION["button"] = $_POST["button"];

    $opcion = $_POST["opcion"];
	header('Content-Type: application/json');
    $datos = array(
		'estado' => 'ok',
		'button' => $_SESSION["button"]
	);
	echo json_encode($datos, JSON_FORCE_OBJECT);
?>

