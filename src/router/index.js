import Vue from 'vue'
import Router from 'vue-router'
//将每个TabBarItem都和上方的界面一一对应
const Home =()=> import('../views/home/Home');
const Menu =()=> import('../views/menu/Menu');
const Shopping =()=> import('../views/shopping/Shopping');
const Help =()=> import('../views/help/Help');
Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    //菜单
    {
      path:'/help',
      component:Help
    },
    //购物
    {
      path:'/menu',
      component:Menu
    },
    //帮助
    {
      path:'/shopping',
      component:Shopping
    },
  ],
  mode:'history'
})
