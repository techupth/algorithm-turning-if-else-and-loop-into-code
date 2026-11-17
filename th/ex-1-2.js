/*
เรามี Variable score เก็บค่าคะแนนสอบของนักเรียน 1 คน
ให้เขียน Algorithm ที่นำ score มาแปลงเป็นเกรด แล้วบรรจุใน Variable grade ตามเกณฑ์ต่อไปนี้
    - 80 ขึ้นไป ได้ A
    - 70-79 ได้ B
    - 60-69 ได้ C
    - 50-59 ได้ D
    - 49 ลงไป ได้ F
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

const score = 75;
let grade;

// Start coding here

// Operation:
// - การกำหนดค่า
// - การเปรียบเทียบ
// - If-Else
// เรียงลำดับกระบวนการ:
// 1. If-Else
//    <ถ้า score >= 80 ให้กำหนดค่า grade = "A">
//    <ถ้าไม่เป็นไปตามเงื่อนไขข้างต้นแต่ score >= 70 ให้กำหนดค่า grade = "B">
//    <ถ้าไม่เป็นไปตามเงื่อนไขข้างต้นแต่ score >= 60 ให้กำหนดค่า grade = "C">
//    <ถ้าไม่เป็นไปตามเงื่อนไขข้างต้นแต่ score >= 50 ให้กำหนดค่า grade = "D">
//    <ถ้าไม่เป็นไปตามเงื่อนไขทั้งหมดข้างต้น ให้กำหนดค่า grade = "F">

if (score >= 80) {
  grade = "A";
} else if (score >= 70) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}

console.log(grade); // "B"
