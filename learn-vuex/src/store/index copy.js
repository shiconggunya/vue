import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT} from './mutations-types';
//1.安装插件
Vue.use(Vuex);

const moduleA= { 
  state:{
    name:'zhangsan'
  },
  mutations:{
    updateName(state,payload){
      state.name =payload;
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName','wangwu')  //模块里的context只会提交自己模块的mutations
      }, 1000);
    },
  },
  getters:{
    fullname(state){
      return state.name+'1111';
    },
    fullname2(state,getters){
      return getters.fullname+'22222';
    },
    fullname3(state,getters,rootState){
      //state:当前模块的状态, getters:当前模块的getters, rootState:根状态
      return getters.fullname2 + rootState.counter;
    },
  },
}

//2.创建对象
const store = new Vuex.Store({ 
  state:{
    counter:1000,
    students:[
      {id:110, name:'why', age:18},
      {id:111, name:'Kobe', age:24},
      {id:112, name:'james', age:30},
      {id:113, name:'curry', age:10},
    ],
    info:{
      name:'kobe',
      age:40,
      height:1.88,

    }
  },
  mutations:{
    //修改状态的方法(默认参数:state)
    [INCREMENT](state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    incrementCount(state,payload){
      console.log(payload);
      state.counter +=payload.count;
      
    },
    addStudent(state,stu){
      state.students.push(stu)
    },
    updataInfo(state){
      state.info.name = 'coderwhy';
      // Vue.set(state.info,'address','洛杉矶')//添加属性
      // Vue.delete(state.info,'age'); //删除属性
    } 
  },
  actions:{
    //异步操作
    //context:上下文,相当于store对象
    aupdataInfo(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          context.commit('updataInfo');
          console.log(payload);
          resolve('1111');
        }, 1000);
      })
    }
  },
  getters:{
    //相当于计算属性(默认参数state)
    powerCounter(state){
      return state.counter * state.counter;
    },
    more20stu(state){
      return state.students.filter(s => s.age>20);
    },
    more20stuLength(state,getters){
      return getters.more20stu.length;
    },
    moreAgeStu(state){
      // return function (age) {
      //   return state.students.filter(s =>s.age > age);
      // }
      return age => state.students.filter(s => s.age > age);
    },
  },
  modules:{
    a:moduleA,
  },
});

export default store;