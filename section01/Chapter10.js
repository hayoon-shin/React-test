//forEach(함수(valu,index,객체배열)) : 향상된 포문 for(객체, : 객체배열)
const array = [1,2,3,4];
const array2 = [];
for(let i =0; i<array.length; i++) {
    console.log(array[i]);
}
console.log(array);
array.forEach((v, i, a)=>{
   // console.log(v);
   // console.log(i);
   // console.log(a);
   // console.log("==================")
});
array.forEach((v, i)=>{
   // console.log(v);
   // console.log(i);
    //console.log("==================")
});
//array.forEach((v)=> console.log(v)); 

array.forEach((v)=> array2.push(v*2));

//console.log(array2);

let array3 = [
    {name: "구길동", age:10},
    {name: "홍길동", age:10},
    {name: "저길동", age:10},
    {name: "말길동", age:10},
    {name: "홍길동", age:20},
];
//find 중요 ******
const findValue = array3.find((v)=>{
    return v.name === "홍길동";
});
console.log(findValue);

//filter 중요 ******
const findArray = array3.filter((v)=>{
    return v.name === "홍길동";
});
console.log(findArray);

//Map (지도 : 내가 요청하는 정보로 새로 배열로 포함시켜서 리턴한다.) **** 잘쓰임
const nameArray = array3.map((v)=>{
    return v.age+30;
});
//console.log(nameArray);

//findIndex 해당된 객체를 찾아서 그 위치를 리턴한다.
const findIdx = array3.findIndex((v)=>{
    return v.name === "말길동"; 
});
console.log(findIdx);

//includes (true, false)
const flag = array.includes(5);
console.log(flag);

//indexOf(index)
const array6 = [1,2,2,2,2,3,4];
const value = array.indexOf(2);
console.log(value);

//slice
const array7 = [1,2,3,4,5,6,7];
sliceArray = array7.slice(2,5);
//console.log(sliceArray);

let array8 = [
    {name: "구길동", age:10},
    {name: "홍길동", age:10},
    {name: "저길동", age:10},
    {name: "말길동", age:10,},
    {name: "홍길동", age:20},
];
sliceArray2 = array8.slice(2,4);
console.log(sliceArray2);

//concat
let array9 = [
    {name: "구길동", age:10},
    {name: "홍길동", age:10},
];
let array10 = [
    {name: "말길동", age:10},
    {name: "홍길동", age:20},
];
const returnArray = array9.concat(array10);
console.log(returnArray);

//sort
const array11 = [1,10,2,20,3,30,4,40];
array11.sort();
console.log(array11);

array11.sort((a,b)=>{return a-b});
console.log(array11);

array11.sort((a,b)=>{return b-a});
console.log(array11);

//join 합치기 
const array12 = ["김동진","님","안녕하세요","반가워요"];
console.log(array12.join("="));

// for of 반복문 (자바의 향상된 for문과 같다.)
let array13 = [1,2,3];
for (let item of array13) {
    console.log(item);
}
// for in 반복문문
const person = {
    name:"kdj",
    age:29,
    tall: 178
};
for (let key in person) {
    console.log(key, value);
}