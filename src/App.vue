<template>
  <div>
    <Footer/>
    <router-view></router-view>
  </div>
</template>
<script>
import Footer from './components/Footer/Footer.vue'
export default {
  name:'App',
  components: {
    Footer
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
