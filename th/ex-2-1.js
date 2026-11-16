/* 
ให้เขียน Function ที่ชื่อว่า sumPositiveNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers ซึ่งเป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำเฉพาะตัวเลขที่มีค่าเป็นบวกมารวมกัน แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

// Start coding here

// กระบวนการ:
// - การกำหนดค่า
// - การบวก/ลบ/คูณ/หาร
// - การเปรียบเทียบ
// - If-Else
// - Loop
// ขั้นตอน:
// 1. Declare ตัว Variable sum เพื่อเก็บผลรวมของตัวเลขที่มีค่าเป็นบวก
// 2. Loop ผ่านสมาชิกแต่ละตัวใน numbers
//    <ในการวนแต่ละครั้ง ให้ใช้ If-Else
//       <ถ้าสมาชิกตัวนั้น มากกว่า 0 ให้นำสมาชิกตัวนั้นมาบวกเข้ากับ sum>>
// 3. กรณีวนลูปจนครบแล้วให้ทำการ Return ค่า sum

function sumPositiveNumbers(numbers) {
  let sum = 0;

  for (let number of numbers) {
    if (number > 0) {
      sum += number;
    }
  }

  return sum;
}

const numbers1 = [3, -5, 10, 12, -7, 0, 8, 2];
console.log(sumPositiveNumbers(numbers1)); // 35

const number2 = [0, -4, -1, -5, 6, 5, 0];
console.log(sumPositiveNumbers(number2)); // 11
