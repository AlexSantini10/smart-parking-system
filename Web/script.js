
document.addEventListener('DOMContentLoaded', async () => {

    // Log
    console.log('here');
    const table = document.getElementById('table-body');

    const relLog = async () => {
        fetch('./get_log.php', { method: 'GET' })
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
        fetch('./get_posti.php', {method:'GET'})
        .then(res => res.json())
        .then(json => {
            postiTotali.innerHTML = 'Posti totali: ' + json.postiTotali;
            postiDisponibili.innerHTML = 'Posti disponibili: ' + json.postiDisponibili;
        })
        .catch(err => console.log(err));
    }

    const setUpdated = async () => {
        fetch('./set_updated.php', {method:'GET'})
        .catch(err => console.log(err));
    }

    const checkForUpdate = async () => {
        fetch('./get_update.php', {method:'GET'})
        .then(res => res.json())
        .then(json => {
            if(json[0].isToUpdate==1){
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