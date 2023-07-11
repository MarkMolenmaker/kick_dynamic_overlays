<script>
export default {
  name: 'TableStatisticsRow',
  props: {
    type: {
      type: String,
      default: 'Type'
    },
    desc: {
      type: String,
      required: false
    },
    value: {
      type: String,
      default: '0.00'
    },
  }
}
</script>

<template>
  <div class="table-statistics-row">
    <span class="table-statistics-row-type">{{ type }}</span>
    <span class="table-statistics-row-desc" v-if="desc !== null && desc !== undefined">{{ desc }}</span>
    <span class="table-statistics-row-value">{{ value }}</span>
  </div>
</template>

<style scoped lang="sass">
.table-statistics-row
  display: flex
  width: 100%
  flex-direction: row
  justify-content: space-between
  span.table-statistics-row-type
    color: white
  span.table-statistics-row-value
    color: #2e97ff
</style>