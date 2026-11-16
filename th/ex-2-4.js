/*
เรามี Array numbers ซึ่งบรรจุตัวเลข
ให้เขียน Algorithm ที่หาตัวเลขที่มีค่ามากที่สุดใน numbers แล้วนำตัวเลขนี้มาเก็บไว้ใน Variable maxValue
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

const numbers = [12, 45, 7, 89, 23];

// Start coding here

let maxValue = numbers[0];

for (let number of numbers) {
  if (number > maxValue) {
    maxValue = number;
  }
}

console.log(maxValue); // 89
