
document.addEventListener('DOMContentLoaded', async () => {

    const postiTotali = document.getElementById('posti-tot');
    const postiDisponibili = document.getElementById('posti-disp');

    const relPosti = async () => {
        fetch('/api/parcheggio/posti', {method:'GET'})
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

    if (!isNaN(val) && val>=0){
        fetch("/api/parcheggio/postMaintenance/" + val, {method:'GET'})
        .then(res => res.json())
        .then(json => {
            console.log(json);
        })
        .catch(err => console.log(err));
    }
    else{
        alert('Inserire un valore numerico valido');
    }

    /*fetch("/api/parcheggio/postMaintenance/" + val, {method:'GET'})
    .then(res => res.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err));*/
    
    
}