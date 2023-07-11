<script>
import { useRoute } from 'vue-router'
export default {
  name: 'ContainerOverlay',
  data () {
    return {
      title: '',
      desc: '',
    }
  },
  mounted() {
    const route = useRoute()
    this.title = route.query.title
    this.desc = route.query.desc
  },
}
</script>

<template>
  <div class="bg">
    <div class="gamble-awareness">
      <span class="gold-shadow">{{ this.title }}</span>
      <span class="gold">{{ this.title }}</span>
      <span class="white">{{ this.desc }}</span>
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

