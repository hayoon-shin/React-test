//외부에 있는 모듈을 가져온다. require('./math') => import시키는 것임
// const moduleData = require('./math');
// const {add,sub} = require('./math');

import {add,sub} from './math.js';
import multiply from './math.js';
import randomColor from 'randomcolor';
// console.log(moduleData);

const colorString = randomColor();
console.log(colorString);
console.log(add(30,20));
console.log(sub(30,20));
console.log(multiply(40,20));