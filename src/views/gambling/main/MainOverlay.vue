<script setup>
</script>

<template>
  <div class="bg">
    <div class="gamble-awareness">
      <span class="gold-shadow">18+</span>
      <span class="gold">18+</span>
      <span class="white">BE</span>
      <span class="white">GAMBLE</span>
      <span class="white">AWARE</span>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import src/assets/sass/variables

.gamble-awareness
  position: absolute
  display: flex
  top: 7px
  left: 10px
  gap: 10px

span
  font-family: 'BigNoodleTitling', sans-serif
  font-size: 30px
  text-shadow: black 3px 3px 3px
  text-transform: uppercase
.gold
  background: $text-gradient-gold-1
  -webkit-background-clip: text
  text-shadow: none
  -webkit-text-fill-color: transparent
.gold-shadow
  position: absolute
  z-index: -1
  color: black
.white
  color: white
</style>

