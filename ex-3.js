/*  
ให้เขียน Function ที่ชื่อว่า countDogByBreed ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ breedArray
        1. breedArray เป็น Array ที่บรรจุสายพันธุ์สุนัขที่เข้ารับบริการในร้านตัดขนแห่งหนึ่ง
    - Function นี้จะนับว่าสุนัขแต่ละสายพันธุ์ที่เข้ามาใช้บริการมีจำนวนทั้งหมดกี่ตัว แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

function findTopBreed(breedArray) {
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

console.log(findTopBreed(breedArray1));
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

console.log(findTopBreed(breedArray2));
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
