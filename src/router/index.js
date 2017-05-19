import Vue from 'vue'
import Router from 'vue-router'
import transitionPage from '@/components/transitionPage'
import index from '@/components/index'
import pageA from '@/components/pageA'
import pageB from '@/components/pageB'

Vue.use(Router)

Router.prototype.goBack = function () { // 原型上添加返回函数
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  routes: [
  	{
  		path: '',
  		component: transitionPage,
  		children: [
  			{
  				path: '',
  				component: index
  			},
  			{
  				path: '/pageA',
  				component: pageA
  			},
  			{
  				path: '/pageB',
  				component: pageB
  			}
  		]
  	}
  ]
})
