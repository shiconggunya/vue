let name ='小明';
let age = 18;
let flag = true;

function sum(a,b){
  return a+b;
}

if(flag){
  console.log(sum(20,50));
}
console.log('哈哈哈');

//1.导出方式一
export {
  flag,    //flag:flag
  sum,
}

//2.导出方式二:
export let num1=1000;
export let height =1.88;

//导出函数/类
export function mul(num1,num2){
  return num1 * num2
}

export class Person{
  run(){
    console.log('在奔跑');
  }
}

//5.export default
//某些情况下,一个模块中包含某个的功能,我们并不希望给这个功能命名,而且让导入者可以自己来命名
//这个时候就可以使用export default
//默认导入只能有一个

const address ='北京市';
// export default address;
export default function (argument){
  console.log(argument);
}