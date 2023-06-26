<script>
export default {
  name: 'TableStatistics',
  props: {
    columns: {
      type: Number,
      default: 1
    }
  }
}
</script>

<template>
  <div class="table-statistics" :style="{ gridTemplateColumns: 'repeat(' + this.columns + ', 1fr)' }">
    <slot></slot>
  </div>
</template>

<style scoped lang="sass">
.table-statistics
  width: calc(100% - 10px)
  display: grid
  column-gap: 20px
  row-gap: 0
</style>