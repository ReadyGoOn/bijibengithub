import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const shuxing = { template: '<div><h1>属性</h1></div>' }
const guige = { template: '<div><h1>规格</h1></div>' }
const pingjia = { template: '<div><h1>评价</h1></div>' }

export default new Router({
    el:'.tabcontent',
  routes: [
    {
      path: '/shuxing',
      name: 'shuxing',
      component: shuxing
    },
    {
      path: '/guige',
      name: 'guige',
      component: guige
    },
    {
      path: '/pingjia',
      name: 'pingjia',
      component: pingjia
    }
  ]
})
