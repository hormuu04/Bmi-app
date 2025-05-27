let height = 150;
let weight = 60;
let age = 15;

document.getElementById("height").addEventListener("input", function () {
  height = parseInt(this.value);
  document.getElementById("height-value").textContent = height;
});

function changeWeight(val) {
  weight += val;
  if (weight < 1) weight = 1;
  document.getElementById("weight").textContent = weight;
}

function changeAge(val) {
  age += val;
  if (age < 1) age = 1;
  document.getElementById("age").textContent = age;
}

document.getElementById("male").addEventListener("click", function () {
  this.classList.add("active");
  document.getElementById("female").classList.remove("active");
});

document.getElementById("female").addEventListener("click", function () {
  this.classList.add("active");
  document.getElementById("male").classList.remove("active");
});

function calculateBMI() {
  let bmi = weight / ((height / 100) ** 2);
  let resultText = `ค่า BMI ของคุณคือ ${bmi.toFixed(2)} - `;
  let adviceText = "";

  if (bmi < 18.5) {
    resultText += "ผอม 🦴";
    adviceText = "🍚 ควรรับประทานอาหารให้เพียงพอและหลากหลาย เพื่อเพิ่มน้ำหนักอย่างเหมาะสม";
  } else if (bmi < 23) {
    resultText += "ปกติ 🏃‍♀️";
    adviceText = "✅ สุขภาพดี! รักษาพฤติกรรมการกินและการออกกำลังกายไว้ต่อไป";
  } else if (bmi < 25) {
    resultText += "น้ำหนักเกิน ⚠️";
    adviceText = "🥗 เริ่มควบคุมอาหาร และออกกำลังกายเบาๆ อย่างสม่ำเสมอ";
  } else if (bmi < 30) {
    resultText += "อ้วนระดับ 1 ⚠️⚠️";
    adviceText = "🏋️ แนะนำให้ออกกำลังกายสม่ำเสมอ และควบคุมอาหารเพื่อลดน้ำหนัก";
  } else {
    resultText += "อ้วนระดับ 2 🚨";
    adviceText = "🩺 ควรปรึกษาแพทย์หรือผู้เชี่ยวชาญเพื่อแนวทางลดน้ำหนักอย่างปลอดภัย";
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("advice").textContent = adviceText;
}