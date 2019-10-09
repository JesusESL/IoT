<?php
    $_SESSION["button"] = $_POST["button"]; ;
    $datos = array(
		'estado' => 'ok',
		'button' => $_SESSION["button"]
	);
	echo json_encode($datos, JSON_FORCE_OBJECT);
?>

