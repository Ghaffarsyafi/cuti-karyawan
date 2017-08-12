<?php 

	include "inc/koneksi.php";

	$data = json_decode(file_get_contents("php://input"));

	$sql = "INSERT INTO karyawan (id, no_induk, nama, alamat, jabatan, no_telpon, email)
	VALUES ('$data->id', '$data->no_induk', '$data->nama', '$data->alamat', '$data->jabatan', '$data->no_telpon', '$data->email')";

	if ($data->nama) {
		$qry = $openServer->query($sql);
	}

	$openServer->close();

?>

