<template>
  <div>
    <div class="header">
      <div class="title">首页</div>
    </div>
    <div>
      <router-link to="/pageA">Go to pageA</router-link>
      <router-link to="/pageB">Go to pageB</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>
