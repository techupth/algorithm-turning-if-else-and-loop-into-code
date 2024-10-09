/* 
ให้เขียน Function ที่ชื่อว่า countNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers เป็น Array ที่บรรจุข้อมูลตัวเลข
    - Function นี้จะตรวจสอบตัวเลขแต่ละตัวใน numbers เพื่อนับจำนวนของตัวเลขที่มีค่าเป็นบวก, เป็นลบ และเป็นศูนย์ แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง        
*/

// Start coding here

const numbers1 = [3, -5, 0, 12, -7, 0, 8, 0, 1];
console.log(countNumbers(numbers1)); // { positive: 4, negative: 2, zero: 3 }

const number2 = [0, -4, -1, -5, 6, 0];
console.log(countNumbers(number2)); // { positive: 1, negative: 3, zero: 2 }
