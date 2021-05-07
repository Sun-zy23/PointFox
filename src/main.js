import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from "vue-router"
import Book from "@/components/Book.vue"
import Student from "@/components/Student.vue"
import Work from "@/components/Work.vue"
import Login from "@/components/Login.vue"
import CNNode from "@/components/CNNode.vue"
Vue.use(ElementUI)
Vue.use(VueRouter)
//路由  途经
const routes = [{
  path:"/student",
  component:Student
},
{
  path:"/bookt",
  component:Book
},
{
  path:"/work",
  component:Work
},
{
  path:"/login",
  component:Login
},
{
  path:"/cnnode",
  component:CNNode
}
]

const router = new VueRouter({
  routes 
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
