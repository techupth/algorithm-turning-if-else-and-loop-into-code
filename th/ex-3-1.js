/*  
ให้เขียน Function ที่ชื่อว่า countDogByBreed ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ breedArray
        1. breedArray เป็น Array ที่บรรจุสายพันธุ์สุนัขที่เข้ารับบริการในร้านตัดขนแห่งหนึ่ง
    - Function นี้จะนับว่าสุนัขแต่ละสายพันธุ์ที่เข้ามาใช้บริการมีจำนวนทั้งหมดกี่ตัว แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

// Start coding here

// กระบวนการ:
// - การกำหนดค่า
// - การบวก/ลบ/คูณ/หาร
// - If-Else
// - Loop
// ขั้นตอน:
// 1. Declare ตัว Variable dogFrequency เพื่อเก็บความถี่ที่พบสุนัขแต่ละสายพันธุ์
// 2. Loop ผ่านสมาชิกแต่ละตัวใน breedArray
//    <ในการวนแต่ละครั้ง ให้ใช้ If-Else
//       <ถ้าเข้าถึง Key breed แล้วพบว่าไม่ใช่ undefined ให้เพิ่มค่าของ Key นั้นอีก 1>
//       <ถ้าไม่เป็นไปตามเงื่อนไขข้างต้น ให้กำหนดค่าของ Key breed เท่ากับ 1>>
// 3. กรณีวนลูปจนครบแล้วให้ทำการ Return ค่า dogFrequency

function countDogByBreed(breedArray) {
  const dogFrequency = {};

  for (let breed of breedArray) {
    if (dogFrequency[breed]) {
      dogFrequency[breed]++;
    } else {
      dogFrequency[breed] = 1;
    }
  }

  return dogFrequency;
}

const breedArray1 = [
  "Beagle",
  "Labrador Retriever",
  "Golden Retriever",
  "Bulldog",
  "Golden Retriever",
  "Poodle",
  "Beagle",
  "Beagle",
];

console.log(countDogByBreed(breedArray1));
/* 
          {
            Beagle: 3,
            "Labrador Retriever": 1,
            "Golden Retriever": 2,
            Bulldog: 1,
            Poodle: 1
          }
  */

const breedArray2 = [
  "German Shepherd",
  "Siberian Husky",
  "Dachshund",
  "Siberian Husky",
  "Shih Tzu",
];

console.log(countDogByBreed(breedArray2));
/*
          {
            "German Shepherd": 1,
            "Siberian Husky": 2,
            Dachshund: 1,
            "Shih Tzu": 1
          }
  */

// ถ้าเราพยายามเข้าถึง Key ที่ยังไม่มีอยู่ใน Object จะได้ค่ากลับมาเป็น undefined เช่น
const dogFrequency = {
  "German Shepherd": 10,
};

console.log(dogFrequency["German Shepherd"]); // 10
console.log(dogFrequency["Shih Tzu"]); // undefined
