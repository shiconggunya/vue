//本js文件配置路由相关的信息
import VueRouter from 'vue-router';
import Vue from 'vue';
//1.通过Vue,use(插件),安装插件
Vue.use(VueRouter);
const Home = ()=>import('../components/Home.vue'); //路由懒加载
const About = ()=>import('../components/About.vue');
const User = ()=> import('../components/User.vue');
const HomeNews = ()=>import('../components/HomeNews.vue');
const HomeMessage = ()=>import('../components/HomeMessage.vue');
const Profile = ()=>import('../components/Profile.vue')
const routes =[
  //配置路由和组件之间的应用关系
  {
    path:'',
    redirect:'/home', //重定向
  },
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

//3.将router对象传入Vue实例中
export default router

