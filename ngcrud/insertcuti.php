<?php 

	include "inc/koneksi.php";

	$data = json_decode(file_get_contents("php://input"));

	$sql = "INSERT INTO cuti (no_induk, nama, nama_bagian, jabatan, tgl_cuti, tgl_masuk, keterangan)
	VALUES ('$data->no_induk', '$data->nama', '$data->nama_bagian', '$data->jabatan', '$data->tgl_cuti', '$data->tgl_masuk', '$data->keterangan')";

	if ($data->nama) {
		$qry = $openServer->query($sql);
	}

	$openServer->close();

?>
