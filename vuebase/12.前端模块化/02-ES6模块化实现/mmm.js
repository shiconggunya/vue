import {flag,sum,height,num1} from './aaa.js'

if(flag){
  console.log('小明是天才');
}

console.log(sum(1,2));
console.log(num1,height);

//导入函数/类
import {mul,Person} from './aaa.js';
console.log(mul(2,8));
const  p =new Person();
p.run();

//默认导入
import a from './aaa.js';
a('hello');

//统一全部导入
import * as all from './aaa.js';
console.log(all.flag);