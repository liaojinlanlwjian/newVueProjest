import Vue from 'vue'
import Router from 'vue-router'
import Chip from '@/view/chip'
import HelloWorld from '@/components/HelloWorld'
import Device from '@/view/device'
import Params from '@/view/parems'
import Picture from '@/view/picture'
import Nav from '@/view/nav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/views/chip',
      name: 'chip',
      component: Chip
    }, {
      path: '/views/device',
      name: 'device',
      component: Device
    },
     {
      path: '/views/params',
      name: 'params',
      component: Params
    },{
      path: '/views/picture',
      name: 'picture',
      component: Picture
    },
		{
		  path: '/views/nav',
		  name: 'nav',
		  component: Nav
		}
  ]
})

