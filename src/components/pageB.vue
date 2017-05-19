<template>
  <div>
    <div class="header">
      <div class="left" @click='goBack'> < </div>
      <div class="title">PageB</div>
    </div>
    <div>
      <p>It's the end^ ^</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageB',
  methods: {
  	goBack () {
  		this.$router.goBack()
  	}
  }
}
</script>

