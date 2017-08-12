<?php 
	include "inc/koneksi.php";

	$data = json_decode(file_get_contents("php://input"));

	$sql = "SELECT * FROM karyawan WHERE id = '$data->id'";
	$result = $openServer->query($sql);

	if ($result ->num_rows > 0) {
		
		$data = array() ;
		while ($row = $result->fetch_assoc()) {
			$data[] = $row;
		}
	}

	else {
		echo "0 results";
	}

	echo json_encode($data);

	$openServer->close();

	function login() {
		
	}

?>