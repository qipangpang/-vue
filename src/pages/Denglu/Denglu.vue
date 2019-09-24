<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">网易严选</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{'on':loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{'on':!loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{'on':loginWay}">
            <section class="login_message">
              <input
                type="tel"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
                name="phone"
               
              />
              <button
                :disabled="!isRightPhone||computeTime>0"
                class="get_verification"
                :class="{right:isRightPhone}"
                @click.prevent="sendCode"
              >{{computeTime>0?`已发送(${computeTime})s`:'获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="8"
                placeholder="验证码"
                name="code"
                v-model="code"
               
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{'on':!loginWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" />
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码" />
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" />
                <img class="get_verification" src="./images/captcha.svg" alt="captcha" />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-shouye1"></i>
      </a>
    </div>
    <!-- <button style="width:80%;height:100px;font-size:80px;color:red">ddddd</button> -->
  </section>
</template>
<script>
import { reqSendCode } from "../../api";
export default {
  data() {
    return {
      loginWay: true,
      phone: "",
      computeTime: 0,
      code:''
    };
  },
  computed: {
    isRightPhone() {
      return /[1]\d{10}/.test(this.phone);
    }
  },
  methods: {
    // 发送短信验证码
    async sendCode() {
      console.log("pangpang");

      this.computeTime = 15;
      this.timeId = setInterval(() => {
        this.computeTime--;
        if (this.computeTime < 0) {
          this.computeTime = 0;
          clearInterval(this.timeId);
        }
      }, 1000);
      // 发送验证码
      const result=await reqSendCode(this.phone)
       if(result.code===0){
          alert('发送成功')
      }else{
        this.computeTime=0
        clearInterval(this.timeId)
        //错误消息
        alert(result.msg)
      }
    },
    
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
// @import '../../common/stylus/mixins.styl'
.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 120px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 80px
        font-weight bold
        color #000
        text-align center
      .login_header_title
        padding-top 80px
        text-align center
        >a
          color #333
          font-size 28px
          padding-bottom 8px
          &:first-child
            margin-right 80px
          &.on
            color #02a774
            font-weight 700
            border-bottom 2px solid #02a774
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 20px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 800 28px Arial
            &:focus
              border 1px solid #02a774
          .login_message
            position relative
            margin-top 32px
            height 96px
            font-size 28px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 20px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 28px
              background transparent
              &.right
                color black
          .login_verification
            position relative
            margin-top 32px
            height 96px
            font-size 28px
            background #fff
            .switch_button
              font-size 24px
              border 1px solid #ddd
              border-radius 8px
              transition background-color 0.3s, border-color 0.3s
              padding 0 12px
              width 30px
              height 32px
              line-height 32px
              color #fff
              position absolute
              top 50%
              right 20px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #02a774
              >.switch_circle
                // transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0, 0, 0, 0.1)
                transition transform 0.3s
          .login_hint
            margin-top 24px
            color #999
            font-size 24px
            line-height 40px
            >a
              color #02a774
        .login_submit
          display block
          width 100%
          height 84px
          margin-top 60px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 32px
          line-height 84px
          border 0
      .about_us
        display block
        font-size 24px
        margin-top 40px
        text-align center
        color #999
    .go_back
      position absolute
      top 10px
      left 10px
      width 60px
      height 60px
      >.iconfont
        font-size 40px
        color #000
</style>
