//编程范式:命令式编程/声明式编程
//编程范式:面向对象编程(第一公民:对象)/函数式编程(第一 公民:函数)
// filter/ map/reduce
// filter中的回调函数有一个要求:必须返回一个boolean值
//true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false: 当返回false时， 函数内部会过滤掉这次的n
const nums =[ 10, 20, 111, 222, 444, 40, 50 ]

//filter函数的使用
let newNums = nums.filter((n)=>{
  return n<100;
})
console.log(newNums);

//mao函数的使用
let new2Nums =newNums.map((n)=>{
  return n*2;
})

console.log(new2Nums);


//reduce函数的使用
//reduce作用对数组中的函数进行汇总(要么全部相乘,要么全部相加)
// new2Nums.reduce((上一次的值,当前数组元素)=>{},初始值)
let sum = new2Nums.reduce((perValue,value)=>{
  return perValue + value
},0);

console.log(sum);

let total =nums.filter((n)=>{
  return n<100;
}).map((n)=>{
  return n*2;
}).reduce((prevalue,n)=>{
  return prevalue +n;
},0);
console.log(total);
