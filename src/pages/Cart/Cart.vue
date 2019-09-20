<template>
  <div class="wy1">
    <div class="wy21">
      <div class="wy31">头部</div>
      <div class="wy32"><span>网易严选</span></div>
    </div>
    <div class="wy22">
       <div class="wy33">
          <mt-button type="default" class="sty" @click="$router.push('/denglu')">手机号登录</mt-button>
       </div>
       <!-- <div class="wy33">
          <mt-button type="default" class="sty">手机号登录</mt-button>
       </div> -->
      <!-- <div class="wy31">
        <mt-button type="default">default</mt-button>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wy1
  width 100%
  height 668px
  .wy21
    width 100%
    height 260px
    background-color #F2F5E2
    .wy31
      width 100%
      height 140px
      background-color #FAFAFA
      display flex
      justify-content center
      align-items center
      font-size 80px
    .wy32  
      width 100%
      height 120px
      display flex
      justify-content center
      align-items center
      font-size 80px
      span 
        color red
  .wy22
      width 100%
      height 1000px
      background-color #F2F5F4 
      display flex
      justify-content center
      align-items center 
      .wy33 
        width 100%
        height 350px
        display flex
        justify-content space-around
        .sty
          width 70%
          height 100px 
          background-color #DD1A21
          font-size 40px
          color #fff
</style>