<script>
export default {
  name: 'BannersRoot'
}
</script>

<template>
  <div class="banner bg bg-blue">
    <span class="title">Follow me on Youtube</span>
    <span class="desc">youtube.com/dioninsanity</span>
    <span class="desc">Type <span class="highlight">!youtube</span> in Chat</span>
  </div>
</template>

<style scoped lang="sass">
@import src/assets/sass/variables
.bg
  display: flex
  flex-direction: column
  width: auto
  height: auto

.banner
  display: flex
  flex-direction: column
  padding: 10px
  text-shadow: black 3px 3px 3px
  text-transform: uppercase

  .title
    color: white
    font-family: 'TheBoldFont', sans-serif
    font-size: 22px

  .desc
    color: white
    font-family: 'Calibri', sans-serif
    font-size: 16px

    .highlight
      border-bottom: 5px solid
      border-image: $gradient-gold-1 1
</style>