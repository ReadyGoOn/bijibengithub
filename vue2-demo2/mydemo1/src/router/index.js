import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import notfond from '@/components/404.vue'
import goods from '@/pages/goods/goods.vue'
import store from '@/pages/store/store.vue'

Vue.use(Router)

const shuxing = { template: '<div><h1>属性</h1></div>' }
const guige = { template: '<div><h1>规格</h1></div>' }
const pingjia = { template: '<div><h1>评价</h1></div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods,
      children: [
        {
          path: '',
          component: shuxing
        }, 
        {
          path: 'shuxing',
          component: shuxing
        },
        {
          path: 'guige',
          component: guige
        },
        {
          path: 'pingjia',
          component: pingjia
        }
      ]
    },
    {
      path: '/store',
      name: 'store',
      component: store
    }, 
    {
      path: '*',
      name: 'notfond',
      component: notfond
    }
  ]
})






// export default new Router({
//     el:'.tabcontent',
//   routes: [
//     {
//       path: '/shuxing',
//       name: 'shuxing',
//       component: shuxing
//     },
//     {
//       path: '/guige',
//       name: 'guige',
//       component: guige
//     },
//     {
//       path: '/pingjia',
//       name: 'pingjia',
//       component: pingjia
//     }
//   ]
// })

