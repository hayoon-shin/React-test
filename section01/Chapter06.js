//1. 객체생성 (생성자, 객체리터럴 방법 2가지 있다.)
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체리터럴

//2. 객체 프로퍼티(객체속성)
let person = {
    name: "홍길동",
    age: 20,
    hobby: "축구",
    job: "웹개발자",
    extra: {},
    extra2: function (){
        console.log("나는 멤버함수");
    },
    islike: true,
};
//멤버변수 새로추가
person.address = "강남구 352";
console.log(person["address"]);
//멤버변수 삭제
delete person.address;
console.log(`person["address"] = ${person["address"]}`);

//멤버변수 유무
let flag = "name" in person;
console.log(`flag = ${flag}`);