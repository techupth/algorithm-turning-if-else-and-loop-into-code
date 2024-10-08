/*  
ให้เขียน Function ที่ชื่อว่า countDogByBreed ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ breedArray
        1. breedArray เป็น Array ที่บรรจุสายพันธุ์สุนัขที่เข้ารับบริการในร้านตัดขนแห่งหนึ่ง
    - Function นี้จะนับว่าสุนัขแต่ละสายพันธุ์ที่เข้ามาใช้บริการมีจำนวนทั้งหมดกี่ตัว แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ในโค้ดด้านล่าง
*/

function countDogByBreed(breedArray) {
  let dogFrequency = {};

  for (let i = 0; i < breedArray.length; i++) {
    let breed = breedArray[i];
    console.log(`ขณะนี้ใน obj มี`, dogFrequency);
    console.log(
      `รอบที่ ${i + 1} นำ ${breed} มาตรวจสอบว่าเป็น key ใน object ไหม`
    );
    console.log(`----------------------\n`);

    // ถ้าสายพันธุ์มีอยู่แล้วใน breedCount เพิ่มจำนวนเข้าไป
    if (dogFrequency[breed]) {
      dogFrequency[breed] += 1;
    } else {
      // ถ้ายังไม่มีสายพันธุ์นั้นใน breedCount ให้เริ่มต้นที่ 1
      dogFrequency[breed] = 1;
    }
  }

  return dogFrequency;
}

/*
แบบง่ายๆโดยใช้ For loop
function countDogByBreed(breedArray) {
  let dogFrequency = {};

  for (let i = 0; i < breedArray.length; i++) {
    console.log(`ขณะนี้ใน obj มี`, dogFrequency);
    console.log(
      `รอบที่ ${i + 1} นำ ${breedArray[i]} มาตรวจสอบว่าเป็น key ใน object ไหม`
    );
    console.log(`----------------------\n`);
    if (dogFrequency[breedArray[i]]) {
      dogFrequency[breedArray[i]] += 1;
    } else {
      dogFrequency[breedArray[i]] = 1;
    }
  }

  return dogFrequency;
}
*/

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
