<?php
	require_once './conn.db.php';
	
	$myDB=new mysqli($host, $user, $pass, $db);
    
    $query = "UPDATE toUpdate SET isToUpdate=0";
    $myDB->query($query);
 