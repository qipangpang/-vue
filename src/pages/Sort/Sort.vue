<template>
  <div class="p-bd">
    <!-- 上部 -->
    <div class="p-su">
      <div class="header">头部</div>
      <div class="p-md">
        <div class="p-mdl">
          <i class="icon">
            <img src="./images/icon-search.png" alt />
          </i>
          <span class="placeholder">搜索商品, 共22698款好物</span>
        </div>
        <div></div>
      </div>
    </div>
    <!-- 下部 -->
    <div class="m-cateContainer">
      <div class="m-cateNavVertWrap">
        <div class="m-style">
          <ul class="m-cateNavVert">
            <li class="item active">
              <a class="txt" href>换季专区</a>
            </li>
            <li class="item">
              <a class="txt" href="javascript:;">换季专区</a>
            </li>
            <li class="item">
              <a class="txt" href="javascript:;">换季专区</a>
            </li>
            <li class="item">
              <a class="txt" href="javascript:;">换季专区</a>
            </li>
            <li class="item">
              <a class="txt" href="javascript:;">换季专区</a>
            </li>
            <li class="item">
              <a class="txt" href="javascript:;">换季专区</a>
            </li>
            <li class="item">
              <a class="txt" href="javascript:;">换季专区</a>
            </li>
            <li class="item">
              <a class="txt" href="javascript:;">换季专区</a>
            </li>
            <li class="item">
              <a class="txt" href="javascript:;">换季专区</a>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
      <div class="m-subCateList">
        <div class="style">
          <div class="m-subCateContainer">
            <!-- 轮播 -->
            <div class="banner">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="./images/01.jpg" class="img"></div>
                  <div class="swiper-slide"><img src="./images/02.jpg" class="img"></div>
                </div>
                <!-- 如果需要滚动条 -->
                <div class="swiper-scrollbar"></div>
              </div>
            </div>
            <!-- 图例 -->
            <div class="cateList"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.p-bd
  height 100%
  width 100%
  // 上部
  .header
    width 100%
    height 104px
  .p-md
    height 88px
    display flex
    -webkit-box-align center
    align-items center
    padding 0 0.4rem
    background-color #fff
    position relative
    .p-mdl
      width 100%
      display flex
      flex-flow row nowrap
      -webkit-box-align center
      align-items center
      -webkit-box-pack center
      justify-content center
      height 0.74667rem
      font-size 0.37333rem
      background-color #ededed
      border-radius 0.10667rem
      .icon
        display inline-block
        vertical-align middle
        background-repeat no-repeat
        background-size 100% 100%
        width 0.37333rem
        height 0.37333rem
        margin-right 0.13333rem
      .placeholder
        color #666
    &:after
      content ''
      position absolute
      background-color #d9d9d9
      left 0
      width 100%
      height 1px
      transform-origin 50% 100% 0
      bottom 0
  .m-cateContainer
    height 1044px
    // background-color green
    width 100%
    overflow auto
    .m-cateNavVertWrap
      float left
      width 162px
      height 100%
      background-color #fff
      .m-style
        -webkit-transform translateY(0px)
        .m-cateNavVert
          // padding 40px
          .item
            width 100%
            height 50px
            text-align center
            border none
            margin-top 0.53333rem
            .txt
              display block
              color #333
              line-height 0.66667rem
              white-space nowrap
              font-size 0.37333rem
              text-overflow ellipsis
              overflow hidde
    &:after
      content ''
      position absolute
      background-color rgba(0, 0, 0, 0.15)
      top 0
      bottom 0
      width 5px
      transform-origin 100% 50% 0
      right 0
    .m-subCateList
      margin-left 162px
      padding 30px 30px 21px
      height 100%
      // overflow hidden
      .style
        -webkit-transform translateY(0px)
        .m-subCateContainer
          .banner
            position relative
            width 528px
            height 192px
            margin-bottom 0.42667rem
            background #eee
            border-radius 4px
            .swiper-container
              width 100%
              height 100%
              img
                width 100%
                height 100%
</style>
