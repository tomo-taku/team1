int pin = 3;
unsigned long duration;
unsigned long starttime;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

const int sensorPin = 11; // the number of the sensor pin
long laag = 0;
long hoog = 0;
long laagTijd = 0;
long hoogTijd = 0;

long c_st, c_ed, c_df;
long d_st, d_ed, d_df;

void setup() {
  Serial.begin(9600);
  pinMode(8, INPUT);
  pinMode(sensorPin, INPUT);
  starttime = millis();
  while(digitalRead(sensorPin) == LOW) {;}
  hoog = millis();
}

// 単位をμg/m^3に変換
double pcs2ugm3 (double pcs)
{
  double pi = 3.14159;
  // 全粒子密度(1.65E12μg/ m3)
  double density = 1.65 * pow (10, 12);
  // PM2.5粒子の半径(0.44μm)
  double r25 = 0.44 * pow (10, -6);
  double vol25 = (4 / 3) * pi * pow (r25, 3);
  double mass25 = density * vol25; // μg
  double K = 3531.5; // per m^3
  // μg/m^3に変換して返す
  return pcs * K * mass25;
}

void loop() {
  c_st = millis();
  // Check for high and low timing - low time * 2 = PPM
  while(digitalRead(sensorPin) == HIGH) {;}
  laag = millis();
  hoogTijd = laag - hoog;
  
  while(digitalRead(sensorPin) == LOW) {;}
  hoog = millis();
  laagTijd = hoog - laag;
 
  // Validity check high+low = 1004 (small margin or error allowed -> 990)
  c_ed = millis();
  c_df = c_ed - c_st;


  d_st = millis();
  duration = pulseIn(pin, LOW);
  lowpulseoccupancy = lowpulseoccupancy + duration;
  if ((millis() - starttime) >= c_df && laagTijd + hoogTijd > 990) //if the sampel time = = 30s
  {
    ratio = lowpulseoccupancy / (c_df * 10.0);
    concentration = 1.1 * pow(ratio, 3) - 3.8 * pow(ratio, 2) + 520 * ratio + 0.62;
    Serial.print("CO2 -> ");
    Serial.print(laagTijd * 2,DEC);
    Serial.print("[ppm]");
    Serial.print("Concentration -> ");
    Serial.print(String( pcs2ugm3(concentration) ));
    Serial.println("[ug/ m3]");
    lowpulseoccupancy = 0;
    starttime = millis();
  }
  while(digitalRead(sensorPin) == LOW) {;}
  d_ed = millis();
  d_df = d_ed - d_st;
  hoog += d_df;
}
