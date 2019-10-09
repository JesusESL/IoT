<?php
    $button = $_POST["button"];
    $datos = array(
		'estado' => 'ok',
		'button' => $button
	);
	echo json_encode($datos, JSON_FORCE_OBJECT);
?>

