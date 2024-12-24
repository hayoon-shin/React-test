//얕은 객체복사 (값을 변경했을때 영향을 줌)
const person = {
    name:"kdj",
    age:29,
    tall: 178
};

let person2 = person;
person2.tall = 180;
// console.log(person);
// console.log(person2);

//깊은복사 (값을 변경했을 때 원본에 영향을 주지 않음)
let person3 = {...person};
console.log(person);
person3.tall = 181;
// console.log(person3);

//객체비교 (주소까지 비교할까? 아니다. 값으로 비교한다.)
console.log(person);
console.log(person2);
console.log(person3);

console.log(person === person2);
console.log(person === person3);
console.log(person2 === person3);
console.log(JSON.stringify(person2) === JSON.stringify(person3));