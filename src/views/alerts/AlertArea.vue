<script>
export default {
  name: 'AlertArea',
  computed: { url () { return import.meta.env.VITE_BOTRIX_ALERTS_URL } },
}

</script>

<template>
  <iframe :src="this.url" frameborder="0"></iframe>
</template>

<style scoped lang="sass">
iframe
  width: 100%
  height: 100%
  border: none
  margin: 0
  padding: 0
  overflow: hidden
  position: absolute
  top: 0
  left: 0
  z-index: 1
  background: transparent
</style>