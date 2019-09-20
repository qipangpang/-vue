<template>
  <div class="home">
    <div class="container">
      <div class="line">
      <a href="javascript:;" class="logo">
        <img src="./imgs/logo/logo.png" alt="">
      </a>
      <div class="search">
        <i class="icon iconfont icon-RectangleCopy2"></i>
        <span>搜索商品, 共201314件</span>
      </div>
      <div class="loginBtn">登录</div>
      </div>
     <div class="list" ref="list">       
     <div class="list-scroll" ref="listScroll">
      <div class="tab">
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
        <span class="txt">个户清洁</span>
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
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./imgs/lunbo/01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/lunbo/02.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/lunbo/03.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/lunbo/04.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/lunbo/05.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/lunbo/06.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/lunbo/07.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./imgs/lunbo/08.jpg" alt="">
          </div>
      </div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div> 
    <div class="policy">
      <ul class="grow">
        <li class="item">
          <a href="javascript:;">
            <i class="icon iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
            <span class="text">网易自营品牌</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="icon iconfont icon-shenqingchenggonggougouicon"></i>
            <span class="text">30天无忧退货</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <i class="icon iconfont icon-jiaoyi"></i>
            <span class="text">48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <div class="slide">
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/01.png" alt="">
          <span>新品首发</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/02.png" alt="">
          <span>居家生活</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/03.png" alt="">
          <span>服饰鞋包</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/04.png" alt="">
          <span>美食酒水</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/05.png" alt="">
          <span>个户清洁</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/06.png" alt="">
          <span>母婴亲子</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/07.png" alt="">
          <span>运动旅行</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/08.png" alt="">
          <span>数码家电</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/09.png" alt="">
          <span>全球特色</span>
        </a>
        <a href="javascript:;" class="item">
          <img src="./imgs/item-list/10.gif" alt="">
          <span>好货抄底</span>
        </a>
      </div>
    </div>
    <div class="xinren">
      <div class="zhuangxiang">
      新人专享礼
      </div>
      <div class="content">
      <div class="left">
        <a href="javascript:;" class="left">
        <div class="name">新人专享礼包</div>
        <div class="img">
           <img src="./imgs/xinren/01.png" alt="">
        </div>
        </a>
      </div>
      <div class="right">
        <a href="javascript:;" class="top">
        <div class="name">福利社</div>
        <div class="img">
           <img src="./imgs/xinren/02.png" alt="">
        </div>
        </a>
        <a href="javascript:;" class="bottom">
        <div class="name">新人拼团</div>
        <div class="img">
           <img src="./imgs/xinren/03.png" alt="">
        </div>
        </a>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入swiper包
import Swiper from "swiper";
import "swiper/css/swiper.css";
// 引入滑动的包
import BScroll from 'better-scroll';
export default {
  data() {
    return {};
  },
   created() {
    this.$nextTick(() => {
      // this._initScroll();
      this.personScroll();
    });
  },
  methods: {
    personScroll() {
      // 默认有9个子元素，每个子元素的宽度为200px
      let width = 9 * 200;
      this.$refs.listScroll.style.width = width + "px";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.list, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
  }
  },
  mounted() {
    var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:true,  // 设置自动循环播放
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    }
  })   
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
.home
  width 100%
  height 100%
  .container
    position fixed
    background #fff
    width 100%
    height 160px
    z-index 2
    .line
      width 100%
      height 60px
      display flex
      align-items center
      background #ffffff
      padding 15px 15px 0
      margin 5px 0 0
      box-sizing border-box
      .logo
        img 
          width 170px
          margin-left 20px
      .search
        width 410px
        height 56px
        background #ededed
        line-height 56px
        border-radius 10px
        margin 0 15px
        .icon
          margin 0 10px 5px
          font-size 32px
          color #666666
        span
          font-size 32px
          color #666666
      .loginBtn
        color #B4282D
        border 1px #B4282D solid
        padding 10px
        border-radius 10px
        margin-right 10px
    .list
      width 100%
      height 60px 
      .list-scroll
        // width 1406px
        height 100% 
        display flex 
        padding 40px
        box-sizing border-box
        .tab
          position relative
          height 30px
          padding 0 16px
          box-sizing border-box
          .txt
            display block
            font-size 30px
            font-weight 700
            color #484848
  .swiper-container
    width 100%
    height 340px
    position relative
    padding-top 160px
    .swiper-wrapper.swiper-slide
      width 100%
      height 100%
  .policy
    width 100%
    height 73px
    .grow
      width 100%
      height 100%
      padding 4px
      display flex
      align-items center
      .item
        height 37px
        line-height 37px
        float left
        padding  0 18px
        box-sizing border-box
        span 
          font-weight 700
          font-size 24px
        .icon
          font-size 30px
          color #B83539
          margin 0 5px
  .wrapper
    width 100%
    height 342px
    border-bottom 20px solid #EEEEEE
    .slide
      width 100%
      height 100%
      position relative
      a 
        display block  
        width 110px
        height 156px
        float left
        margin 10px 20px 0
        img 
          width 110px
          height 110px
        span 
          width 110px 
          height 36px
  .xinren  
    width 100%
    height 530px  
    font-size 32px
    padding-bottom 30px
    border-bottom 20px solid #EEEEEE
    .zhuangxiang
      display inline-block
      width 100%
      height 90px
      line-height 90px
      text-align center
    .content
      width 100%
      height 440px
      .name
        padding 30px
        color black
      .left
        border-radius 8px
        float left
        margin-left 35px
        left 0
        width 313px
        height 430px 
        background #F9E9CF
        .img
          display block
          width 258px
          margin 20px 0 0 15px
      .right
        margin-right 30px
        float right
        width 332px
        height 430px
        overflow hidden
        .top
          border-radius 8px
          display block
          background #FBE2D3
          .img
            display inline-block
            width 200px
            margin-top -80px
            padding 0 0 0 120px
        .bottom
          border-radius 8px
          display block
          background #FFECC2
          margin-top 5px
          .img
            display inline-block
            width 200px
            margin-top -80px
            padding 0 0 0 120px
</style>
