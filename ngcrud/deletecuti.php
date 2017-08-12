<?php 

  	include "inc/koneksi.php";

	$data = json_decode(file_get_contents("php://input"));

	$sql = "DELETE FROM cuti WHERE no_induk = $data->no_induk";
	$result = $openServer->query($sql);

	$openServer->close();

?>