<template>
  <div>
    <div class="header"></div>
    <transition :name='transitionName'>
          <router-view class='child-view'></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'transitionPage',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  beforeRouteUpdate (to, from, next) { // 路由更新时将执行
    // 点击分两种， 前进和后退， 初始化后isBack是 undefined， 此时点击前进将左滑并赋值 isBack 为false， 点击返回会先执行goBack函数， 此时isBack变为true, 执行右滑动， 最后又将 isBack赋为 false
    let isBack = this.$router.isBack 
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style scoped>
  /* 这个header仅针对此组件的header */
  .header {
    width: 100%;
    position: absolute;
    height: 50px;
    background: gray;
  }
  /* 整个子组件绝对定位 */
  .child-view {
    width: 100%;
    position: absolute;
    transition: all .5s ease;
  }
  .slide-left-enter, .slide-right-leave-active {
    transform: translateX(50px);
    opacity: 0;
  } 
  .slide-left-leave-active, .slide-right-enter {
    transform: translateX(-50px);
    opacity: 0;
  }
</style>
