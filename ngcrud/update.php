<?php 
	include "inc/koneksi.php";

	$data = json_decode(file_get_contents("php://input"));

	$sql = "UPDATE karyawan SET 
	no_induk ='$data->no_induk', nama ='$data->nama', alamat='$data->alamat', jabatan='$data->jabatan', no_telpon='$data->no_telpon', email='$data->email'
	WHERE id = $data->id";

	$qry = $openServer->query($sql);

	if ($data->nama) {
	}

	$openServer->close();
?>

