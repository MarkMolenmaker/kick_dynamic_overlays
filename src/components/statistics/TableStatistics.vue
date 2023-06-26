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
  <div class="table-statistics">
    <slot></slot>
  </div>
</template>

<style scoped lang="sass">
.table-statistics
  width: calc(100% - 10px)
  display: flex
  gap: 20px
  flex-direction: row
</style>