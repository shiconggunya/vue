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
const routes =[
  //配置路由和组件之间的应用关系
  {
    path:'',
    redirect:'/home', //重定向
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'',
        redirect:'/home/news'
      },
      {
        path:'news', //子路由不用加/
        component: HomeNews,
      },
      {
        path:'message',
        component:HomeMessage,
      },
    ]
  },
  {
    path:'/about',
    component:About,
  },
  {
    path:'/user/:userId',
    component:User,
  },
]

//2.创建VueRouter对象
const router = new VueRouter({
  routes,
  mode:'history',//修改模式
  LinkActiveClass:'active', //统一修改类名
});

//3.将router对象传入Vue实例中
export default router

