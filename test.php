
<?php
    $myDB=new mysqli($host, $user, $pass, $db);
    $query = "SELECT * FROM log";

    $RS = $myDB->query($query);

    echo $RS;
?>