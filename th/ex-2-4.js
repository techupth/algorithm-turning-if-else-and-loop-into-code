/*
เรามี Array numbers ซึ่งบรรจุตัวเลข
ให้เขียน Algorithm ที่หาตัวเลขที่มีค่ามากที่สุดใน numbers แล้วนำตัวเลขนี้มาเก็บไว้ใน Variable maxValue
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

const numbers = [12, 45, 7, 89, 23];

// Start coding here

// Operation:
// - การกำหนดค่า
// - การเปรียบเทียบ
// - If-Else
// - Loop
// เรียงลำดับกระบวนการ:
// 1. Declare ตัว Variable maxValue และ Assign ค่าให้เท่ากับสมาชิกตัวแรกใน numbers
// 2. Loop ผ่านสมาชิกแต่ละตัวใน numbers
//    <ในการวนแต่ละครั้ง ให้ใช้ If-Else
//       <ถ้าสมาชิกตัวนั้น มากกว่า maxValue ให้ Reassign ค่าให้ maxValue มีค่าเท่ากับสมาชิกตัวนั้น>>

let maxValue = numbers[0];

for (let number of numbers) {
  if (number > maxValue) {
    maxValue = number;
  }
}

console.log(maxValue); // 89
