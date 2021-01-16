
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

    relLog();
    setInterval(relLog, 1000);


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

    relPosti();    
    setInterval(relPosti, 1000);

});