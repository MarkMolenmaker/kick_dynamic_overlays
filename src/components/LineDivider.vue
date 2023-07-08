<script>
export default {
  name: 'LineDivider'
}
</script>

<template>
  <div class="divider" />
</template>

<style scoped lang="sass">
@import @/assets/sass/variables
.divider
  width: 100%
  min-height: 5px
  height: 5px
  background: $gradient-gold-1
</style>