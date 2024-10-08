/* 
ให้เขียน Function ที่ชื่อว่า countNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers เป็น Array ที่บรรจุข้อมูลตัวเลข
    - Function นี้จะตรวจสอบตัวเลขแต่ละตัวใน numbers เพื่อนับจำนวนของตัวเลขที่มีค่าเป็นบวก, เป็นลบ และเป็นศูนย์ แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง        
*/

function countNumbers(number) {
  let totalNumbers = { positive: 0, negative: 0, zero: 0 };
  /*
  
  */

  for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
      totalNumbers.positive += 1; // ถ้ามากกว่า 0 เก็บ positive
    } else if (number[i] < 0) {
      totalNumbers.negative += 1; // ถ้าน้อยกว่า 0 เก็บ negative
    } else {
      totalNumbers.zero += 1; // ถ้าไม่ตรงเงื่อนไข (ก็คือเท่ากับ 0) เก็บ zero
    }
  }

  return totalNumbers; // คืนค่าผลลัพธ์
}

const numbers1 = [3, -5, 0, 12, -7, 0, 8, 0, 1];
console.log(countNumbers(numbers1)); // { positive: 4, negative: 2, zero: 3 }

const number2 = [0, -4, -1, -5, 6, 0];
console.log(countNumbers(number2)); // { positive: 1, negative: 3, zero: 2 }
