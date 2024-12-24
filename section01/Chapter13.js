// ****** 구조분해할당 ****** 잘쓰임. 자바에는 없음 
// let one = arr[0]; / let two = arr[1]; / let three = arr[2];
// 이 3줄을 한줄로 쓰면 let [one,two,three,four=10] = arr;

//1. 배열의 구조 분해 할당
let arr=[1,2,3];
let [one,two,three,four] = arr;
console.log(one, two, three, four);

//2. 객체의 구조 분해 할당 
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스"
};
let {
    age,
    hobby,
    name,
    extra = "hello",
} = person;

console.log(age,name,hobby,extra);

//3. 객체구조 분해할당을 이용해서 함수 매개변수 받는 방법 ******리액트에 많이 쓰임 ******
const func = ({name,age,hobby})=>{
    console.log(name,age,hobby);
};
func(person);