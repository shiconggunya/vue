<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <h2>Hello World</h2>
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click='aboutClick'>关于</button> -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!-- <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:'18',height:1.88,}}" tag="button">档案</router-link> -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <router-view></router-view>
  </div>
</template>         

<script>
export default {
  name: "App",
  data(){
    return {
      userId:'zhangsan',
    }
  },
  methods: {
    homeClick() {
      //通过代码的方式修改路径,vue-router
      // this.$router.push('/home');
      this.$router.replace("/home");
    },
    aboutClick() {
      this.$router.push("/about");
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({path:'/profile',query:{name:'why',age:18,height:1.88}})
    }
  },
};
</script>

<style>
h2 {
  color: tomato;
}
/* .router-link-active{
  color: skyblue;
} */
.active {
  color: skyblue;
}
/* 
    1.tag: 设置响应的标签,默认a标签
    2.replace: 替换,没有记录
    3.router-link-active(类名):点击谁,就加这个类名
    4.active-class:修改(router-link-active)类名

 */
</style>
