//콜백함수 : 자바콜백함수(service, doGet, doPest)
//1. 함수 선언식
function checkMood(mood, type) {
    if(mood === "good") {
        if(type === 1) {
            sing();
        }else {
            dance();
        }
    }else {
        if(type === 1)  {
            cry();
        }
        else {
        angry();
        }
    }
}

function sing() {
    console.log("ACTION :: sing");
}
function cry() {
    console.log("ACTION :: cry");
}
function angry() {
    console.log("ACTION :: angry");
}
function dance() {
    console.log("ACTION :: dance");
}

checkMood("bad");

// 콜백처리 (가장 많이 쓰는 게 화살표 함수)
// function checkMood2(mood, goodCallback, badCallback) {
//         if(mood === "good") {
//             goodCallback();
//         }else {
//             badCallback();
//         }
//     }
//     //checkMood("good",1);
//     checkMood2("bad",()=>{
//         console.log("ACTION :: dance3")
//     }, () => {
//         console.log("ACTION :: angry3")
//     });

// 콜백처리2
function repeat(idx, callback) {
    for(let i = 1; i < 10; i++) {
        callback(i);
        //console.log(i);
    }
}
repeat(5,(i)=>{
    console.log(i**7);
});

function calculate(i) {
    console.log(i**4);
}