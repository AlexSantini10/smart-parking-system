
document.addEventListener('DOMContentLoaded', async () => {

    const postiTotali = document.getElementById('posti-tot');
    const postiDisponibili = document.getElementById('posti-disp');

    const relPosti = async () => {
        fetch('./get_posti.php', {method:'GET'})
        .then(res => res.json())
        .then(json => {
            postiTotali.innerHTML = 'Posti totali: ' + json.postiTotali;
            postiDisponibili.innerHTML = 'Posti disponibili: ' + json.postiDisponibili;
        })
        .catch(err => console.log(err));
    }

    relPosti();    
    setInterval(relPosti, 1000);

    document.getElementById("posButton").addEventListener('click', (e) => {
        e.preventDefault();

        postMaintenance();

    });

}); 

function postMaintenance() {
    var val = '' + parseInt(document.getElementById('postiTot').value);
    document.getElementById('postiTot').value = '';

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            var dbText = xhttp.responseText;
            var json = JSON.parse(dbText);
        
            if(json.response==0)
                alert('Errore, inserire un numero valido');
        }
    };

    xhttp.open("GET", "post_maintenance.php?pos=" + val, true);
    xhttp.send();
    
}