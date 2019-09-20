<template>
  <div class="gs">
    <div class="gtop">
      <div class="gw">
        <span class="logo">购物车</span>
      </div>
      <div class="gmm">30天无忧退货</div>
    </div>
    <div class="dl">
      <div class="gwt">
        <div class="qta">
          <span></span>
        </div>
        <!-- <div class="qtd">去添点什么吧</div> -->
      </div>
      <div class="but">
        <!-- <div>登录</div> -->
        <!-- <button class="mm" @click="goTu('/cart')">登录</button> -->
        <mt-button
          type="default"
          class="mm"
          @click="goTu('/cart')"
        >登录</mt-button>
        <!-- <mt-button type="primary">primary</mt-button> -->
      </div>
    </div>
  </div>
</template>
<script>
// import { Button } from 'mint-ui';
// Vue.component(Button.name, Button);
export default {
  methods: {
    // 根据地址，转跳到对应的路由界面
    goTu(path) {
      console.log("胖胖");

      // 不带记录的
      if (this.$route.path !== path) {
        this.$router.replace(path);
      }
      // 带记录的
      // this.$route.push()
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.gs
  width 100%
  height 100%
  .gtop
    width 100%
    height 262px
    .gw
      height 192px
      padding 0 0.4rem
      line-height 1.17333rem
      text-align center
      background-color #fff
      position relative
      .logo
        // float left
        font-size 0.48rem
    .gmm
      width 100%
      height 70px
      font-size 0.48rem
      text-align center
  .dl
    width 100%
    height 600px
    background-color green
    .but
      width 100%
      height 300px
      color #000
      display table
      text-align center
      .mm
        width 80%
        height 80px
        font-size 50px
</style>