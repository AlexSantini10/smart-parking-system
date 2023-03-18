<?php
    require_once "./conn.db.php";

    $table = 'log';
    $myDB=new mysqli($host, $user, $pass, $db);
	
	$result = $myDB->query("SELECT * FROM $table");
	$rows = [];

	while($row = $result->fetch_assoc())
		$rows[] = $row;
	
	echo json_encode($rows,  JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE );
 