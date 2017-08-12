<?php 
	include "inc/koneksi.php";

	$data = json_decode(file_get_contents("php://input"));

	$sql = "DELETE FROM karyawan WHERE id = $data->id";
	$result = $openServer->query($sql);

	$openServer->close();
?>