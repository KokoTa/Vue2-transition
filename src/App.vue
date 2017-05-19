<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  /* 这个header适用于所有子组件 */
  .header {
    height: 50px;
    width: 100%;
    background: gray;
    text-align: center;
  }
  .left, .title {
    font-size: 2rem;
    line-height: 50px;
  }
  .left {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
  }
  .left:hover {
    cursor: pointer;
  }
  .title {
    text-align: center;
  }




</style>
