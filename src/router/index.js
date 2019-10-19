import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import about from '@/components/about'
import skill from '@/components/skill'
import work from '@/components/work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    },
    {
      path: '/work',
      name: 'work',
      component: work
    }
  ]
})
