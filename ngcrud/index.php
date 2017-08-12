<?php 
	

	function login() {

		include "inc/koneksi.php";

		$data = json_decode(file_get_contents("php://input"));

		// $sql = "SELECT * FROM tbllogin WHERE username = '$data->username' AND password = '$data->password' ";
		$sql = "SELECT * FROM tbllogin WHERE username = 'admin' AND password = 'admin' ";
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
	}

	login();

?>