<template>
  <div>
    <!-- 头部 -->
    <div>
      <div class="m-indexHd">
        <div class="line">
          <a class="logo" href="/"></a>
          <div class="m-topSearchIpt ipt">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共22525款好物</span>
          </div>
          <div class="loginBtn">登录</div>
        </div>
        <div class="tabWrap">
          <div class="m-tabs scroll">
            <header>
              <div class="inner">
                <div
                  class="list"
                  style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
                >
                  <div class="tab active">
                    <span class="txt">推荐</span>
                  </div>
                  <div class="tab">
                    <span class="txt">居家生活</span>
                  </div>
                  <div class="tab">
                    <span class="txt">服饰鞋包</span>
                  </div>
                  <div class="tab">
                    <span class="txt">美食酒水</span>
                  </div>
                  <div class="tab">
                    <span class="txt">个护清洁</span>
                  </div>
                  <div class="tab">
                    <span class="txt">母婴亲子</span>
                  </div>
                  <div class="tab">
                    <span class="txt">运动旅行</span>
                  </div>
                  <div class="tab">
                    <span class="txt">数码家电</span>
                  </div>
                  <div class="tab">
                    <span class="txt">全球特色</span>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div class="toggleWrap">
            <div class="linear"></div>
            <div class="toggle">
              <div class="icon"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <p>
            <img src="./images/01.jpg" alt />
          </p>
        </div>
        <div class="swiper-slide">
          <p>
            <img src="./images/02.jpg" alt />
          </p>
        </div>
        <div class="swiper-slide">
          <p>
            <img src="./images/03.jpg" alt />
          </p>
        </div>
        <div class="swiper-slide">
          <p>
            <img src="./images/06.jpg" alt />
          </p>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
    <!-- 中间 -->
    <div class>
      <!-- 中间介绍 -->
      <div class="m-indexServicePolicy">
        <ul class="g-grow">
          <li class="item">
            <a>
              <i class="u-icon u-icon-servicePolicy-index"></i>
              <span class="text">网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a>
              <i class="u-icon u-icon-servicePolicy-index"></i>
              <span class="text">30天无忧退货</span>
            </a>
          </li>
          <li class="item">
            <a>
              <i class="u-icon u-icon-servicePolicy-index"></i>
              <span class="text">48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- 中间图 -->
      <div class="g-grow-z">
        <div class="g-grow-l">
          <ul class="g-grow-t">
            <li class="g-grow-m">
              <img src="./item-list/01.png" alt="">
              <div class="txt">新品首发</div>
            </li>
            <li class="g-grow-m">
              <img src="./item-list/01.png" alt="">
              <div class="txt">新品首发</div>
            </li>
            <li class="g-grow-m">
              <img src="./item-list/01.png" alt="">
              <div class="txt">新品首发</div>
            </li>
            <li class="g-grow-m">
              <img src="./item-list/01.png" alt="">
              <div class="txt">新品首发</div>
            </li>
          </ul>
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

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar"
      }
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.m-indexHd
  width 100%
  height 156px
  .line
    height 88px
  .tabWrap
    width 100%
    height 60px
    display flex
    .inner
      position relative
      height 100%
      width 100%
      overflow hidden
.swiper-container
  width 100%
  height 400px
  img
    display inline-block
    width 100%
    height 600px
.m-indexServicePolicy
  width 100%
  height 72px
  .g-grow
    height 0.96rem
    padding 0 0.4rem 0 0.4rem
    display flex
    flex-flow row nowrap
    align-items center
    .item
      display list-item
      text-align -webkit-match-parent
      .text
        font-size 0.32rem
        color #333
        margin-left 0.10667rem
        line-height 0.42667rem
        display inline-block
        vertical-align middle
.g-grow-z
  .g-grow-t
    display flex   
    margin .13333rem .26667rem 0  
</style>