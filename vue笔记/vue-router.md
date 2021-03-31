# 1.路由的配置和呈现方法



## 1.配置

```javascript
//本js文件配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';
//1.通过Vue,use(插件),安装插件
Vue.use(VueRouter);
const routes =[
  //配置路由和组件之间的应用关系
  {
    path:'',
    redirect:'/home', //重定向
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    },
  }, 
  {
    path:'/user/:id',
    component:User,
    meta:{
      title:'用户'
    },
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    },
  }
]

//2.创建VueRouter对象
const router = new VueRouter({
  routes,
  mode:'history',//修改模式
  LinkActiveClass:'active', //统一修改类名
});

//3.将router对象传入Vue实例中
export default router


```



## 2.呈现

```javascript
//第一种通过 router-link标签实现跳转
<router-link to="/home" tag="button">首页</router-link>

//第二种,通过代码实现跳转
 this.$router.push("/about");
 this.$router.replace("/home"); //重定向

//最后在 router-view呈现出来
<router-view/>
```





# 2.router -link的其他补充

```javascript
/* 
    1.tag: 设置响应的标签,默认a标签
    2.replace: 替换,没有记录
    3.router-link-active(类名):点击谁,就加这个类名
    4.active-class:修改(router-link-active)类名

 */
```



# 3.修改默认为history

```javascript
const router = new VueRouter({
  routes,
  mode:'history',//修改模式
  LinkActiveClass:'active', //统一修改类名
});
```



# 4.路由的动态使用

## 1.配置路径的时候

```javascript
  {
    path:'/user/:id', //在路径后面设置一个变量
    component:User,
  },
```

## 2.设置rouer-link的路径

```html
<!-- 路径后面跟着变量-->
<router-link :to="'/user/'+userId" tag="button">用户</router-link>
```



## 3.组件获取变量(通过$route)活跃状态的路由

```javascript
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
    
//第二种
<h3>{{$route.params.id}}</h3>
```



# 5.路由的懒加载

```javascript
const Home = ()=>import('../components/Home.vue'); //路由懒加载
const About = ()=>import('../components/About.vue');
const User = ()=> import('../components/User.vue');
const HomeNews = ()=>import('../components/HomeNews.vue');
const HomeMessage = ()=>import('../components/HomeMessage.vue');
const Profile = ()=>import('../components/Profile.vue')
```



# 6.路由的嵌套使用(children)

```javascript
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      // {
      //   path:'',
      //   redirect:'/home/news'
      // },
      {
        path:'news', //子路由不用加/
        component: HomeNews,
      },
      {
        path:'message',
        component:HomeMessage,
      },
    ],
    beforeEnter: (to, from, next) => {
      console.log('home独享守卫');
      next()
    }
  }
```



# 7.路由传递参数

```javascript
//第一种在路径传递参数 :to后面传一个对象
<router-link :to="{path:'/profile',query:{name:'why',age:'18',height:1.88,}}" tag="button">档案</router-link>

//第二种，代码传一个对象
this.$router.push({path:'/profile',query:{name:'why',age:18,height:1.88}})


//组件接收传递的参数
/*
  <p>{{$route.query}}</p>
  <p>你的名字:{{$route.query.name}}</p>

*/

```





# 8.守卫导航

```javascript
//路由的监听守卫对象
//前置钩子,路由跳转之前调用的回调
router.beforeEach((to,from,next)=>{
  //从from跳转到to
  //路由跳转的时候修改title,to是最终位置
  //matched[]以为嵌套路由,
  //meta(元数据)自己定义的
  document.title = to.matched[0].meta.title;
  next();//next必须调用
})

//后置钩子(守卫)
//路由跳转完回调
router.afterEach(()=>{

})

```



# 9.vue-router-keep-alive(保存活跃)

```
    <keep-alive exclude="Profile,User">
      <!-- exclude 排除 -->
      <router-view></router-view>
    </keep-alive>
    
export default {
  name:"Home",
  data(){
    return {
      message:'sss',
      path:'/home/news',
    }
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
    
    
```

