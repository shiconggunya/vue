<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容,哈哈哈</p>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">消息</router-link>
    <router-view></router-view>
    <h1 @click='message = "hhh"'> {{message}} </h1>
  </div>
</template>

<script>
export default {
  name:"Home",
  data(){
    return {
      message:'sss'
    }
  },
  created(){
    //组件创建的时候调用
    console.log('created');
    document.title='首页'
  },
  mounted(){
    //组件挂载完毕时调用
    console.log('mouted');
  },
  updated(){
    //界面发生更新时调用
    console.log('updated');
  },

}
</script>

<style>

</style>