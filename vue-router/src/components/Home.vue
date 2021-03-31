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
      message:'sss',
      path:'/home/news',
    }
  },
  created(){
    //组件创建的时候调用
    document.title='首页';
  },
  mounted(){
    //组件挂载完毕时调用
    console.log('home-mouted');
  },
  updated(){
    //界面发生更新时调用
    console.log('home-updated');
  },
  destroyed(){
    //组件销毁时
    console.log('home-destroyed');
  },
  activated(){
    //活跃的时候
    console.log('home--活跃');
    this.$router.push(this.path);
  },
  //这两个函数,只有该组件被保持了状态使用了keep-alive时,才是有效的
  deactivated(){
    //不活跃的时候
    console.log('home--不活跃');
    
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    this.path  = this.$route.path;
    next();
  }

  
}
</script>

<style>

</style>