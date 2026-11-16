/*
ให้เขียน Function ที่ชื่อว่า calculateAverageScore ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ scores และ classNumber
        1. scores เป็น Array ที่บรรจุข้อมูลคะแนนสอบ
        2. classNumber เป็นข้อมูลประเภท Number ที่เก็บหมายเลขห้องเรียน
    - Function นี้จะนำคะแนนสอบของนักเรียนในห้องที่ระบุมาบวกกัน จากนั้นนำไปหาค่าเฉลี่ย แล้ว Return ค่าออกมา
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
// 1. Declare ตัว Variable totalScore เพื่อเก็บผลรวมของคะแนนสอบ
// 2. Declare ตัว Variable studentCount เพื่อเก็บจำนวนนักเรียนที่อยู่ห้องที่ระบุ
// 3. Loop ผ่านสมาชิกแต่ละตัวใน scores
//    <ในการวนแต่ละครั้ง ให้ใช้ If-Else
//       <ถ้า Value ของ Key classNumber เท่ากับ classNumber ให้
//          (1) นำ Value ของ Key mathScore มาบวก totalScore
//          (2) นำ studentCount มาบวก 1>>
// 4. กรณีวนลูปจนครบแล้วให้ทำการ Return ค่า totalScore / studentCount

function calculateAverageScore(scores, classNumber) {
  let totalScore = 0;
  let studentCount = 0;

  for (let student of scores) {
    if (student["classNumber"] === classNumber) {
      totalScore += student["mathScore"];
      studentCount += 1;
    }
  }

  return totalScore / studentCount;
}

const scores = [
  { firstname: "Isabel", lastname: "Moore", classNumber: 3, mathScore: 78 },
  { firstname: "Alice", lastname: "Clark", classNumber: 1, mathScore: 80 },
  { firstname: "Charlie", lastname: "Johnson", classNumber: 3, mathScore: 85 },
  { firstname: "Bob", lastname: "Smith", classNumber: 2, mathScore: 75 },
  { firstname: "David", lastname: "Lee", classNumber: 1, mathScore: 90 },
  { firstname: "Eva", lastname: "Davis", classNumber: 2, mathScore: 65 },
  { firstname: "Frank", lastname: "Brown", classNumber: 3, mathScore: 77 },
  { firstname: "Grace", lastname: "Miller", classNumber: 1, mathScore: 95 },
  { firstname: "Jack", lastname: "Taylor", classNumber: 1, mathScore: 82 },
  { firstname: "Henry", lastname: "Wilson", classNumber: 2, mathScore: 88 },
];

console.log(calculateAverageScore(scores, 1)); // 86.75
console.log(calculateAverageScore(scores, 3)); // 80
