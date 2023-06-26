<template>
  <router-view/>
</template>

<style lang="sass">
@import 'assets/sass/style.sass'
</style>

<script>
export default {
  name: 'App',
  data() { return { updateInterval: null } },
  mounted() {
    this.$store.dispatch('update')
    this.updateInterval = setInterval(() => {
      this.$store.dispatch('update')
    }, 5000)
  },
  beforeUnmount() { clearInterval(this.updateInterval) }
}
</script>