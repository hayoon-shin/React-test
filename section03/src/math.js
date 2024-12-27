//common js 모듈 시스템 // math 모듈 (계산하는 모듈: 라이브러리: 함수), 클래스
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a,b) {
    return a * b;
}
// module.exports = {
//     add,
//     sub,
// };
//ESM 모듈방식으로 전환한다. (많이 씀)
//export{add,sub,multiply};