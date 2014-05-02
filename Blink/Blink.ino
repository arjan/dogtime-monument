
void shoot() {
  // warm up motor
  digitalWrite(8, HIGH);
  delay(4000);
  
  // shoot
  digitalWrite(9, HIGH);
  delay(200);
  digitalWrite(9, LOW);
  delay(1000);
  
  digitalWrite(8, LOW);
}


void setup() {                
  pinMode(8, OUTPUT);     
  pinMode(9, OUTPUT);     
  Serial.begin(19200);
}

void loop() {
  if (Serial.available() > 0) {
    int ch = Serial.read();
    if (ch == 1) {
      shoot();
    }
  }
}


