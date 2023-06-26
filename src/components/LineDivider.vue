<script>
export default {
  name: 'LineDivider',
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="divider" :hidden="this.hidden"/>
</template>

<style scoped lang="sass">
@import @/assets/sass/variables
.divider
  width: 100%
  min-height: 5px
  height: 5px
  background: $gradient-gold-1
</style>