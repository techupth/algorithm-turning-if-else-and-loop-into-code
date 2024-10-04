/* 
ให้เขียน Function ที่ชื่อว่า calculateAverageScore ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 3 ตัวคือ scores, classNumber และ targetSubject
        1. scores เป็น Array ที่บรรจุข้อมูลคะแนนสอบ
        2. classNumber เป็นข้อมูลประเภท Number ที่เก็บหมายเลขห้องเรียน
        3. targetSubject เป็น String ที่เก็บรายชื่อวิชาที่ต้องการค้นหา
    - Function นี้จะนำคะแนนสอบในวิชาที่ระบุของนักเรียนในห้องที่ระบุมาบวกกัน จากนั้นนำไปหาค่าเฉลี่ย แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

function calculateAverageScore(scores, classNumber, targetSubject) {
  let totalScore = 0;
  let studentCount = 0;

  for (let student of scores) {
    let studentClassNo = student["classNumber"];
    let studentTargetSubjectScore = student["subject"][targetSubject];
    // console.log(studentTargetSubjectScore)

    if (
      studentClassNo === classNumber &&
      studentTargetSubjectScore !== undefined
    ) {
      totalScore += studentTargetSubjectScore;
      studentCount += 1;
    }
  }

  return totalScore / studentCount;
}

const scores = [
  {
    firstname: "Bob",
    lastname: "Smith",
    classNumber: 2,
    subject: { math: 75, art: 67, science: 72, english: 85 },
  },
  {
    firstname: "Isabel",
    lastname: "Moore",
    classNumber: 3,
    subject: { math: 86, art: 70, science: 78, english: 90 },
  },
  {
    firstname: "Alice",
    lastname: "Clark",
    classNumber: 1,
    subject: { math: 92, art: 88, science: 84, english: 75 },
  },
  {
    firstname: "Charlie",
    lastname: "Johnson",
    classNumber: 3,
    subject: { math: 80, art: 90, science: 88, english: 79 },
  },
  {
    firstname: "David",
    lastname: "Lee",
    classNumber: 1,
    subject: { math: 95, art: 75, science: 82, english: 91 },
  },
  {
    firstname: "Eva",
    lastname: "Davis",
    classNumber: 2,
    subject: { math: 68, art: 80, science: 77, english: 65 },
  },
  {
    firstname: "Frank",
    lastname: "Brown",
    classNumber: 3,
    subject: { math: 70, art: 85, science: 81, english: 73 },
  },
  {
    firstname: "Grace",
    lastname: "Miller",
    classNumber: 1,
    subject: { math: 98, art: 95, science: 89, english: 88 },
  },
  {
    firstname: "Henry",
    lastname: "Wilson",
    classNumber: 2,
    subject: { math: 85, art: 70, science: 74, english: 82 },
  },
  {
    firstname: "Jack",
    lastname: "Taylor",
    classNumber: 1,
    subject: { math: 82, art: 87, science: 90, english: 80 },
  },
];

console.log(calculateAverageScore(scores, 1, "math")); // 91.75
console.log(calculateAverageScore(scores, 1, "science")); // 86.25
