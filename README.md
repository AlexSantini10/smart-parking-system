# Smart Parking System 🚗

Sistema di gestione parcheggio sviluppato come progetto scolastico per i corsi di **Sistemi e Reti** e **TPSIT** (Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni).

## Descrizione

Il sistema monitora in tempo reale il numero di posti disponibili in un parcheggio tramite sensori fisici collegati ad un Arduino, una Raspberry Pi come server intermedio e un'interfaccia web per la visualizzazione e la gestione.

Quando un'auto entra o esce dal parcheggio, i sensori sull'Arduino rilevano il movimento, la Raspberry Pi aggiorna il database MySQL, e l'interfaccia web mostra i dati aggiornati in automatico ogni secondo.

## Architettura

```
[Sensori] --> [Arduino] --[Seriale]--> [Raspberry Pi (Python)] --> [Database MySQL]
                                                                          |
                                                                    [Web Server PHP]
                                                                          |
                                                                 [Interfaccia Web]
```

### Componenti

| Componente | Tecnologia | Descrizione |
|---|---|---|
| **Arduino** | C++ (Arduino IDE) | Legge i sensori di entrata/uscita e controlla i LED e la sbarra |
| **Server** | Python 3 + Raspberry Pi | Legge i dati dal seriale Arduino e aggiorna il database |
| **Database** | MySQL / MariaDB | Memorizza i posti disponibili e il log degli accessi |
| **Web** | PHP + JavaScript | Interfaccia web per il monitoraggio e la manutenzione |

## Struttura del progetto

```
parcheggio/
├── Arduino/
│   └── arduino.ino         # Sketch Arduino per lettura sensori e controllo LED
├── Server/
│   └── script.py           # Script Python per Raspberry Pi
├── DB/
│   └── parcheggio.sql      # Schema e dati iniziali del database
└── Web/
    ├── webInterface.php     # Pagina principale di monitoraggio
    ├── maintenance.php      # Pagina di manutenzione (admin)
    ├── script.js            # Logica JS per aggiornamento in tempo reale
    ├── maintenance_script.js # Logica JS per la pagina di manutenzione
    ├── conn.db.php          # Configurazione connessione al database
    ├── get_log.php          # API: recupera il log accessi
    ├── get_posti.php        # API: recupera posti totali e disponibili
    ├── get_update.php       # API: verifica se ci sono aggiornamenti
    ├── set_updated.php      # API: segna i dati come aggiornati
    └── post_maintenance.php # API: aggiorna il numero di posti totali
```

## Funzionamento

### Arduino (`Arduino/arduino.ino`)

L'Arduino è collegato a:
- **Pin 10** – Sensore entrata (INPUT)
- **Pin 6** – Sensore uscita (INPUT)
- **Pin 4** – LED rosso (parcheggio chiuso)
- **Pin 2** – LED verde (parcheggio aperto)
- **Pin 0** – Controllo apertura/chiusura sbarra

Quando la sbarra è aperta:
- Rileva un'entrata → invia `1` via seriale e accende il LED verde
- Rileva un'uscita → invia `-1` via seriale

### Server Python (`Server/script.py`)

Gira su Raspberry Pi e:
1. Si connette al database MySQL locale
2. Legge i dati inviati dall'Arduino via porta seriale (`/dev/ttyACM0`)
3. Aggiorna il contatore `postiDisponibili` nella tabella `posti`
4. Inserisce un record nella tabella `log`
5. Imposta il flag `isToUpdate` a `1` nella tabella `toUpdate` per notificare l'interfaccia web

### Database (`DB/parcheggio.sql`)

Tre tabelle:
- **`posti`** – Contiene `postiTotali` e `postiDisponibili` (default: 100 posti)
- **`log`** – Storico degli accessi con tipo (entrata/uscita) e timestamp
- **`toUpdate`** – Flag per segnalare aggiornamenti all'interfaccia web

### Interfaccia Web (`Web/`)

- **`webInterface.php`** – Mostra in tempo reale i posti totali, i posti disponibili e la tabella con il log degli accessi. Si aggiorna automaticamente ogni secondo tramite polling.
- **`maintenance.php`** – Permette all'amministratore di modificare il numero totale di posti del parcheggio.

## Installazione e configurazione

### Requisiti

- Arduino IDE
- Raspberry Pi con Python 3
- Web server con PHP (es. Apache/Nginx) e MySQL/MariaDB
- Librerie Python: `pyserial`, `RPi.GPIO`, `mysql-connector-python`

### 1. Database

Importare lo schema SQL nel database MySQL/MariaDB:

```bash
mysql -u root -p < DB/parcheggio.sql
```

### 2. Web Server

1. Copiare la cartella `Web/` nella root del web server (es. `/var/www/html/`)
2. Modificare `conn.db.php` con le credenziali del database:

```php
$host = 'localhost';
$user = 'tuo_utente';
$pass = 'tua_password';
$db   = 'parcheggio';
```

### 3. Arduino

1. Aprire `Arduino/arduino.ino` con l'Arduino IDE
2. Caricare lo sketch sulla scheda Arduino
3. Collegare i sensori e i LED ai pin definiti nel codice

### 4. Script Python (Raspberry Pi)

1. Installare le dipendenze:

```bash
pip install pyserial mysql-connector-python RPi.GPIO
```

2. Modificare `Server/script.py` con le credenziali del database (righe 8–13):

```python
mydb = mysql.connector.connect(
    host   = "localhost",
    user   = "tuo_utente",
    passwd = "tua_password",
    database = "parcheggio"
)
```

3. Verificare la porta seriale corretta (di default `/dev/ttyACM0`):

```bash
ls /dev/ttyACM*
```

4. Avviare lo script:

```bash
python3 Server/script.py
```

## Tecnologie utilizzate

- **Arduino** (C++) – Microcontrollore per la lettura dei sensori
- **Python 3** – Script server su Raspberry Pi
- **PHP 7** – Backend web
- **MySQL / MariaDB** – Database relazionale
- **Bootstrap 5** – Framework CSS per l'interfaccia utente
- **JavaScript (Vanilla)** – Aggiornamento dinamico della pagina web
