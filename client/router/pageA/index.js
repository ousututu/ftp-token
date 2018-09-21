
import pageA from '@/pageA'

import Home from '@/pageA/children/home'

import Detail from '@/pageA/children/detail'

export default {
  path: '/pageA',
  component: pageA,
  redirect: '/pageA/home',
  children: [
    {
      path: '/pageA/home',
      component: Home,
      meta: { p: [], authority: false },
    }, {
      path: '/pageA/detail',
      component: Detail,
      meta: { p: [] },
    },
  ],
}