#define entrataPin 10
#define uscitaPin 6
#define redLed 4
#define greenLed 2
#define apriChiudiSbarra 0

void accendiLed(int led) {
  digitalWrite(led, HIGH);
}
 
void spegniLed(int led) {
  digitalWrite(led, LOW);
}

int lettura(int pin) {
  return digitalRead(pin); 
}

void Println(int text){
  Serial.println(text); 
}

void setup() {
  
  // Setup serial monitor
  Serial.begin(9600);
  
  // Setup pin
  pinMode(entrataPin, INPUT); // Cavo rosso
  pinMode(uscitaPin, INPUT); // Cavo verde
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  
  // Reset led
  digitalWrite(redLed, LOW);
  digitalWrite(greenLed, LOW);
}

// Delay in millisecondi
#define timeDelay 500

// Prossimo tempo di esecuzione
unsigned long long next = timeDelay;

// Stato della sbarra (Aperta: conta entrate/uscite, Chiusa: non conta)
bool isOpen=false;

// Stato dell'ultimo ciclo per evitare di contare più volte lo stesso evento
bool lastEnt=false, lastExt=false;

void loop() {
  // Delay
  if(millis()>=next) {
    bool ent=false, ext=false;
    
    next += timeDelay;
    int entrata = lettura(entrataPin);
    int uscita = lettura(uscitaPin);
    int apriChiudi = lettura(apriChiudiSbarra);

    // Verifica se sta entrando o uscendo qualcuno
    if (entrata) ent=true;
    if (uscita) ext=true;
    
    if (apriChiudi) {
      isOpen = !isOpen;
    }
    
    // Se la sbarra è aperta, conto le entrate e le uscite
    if(isOpen) {
      
      if(ent && !lastEnt)
        Println(1);
      if(ext && !lastExt) 
        Println(-1);

      accendiLed(greenLed);
      spegniLed(redLed);  

      lastEnt = ent;
      lastExt = ext;
    }
    else {
      accendiLed(redLed);
      spegniLed(greenLed);
    }
  }


}
