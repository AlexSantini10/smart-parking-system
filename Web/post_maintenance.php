<?php
	require_once './conn.db.php';
	
	$myDB=new mysqli($host, $user, $pass, $db);
    
    if(isset($_GET['pos'])) {

        $result = $myDB->query("SELECT * FROM `posti`");
	    $rows = [];

	    while($row = $result->fetch_assoc())
            $rows[] = $row;
        
        if(is_numeric($_GET['pos']))
            $entered = $_GET['pos'] - ($rows[0]['postiTotali']-$rows[0]['postiDisponibili']);
        else 
            $entered=-1;

        if($entered>=0){
            echo("UPDATE `posti` SET `postiTotali`={$_GET['pos']} WHERE 1");
            echo("UPDATE `posti` SET `postiDisponibili`={$entered} WHERE 1");
            $myDB->query("UPDATE `posti` SET `postiTotali`={$_GET['pos']} WHERE 1");
            $myDB->query("UPDATE `posti` SET `postiDisponibili`={$entered} WHERE 1");
            $myDB->close();

            $pippo=array('response'=>1);
	        echo json_encode($pippo,  JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE );

        }
        else{
            $pippo=array('response'=>0);
	        echo json_encode($pippo,  JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE );
        }
        
    }
  