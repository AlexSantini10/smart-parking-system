<<!DOCTYPE html>

<?php
    $host='localhost';
    $user='5ATL';
    $pass='sistemi';
    $db='parcheggio';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parcheggio</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>
<body class="bg-dark">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Parcheggio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <?php 
                $myDB=new mysqli($host, $user, $pass, $db);
                $query = "SELECT * FROM posti";

                $RS = $myDB->query($query);
                list($id, $postiTotali, $postiDisponibili) = $RS->fetch_array();
            ?>
            <a class="nav-link active" aria-current="page" href="#">Posti totali: <?php echo $postiTotali; ?></a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Posti disponibili: <?php echo $postiDisponibili; ?></a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

    <table class="table table-sm table-dark" style="margin-top: 30px;">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Tipo</th>
        <th scope="col">Tempo</th>
        </tr>
    </thead>
    <tbody>

        <?php
            $myDB=new mysqli($host, $user, $pass, $db);
            $query = "SELECT * FROM log";

            $RS = $myDB->query($query);

            while($row_RS=$RS->fetch_assoc()){
                ?> <tr> 
                        <th> <?php echo $row_RS['ID']; ?> </th>
                        <td> <?php echo $row_RS['entrataUscita'] ? 'Entrata' : 'Uscita'; ?> </td>
                        <td> <?php echo $row_RS['tempo']; ?></td> 
                    </tr>
                <?php
            }
        ?>


    </tbody>
    </table>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
</body>
</html>