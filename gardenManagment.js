const temperature =90;
const timeOfDay = "morning";
let soilMoisture = 30;

console.log("...watering  control check ...");
if (temperature >80) {
    console.log("watering on");
} else {
    console.log("watering off");
} 

console.log("\n... lights control check ...");
if (timeOfDay === "evening"  || timeOfDay ==="night") {
    console.log("lights on");
} else {
    console.log("lights off");
}

console.log("\n...Soil moisture increment ...");
while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}