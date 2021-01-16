<?php
	require_once './conn.db.php';
	
	$myDB=new mysqli($host, $user, $pass, $db);
    
    if(isset($_GET['pos'])) {

        $result = $myDB->query("SELECT * FROM `posti`");
	    $rows = [];

	    while($row = $result->fetch_assoc())
            $rows[] = $row;
            
        $entered = $_GET['pos'] - ($rows[0]['postiTotali']-$rows[0]['postiDisponibili']);

        echo("UPDATE `posti` SET `postiTotali`={$_GET['pos']} WHERE 1");
        echo("UPDATE `posti` SET `postiDisponibili`={$entered} WHERE 1");
        $myDB->query("UPDATE `posti` SET `postiTotali`={$_GET['pos']} WHERE 1");
        $myDB->query("UPDATE `posti` SET `postiDisponibili`={$entered} WHERE 1");
        $myDB->close();
    }
 