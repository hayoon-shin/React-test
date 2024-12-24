//1. 단락평가 
let a = false;
let b = true;
let funca = ()=>{
    console.log("funca");
    return false;
}
let funcb = ()=>{
    console.log("funcb");
    return true;
}
// 주의 : 집중 문자열일 때 *******
//console.log(funca() || funcb());
//실제 사용하는 방법 
//함수선언, 표현식, 화살표함수 
function printName(person) {
    const name = person && person.name;
    console.log(name || "person 값이 없음");
}
//printName();
    printName({name:"kdj"});

function printName2(person) {
    if(typeof person === 'object') {
        console.log("객체")
    }else{
        console.log("객체아님")
    }
}
//console.log(typeof {});      
