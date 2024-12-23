//1. 함수 선언식 자동으로 호이스팅 발생이 된다. 함수가 제일 밑에 선언되어있더라도, 함수선언식으로 선언하면 브라우저 엔진이 맨위로 올려버린다.
function getArea(width, height) {
    return width * height;
}

let area1 = getArea(10,20);
console.log(area1);

//2. 함수 표현식. 자동으로 호이스팅 발생이 안된다.
let getArea = function (width,height) {
    return width * height;
}

area1 = getArea(10,30);
console.log(area1);

//3. 화살표함수 자동으로 호이스팅 발생이 안된다.
let getArea = (width, height)=> width * height;

area1 = getArea(10,50);
console.log(area1);


// 중첩함수 (쓸 일이 없다.)
function getArea(width, height) {
    function anotherFunction() {
        console.log("another function입니다.")
    }
    anotherFunction();
    return width * height;
}