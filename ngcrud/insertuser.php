<?php 

	include "inc/koneksi.php";

	$data = json_decode(file_get_contents("php://input"));

	$sql = "INSERT INTO tbllogin (username, password)
	VALUES ('$data->username', '$data->password')";

	if ($data->username) {
		$qry = $openServer->query($sql);
	}

	$openServer->close();

?>