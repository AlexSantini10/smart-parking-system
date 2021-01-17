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
  
  Serial.begin(9600);
  
  pinMode(entrataPin, INPUT); /// Cavo rosso
  pinMode(uscitaPin, INPUT); /// Cavo verde
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  
  digitalWrite(redLed, LOW);
  digitalWrite(greenLed, LOW);
}

#define timeDelay 500
unsigned long long next = timeDelay;
bool isOpen=false;
bool lastEnt=false, lastExt=false;

void loop() {
  if(millis()>=next) {
    bool ent=false, ext=false;
    
    next += timeDelay;
    int entrata = lettura(entrataPin);
    int uscita = lettura(uscitaPin);
    int apriChiudi = lettura(apriChiudiSbarra);
    
    if (entrata) ent=true;
    if (uscita) ext=true;
    
    if (apriChiudi) {
      isOpen = !isOpen;
    }
    
    
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
