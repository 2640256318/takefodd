import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home/Home.vue"),
    meta:{
      showFooter:true
    }
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order/Order.vue"),
    meta:{
      showFooter:true
    }
  },
  {
    path: "/Person",
    name: "Person",
    component: () => import("../views/Person/Person.vue"),
    meta:{
      showFooter:true
    }
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search/Search.vue"),
    meta:{
      showFooter:true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Login.vue")
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop/Shop.vue"),
    children:[
      {
        path:'/shop/shopgood',
        name:"ShopGood",
        component:() => import("../views/Shop/ShopGood/ShopGood.vue")
      },
      {
        path:'/shop/shopinfo',
        name:"ShopInfo",
        component:() => import("../views/Shop/ShopInfo/ShopInfo.vue")
      },
      {
        path:'/shop/shoprating',
        name:"ShopRating",
        component:() => import("../views/Shop/ShopRating/ShopRating.vue")
      },
      {
        path:'/shop',
        name:"ShopDefault",
        component:() => import("../views/Shop/ShopGood/ShopGood.vue")
      }
    ]
  }
]

export default new VueRouter({
  routes
})