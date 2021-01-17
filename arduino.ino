#define entrataPin 3
#define uscitaPin 2
#define redLed 6
#define greenLed 5
#define apriChiudiSbarra 0

// Usable pins for Arduino Leonardo's Interrupt: 0, 1, 2, 3, 7

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


bool isOpen=false;

void enter(){
  if (isOpen) Println(1);
}

void exit(){
  if (isOpen) Println(-1);
}

void openClose(){
  isOpen = !isOpen;
}

void setup() {
  
  Serial.begin(9600);
  
  pinMode(entrataPin, INPUT); /// Cavo rosso
  pinMode(uscitaPin, INPUT); /// Cavo verde
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  
  digitalWrite(redLed, LOW);
  digitalWrite(greenLed, LOW);

  attachInterrupt(digitalPinToInterrupt(entrataPin), enter, FALLING);
  attachInterrupt(digitalPinToInterrupt(uscitaPin), exit, FALLING);
  attachInterrupt(digitalPinToInterrupt(apriChiudiSbarra), openClose, RISING);
}

void loop() {
  
}
