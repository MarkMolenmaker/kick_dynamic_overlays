<script setup>
</script>

<template>
  <div class="bg">
    <div class="webcam-indent left" />
    <div class="webcam-indent middle" />
    <div class="webcam-indent right" />
  </div>
</template>

<style scoped lang="sass">
@import src/assets/sass/variables
.bg
  align-items: flex-start
  border-top: solid 5px transparent

.webcam-indent
  display: flex
  width: 2.5%
  height: 10px
  justify-content: center
  align-items: flex-start
.middle
  width: 10%
  background: linear-gradient(to right, rgba(172,116,12,1), rgba(215, 183, 98, 1))
.left
  background: linear-gradient(to bottom left, rgba(172,116,12,1) 50%, rgba(255, 0, 0, 0) 50%)
.right
  background: linear-gradient(to bottom right, rgba(215, 183, 98, 1) 50%, rgba(255, 0, 0, 0) 50%)

img
  position: absolute
  top: 0
  width: 55%
  aspect-ratio: 1 / 1
  filter: drop-shadow(2px 2px 2px #000)
</style>

