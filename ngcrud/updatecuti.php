<?php 
	include "inc/koneksi.php";

	$data = json_decode(file_get_contents("php://input"));

	$sql = "UPDATE cuti SET 
	no_induk ='$data->no_induk', nama ='$data->nama', nama_bagian='$data->nama_bagian', jabatan='$data->jabatan', tgl_cuti='$data->tgl_cuti', tgl_masuk='$data->tgl_masuk', keterangan='$data->keterangan'
	WHERE no_induk = $data->no_induk";

	$qry = $openServer->query($sql);

	if ($data->nama) {
	}

	$openServer->close();
?>

