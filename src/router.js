import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      //Filter,menu
      children: [
      	{
		      path: '/Index/Filter',
		      name: 'filter',
		      component: () => import('./views/Filter.vue'),
		    },
       	{
		      path: '/Index/Menu',
		      name: 'menu',
		      component: () => import('./views/Menu.vue'),
		    },
		  ]
    },
    {
      path: '/Index/Filter/result',
      name: 'opemsFromFilter',
       // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/OpemsFromFilter.vue')
    },
    {
      path: '/OpemSearch',
      name: 'opemSearch',
      component: () => import('./views/OpemSearch.vue')
    },
     {
     	//path只是显示在地址栏上的地址，实际路由显示的位置，由router中该路由的位置决定
     	//这样写可以在地址栏输入/OpemSearch/result访问到OpemsFromSearch，由不需要把OpemsFromSearch作为OpemSearch的子路由
     	//省去了OpemSearch中内容的隐藏
      path: '/OpemSearch/result',
      name: 'opemsFromSearch',
      component: () => import('./views/OpemsFromSearch.vue')
    },
    {
      path: '/OpemDetail',
      name: 'opemDetail',
      component: () => import('./views/OpemDetail.vue')
    },
    {
      path: '/Setting',
      name: 'setting',
      component: () => import('./views/Setting.vue')
    },
    {
      path: '/Write',
      name: 'write',
      component: () => import('./views/Write.vue')
    },
    {
      path: '/Collection',
      name: 'collection',
      component: () => import('./views/Collection.vue')
    },
    {
    	path: '*',
		  redirect: {name: 'index'}
    }
  ]
})
