<template>
  <div id="app">
    <h2>----------modules中的内容-----------</h2>
      <h3>{{$store.state.a.name}} </h3>
      <h3> {{$store.getters.fullname}} </h3>
      <h3> {{$store.getters.fullname2}} </h3>
      <h3> {{$store.getters.fullname3}} </h3>
      <button @click='updateName'>修改名字</button>
      <button @click="aUpdateName">异步修改名字</button>

   <h2>---------------App内容--------------</h2>
   <h3> {{$store.state.counter}} </h3>
   <button @click="add">+</button>
   <button @click="sub">-</button>
   <button @click="addCount(5)">+5</button>
   <button @click="addCount(10)" >+10</button>
   <button @click="addStudent">添加学生</button>


   <h2>----App内容:getters相关信息--------------</h2>
    <h3> {{$store.getters.powerCounter}} </h3>
    <h3> {{$store.getters.more20stu}} {</h3>
    <h3>大于20岁的长度: {{$store.getters.more20stuLength}} </h3>
    <h3> {{$store.getters.moreAgeStu(24)}} </h3>


  <h2>-------info内容是不是响应式的------------</h2>
  <h3> {{$store.state.info}} </h3>
  <button @click="updataInfo">修改info信息</button>

  <h2>--------hello Vuex内容 ----------------</h2>
   <hello-vuex></hello-vuex>

  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
import {INCREMENT} from './store/mutations-types'
export default {
  name: 'App',
  data(){
    return{
      message:'我是app组件',
    }
  },
  methods:{
    add(){
      // this.$store.commit(方法名)
      this.$store.commit(INCREMENT);
    },
    sub(){
      this.$store.commit('decrement');
    },
    addCount(count){
      //payload:负载
      //1.普通的提交封装
      // this.$store.commit('incrementCount',count);

      //2.特殊的提交封装
      this.$store.commit({
        type:'incrementCount',
        count,    //count:count
      })
    },
    addStudent(){
      const stu = {id:114, name:'alan', age:35}
      this.$store.commit('addStudent',stu)
    },
    //异步
    // updataInfo(){
    //   this.$store.dispatch('aupdataInfo',{
    //     message:'我是携带信息',
    //     success:()=>{
    //       console.log('里面已经完成了');
    //     }
    //   })
    // }
     updataInfo(){
      this.$store.dispatch('aupdataInfo','我是携带信息').then((res)=>{
        console.log('里面完成了提交');
        console.log(res);
      })
    },

    updateName(){
      this.$store.commit('updateName','lisi');
    },

    aUpdateName(){
      this.$store.dispatch('aUpdateName')
    }

  },
  computed:{
    more20stu(){
      return this.$store.state.students.filter((s)=>{
        return s.age>20;
      })
    }
  },
  components: {
    HelloVuex,
  }
}
</script>

<style>
  h2{
    background-color: thistle;
  }
</style>
