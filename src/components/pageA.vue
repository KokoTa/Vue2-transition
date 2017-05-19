<template>
  <div>
    <div class="header">
      <div class="left" @click='goBack'> < </div>
      <div class="title">PageA</div>
    </div>
    <div>
      <p>Greeting!</p>
      <router-link to="/pageB">Go to next</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  methods: {
  	goBack () {
  		this.$router.goBack()
  	}
  }
}
</script>
