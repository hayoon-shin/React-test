//1. 비동기 처리 방식으로 진행
console.log("1");

//2. 2번 실행하는데 3초 걸린다.
//console.log("~~3초걸려서 2");
let id = setTimeout(()=>{
    console.log("~~3초걸려서 2");
},3000);

console.log("3");