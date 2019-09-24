<template>
  <div>
    <Footer v-show="$route.meta.isShowFooter"/>
    <router-view></router-view>
  </div>
</template>
<script>
import Footer from './components/Footer/Footer.vue'
// 引入api接口
import {reqGoods,reqRatings,reqInfo} from "./api"
export default {
  name:'App',
  components: {
    Footer
  },
  async mounted() {
    const req = await reqInfo()
    console.log(req)
    
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
