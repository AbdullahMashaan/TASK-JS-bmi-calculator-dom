function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

const heightInMeters = height / 100
const BMI = weight / (heightInMeters * heightInMeters);
alert(BMI);

if (BMI < 18.5) {
  alert("Underweight");
} else if (BMI >= 18.5 && BMI < 25) {
  alert("Healthy Weight");
} else if (BMI >= 25 && BMI < 30) {
  alert("Overweight");
} else if (BMI >= 30) {
  alert("Obesity");
} 


let isHealthy = false;

  if (age >= 19 && age <= 24) {
    isHealthy = BMI >= 19 && BMI <= 24;
  } else if (age >= 25 && age <= 34) {
    isHealthy = BMI >= 20 && BMI <= 25;
  } else if (age >= 35 && age <= 44) {
    isHealthy = BMI >= 21 && BMI <= 26;
  } else if (age >= 45 && age <= 54) {
    isHealthy = BMI >= 22 && BMI <= 27;
  } else if (age >= 55 && age <= 64) {
    isHealthy = BMI >= 23 && BMI <= 28;
  } else if (age >= 65) {
    isHealthy = BMI >= 24 && BMI <= 29;
  }

  alert(isHealthy ? "Healthy" : "Not Healthy");
}


