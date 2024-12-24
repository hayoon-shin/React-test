//1. 숫자 양수무한대값, 음수무한대값
let infinityValue = Infinity;
let mInfinityValue = -Infinity;

//나는 숫자가 아니야.
let notANumber = NaN;

//이런것때문에 스트레스 받지마라.
//연산식결과가 나올 수 있도록 형 변환한다. 
let nan = 1* "10";

//덧셈으로 문자열 만들기
let name = "김" * "동진";

//템플릿 리터럴 기능을 잘 사용하기
let name2 = "김동진"
let mylocation = "강남"
let introduceText =  "저는 "+ mylocation + "에서 352호 강사입니다.";
let introduceText2 = `저는 ${mylocation}에서 352호 ${name2} 입니다.`
console.log(introduceText2);


// 형변환 Number, parseInt(앞에 있는 숫자만) => Number 타입으로 변경한다.
let str2 = "10";

// 산술연산자에서 주의할점 
console.log (parseInt(str2)+10);

let num1 = 1.0; 
let num2 = 2.0;
console.log (num1/num2);

// 비교연산자 (==),(!=) : 비추 (===),(!==): 강추 (3개 짜리가 타입과 값을 같이 비교한다. 매우 중요햐다)
let compA = "1";
console.log (1 === "1");

// typeof 연산자 (null이 object가 되는 것 신경쓰지 말 것. 우리는 이렇게 쓰지 않을 것이다.)
let num3 = null;
console.log (typeof num3);

//  병합연산자 (??) null, undefined 그 해당된 값을 적용을 안시켜준다. ** 중요하다. **
let num5;
