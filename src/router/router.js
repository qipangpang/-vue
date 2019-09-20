import Cart from '../pages/Cart/Cart.vue'
import Logon from '../pages/Logon/Logon.vue'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Sort from '../pages/Sort/Sort.vue'
import Denglu from '../pages/Denglu/Denglu.vue'
export default [{ // 购物车
    path: '/cart',
    component: Cart
  },
  { // 登录
    path: '/logon',
    component: Logon,
    meta: {
      isShowFooter: true
    }
  },
  { // 首页
    path: '/msite',
    component: MSite,
    meta: {
      isShowFooter: true
    }
  },
  { // 搜索
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  { // 分类
    path: '/sort',
    component: Sort,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/denglu',
    component: Denglu
  },
  {
    path: '/',
    redirect: '/msite'
  }
]