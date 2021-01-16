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

void loop() {
  if(millis()>=next) {
    int postiToAdd = 0;
    
    next += timeDelay;
    int entrata = lettura(entrataPin);
    int uscita = lettura(uscitaPin);
    int apriChiudi = lettura(apriChiudiSbarra);
    
    if (entrata) ++postiToAdd;
    if (uscita) --postiToAdd;
    
    if (apriChiudi) {
      isOpen = !isOpen;
    }
    
    
    if(isOpen) {
      Println(postiToAdd);
      accendiLed(greenLed);
      spegniLed(redLed);  
    }
    else {
      Println(0);
      accendiLed(redLed);
      spegniLed(greenLed);
    }
  }
   
  
}
