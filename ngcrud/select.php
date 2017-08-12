<?php
	
	include "inc/koneksi.php";

	$sql = "SELECT * FROM karyawan ORDER BY id ASC";
	$result = $openServer->query($sql);

	if ($result->num_rows > 0) {
	    
	     $data = array() ;

	    while($row = $result->fetch_assoc()) {
	        $data[] = $row;
	    }

	    echo json_encode($data);

	} else {
	    echo "0";
	}
	
	$openServer->close();
?>
