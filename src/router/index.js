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
]

export default new VueRouter({
  routes
})