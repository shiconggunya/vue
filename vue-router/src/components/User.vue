<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息,嘿嘿嘿</p>
    <h3>取到的参数: {{userId}}</h3>
    <h3>{{$route.params.id}}</h3>
  </div>
</template>

<script>
export default {
  name:'User',
  
  computed:{
    userId(){
      //$route表示处于活跃的路由
      //params:参数, userId注册时定义的变量
      return this.$route.params.id;
    }
  }
}
</script>

<style>

</style>