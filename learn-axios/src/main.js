import Vue from 'vue'
import App from './App'
import axios from 'axios';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});


//1.axios的基本使用
axios({
  url:'http://123.207.32.32:8000/home/multidata',

}).then(res =>{
  console.log(res);
})

axios({
  url:"http://123.207.32.32:8000/home/data",
  //真的get请求的参数拼接
  params:{
    type:'pop',
    page:1,
  },
}).then(res =>{
  console.log(res) ;
})

//3. axios默认配置
//使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL='http://123.207.32.32:8000';
// axios.defaults.timeout=5000


//2.axios发送并发请求
// axios.all([
//   axios({
//   // baseURL:'http://123.207.32.32:8000',
//   url:'/home/multidata',
// }),
//   axios({
//   // baseURL:'http://123.207.32.32:8000',
//   url:"/home/data",
//   //真的get请求的参数拼接
//   params:{
//     type:'pop',
//     page:3,
//   },
// })]).then(axios.spread((res1,res2)=>{
//   console.log(res1);
//   console.log(res2);
// }))


// then(results=>{   统一拿到结果
//   console.log(results);
// })


//4.创建对应的axios的实例
const instance1 = axios.create( {
  baseURL:'http://123.207.32.32:8000',
  timeout:5000,
} )


//axios实例的使用
instance1({
  url:'/home/multidata',
}).then(res=>{
  console.log(res);
})

instance1({
  url:'/home/data',
  params:{
    type:'pop',
    page:1,
  },
}).then(res=>{
  console.log(res);
})

const instance2 = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:10000,
  headers:{

  },
})


//5.封装request模块
import {request} from './network/request';
// request({
//   url:'/home/multidata'
// },res=>{
//   console.log('封装一',res);
// },
// err=>{
//   console.log(err);
// }
// )

// request({
//   baseConfig:{},
//   success: function(res){

//   },
//   failure:function(err){
    
//   }
// })


request({
  url:'/home/multidata',
}).then(res=>{
  console.log('封装',res);
}).catch(err =>{
  console.log('封装',err);
})