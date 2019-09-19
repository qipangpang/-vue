<template>
  <footer class="footer_guide">
    <a
      href="javascripa:;"
      class="guide_item"
      :class="{on:'/msite'===$route.path}"
      @click="goTo('/msite')"
    >
      <span class="iconfont icon-shouye1"></span>
      <span>首页</span>
    </a>
    <a
      href="javascripa:;"
      class="guide_item"
      :class="{on:'/sort'===$route.path}"
      @click="goTo('/sort')"
    >
     <span class="iconfont  icon-categorynormal"></span>
      <span>分类</span>
    </a>
    <a
      href="javascripa:;"
      class="guide_item"
      :class="{on:'/search'===$route.path}"
      @click="goTo('/search')"
    >
      <span class="iconfont  icon-circle"></span>
      <span>识物</span>
    </a>
    <a
      href="javascripa:;"
      class="guide_item"
      :class="{on:'/logon'===$route.path}"
      @click="goTo('/logon')"
    >
      <span class="iconfont  icon-gouwu1"></span>
      <span>购物车</span>
    </a>
    <a
      href="javascripa:;"
      class="guide_item"
      :class="{on:'/cart'===$route.path}"
      @click="goTo('/cart')"
    >
     <span class="iconfont icon-geren1"></span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    // 设置路径
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.footer_guide // footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 98px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 24px
      margin-top 4px
      margin-bottom 4px
    .iconfont
      font-size 39px
</style>