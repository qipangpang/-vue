import Cart from '../pages/Cart/Cart.vue'
import Logon from '../pages/Logon/Logon.vue'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Sort from '../pages/Sort/Sort.vue'
export default [
{// 购物车
  path:'/cart',
  component: Cart
},
{ // 登录
  path: '/logon',
  component: Logon
},
{ // 首页
  path: '/msite',
  component: MSite
},
{ // 搜索
  path: '/search',
  component: Search
},
{ // 分类
  path: '/sort',
  component: Sort
},
{
  path:'/',
  redirect:'/cart'
}
]