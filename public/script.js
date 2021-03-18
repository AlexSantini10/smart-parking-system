
document.addEventListener('DOMContentLoaded', async () => {

    // Log
    console.log('here');
    const table = document.getElementById('table-body');

    const relLog = async () => {
        fetch('/api/parcheggio/log', { method: 'GET' })
        .then(res => res.json())
        .then(json => {

            table.innerHTML="";
            json.forEach(element => {
                let tr = document.createElement('tr');

                table.appendChild(tr);

                let id = document.createElement('th');
                id.innerHTML = '' + element.ID;
                tr.appendChild(id);

                let entrataUscita = document.createElement('td');
                entrataUscita.innerHTML = element.entrataUscita==1 ? 'Entrata' : 'Uscita';
                tr.appendChild(entrataUscita);

                let tempo = document.createElement('td');
                tempo.innerHTML = '' + element.time;
                tr.appendChild(tempo);
            });

        })
        .catch(err => console.log(err));
    };

    // Posti

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

    const setUpdated = async () => {
        fetch('/api/parcheggio/setUpdated', {method:'GET'})
        .catch(err => console.log(err));
    }

    const checkForUpdate = async () => {
        fetch('/api/parcheggio/toUpdate', {method:'GET'})
        .then(res => res.json())
        .then(json => {
            if(json.isToUpdate==1){
                console.log('da aggiornare');
                relPosti();
                relLog();
                setUpdated();
            }
        })
        .catch(err => console.log(err));
    }
   
    relLog();
    relPosti();
    setUpdated();
    setInterval(checkForUpdate, 1000);

});