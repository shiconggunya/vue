# 1.配置vuex

```javascript
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import moduleA from './modules/moduleA';
//1.安装插件
Vue.use(Vuex);

const state ={
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
}

//2.创建对象
const store = new Vuex.Store({ 
  state,
  mutations,
  actions,
  getters,
  modules:{
    a:moduleA,
  },
});

export default store;
```





# 2.state(状态)

```javascript
const state ={
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
}

//使用
 <h3> {{$store.state.counter}} </h3>
```



# 3.mutations(修改状态的方法)

> 传入两个参数,第一个参数为state,  第二个参数为commit传过来的参数

```javascript
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
      
  //使用
  //payload:负载
  //1.普通的提交封装
  this.$store.commit('incrementCount',count);

  //2.特殊的提交封装
  this.$store.commit({
    type:'incrementCount',
    count,    //count:count
      })
  
```



# 4.getters(计算属性)

> 1.有两个参数 第一个为state,第二个为getters
>
> 2.使用的时候可以传递参数,接收的时候可以返回一个函数用来接收参数

```javascript
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
  }

//使用
    <h3> {{$store.getters.powerCounter}} </h3>
    <h3> {{$store.getters.more20stu}} {</h3>
    <h3>大于20岁的长度: {{$store.getters.more20stuLength}} </h3>
    <h3> {{$store.getters.moreAgeStu(24)}} </h3>
```



# 5.actions(异步)

> 1.异步里面通过commit,调用mutations来修改状态
>
> 2.使用的时候可以使用 promise
>
> 3.有两个参数,第一个为conxtet ,payload
>
> 4.context相当于store

```javascript
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

	//使用,通过dispatch执行
      updataInfo(){
      this.$store.dispatch('aupdataInfo','我是携带信息').then((res)=>{
        console.log('里面完成了提交');
        console.log(res);
      })


```



# 6.modules(模块)

> 1.state的使用不一样    
>
> 2.action的context只相当于当前模块
>
> 3.其他都一样

```javascript
  modules:{
    a:moduleA,
  },
  
  
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
  
```

