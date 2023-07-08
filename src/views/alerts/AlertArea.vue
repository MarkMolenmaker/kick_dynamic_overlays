<script setup>
</script>

<template>
  <iframe :src="process.env.BOTRIX_ALERTS_URL" frameborder="0"></iframe>
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