<template>
  <div class="m-downloadBanner" >
    <div class="g-row">
      <div class="iconWrap">
        <span class="iconfont  icon-circle"></span>
      </div>
      <div class="m-defaultBanner">
        <div class="brand">
          <span class="iconfont  icon-circle"></span>
          <div class="cnt">
            <p class="txt1">前往APP领1000元新用户现金礼包</p>
            <p class="txt2">网易自营 品质生活</p>
          </div>
        </div>
        <a class="w-button btn" href="javascript:void(0);">打开APP</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.m-downloadBanner
  width 10rem
  margin-left auto
  margin-right auto
  height 104px
  position relative
  z-index 2
  opacity 1
  transition opacity .2s
  .g-row
    width 100%
    height 100%
    overflow hidden
    .iconWrap
      position absolute
      height 100%
      left 0
      top 0
      z-index 2
      .iconfont
        // width .50667rem
        // height .50667rem
        background-position 0 -2.56rem
        font-size 39px
    .m-defaultBanner
      display flex
      -webkit-box-align center
      align-items center
      -webkit-box-pack justify
      justify-content space-between
      padding 0 .26667rem 0 .4rem
      width 100%
      height 100%
      background-color #333 
      .brand
        display flex
        max-width 6.66667rem
        -webkit-box-align center
        align-items center 
        .logo
          margin-right .21333rem
        .cnt  
          display inline-block
          padding .2rem 0
          .txt1
            font-size .32rem
            line-height .34667rem
            margin .05333rem 0 .09333rem
            color #fff
          .txt2  
            font-size .29333rem
            line-height .34667rem
            color #fff
      .btn
        width 1.84rem
        font-size .32rem
        height .69333rem
        line-height .69333rem
        color #fff
        background #B4282D
        border-radius 4px
        font-family PingFangSC-Regular  
</style>