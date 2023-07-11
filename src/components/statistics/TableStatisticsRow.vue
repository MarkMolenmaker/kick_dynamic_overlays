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
    largeFont: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    }
  }, computed: {
    classes() {
      return {
        'space-out': !this.center,
        'center': this.center
      }
    }
  }
}
</script>

<template>
  <div class="table-statistics-row" :class="classes">
    <span class="table-statistics-row-type" :class="{'large-font': largeFont}">{{ type }}</span>
    <span class="table-statistics-row-desc" :class="{'large-font': largeFont}"
          v-if="desc !== null && desc !== undefined">{{ desc }}</span>
    <span class="table-statistics-row-value" :class="{'large-font': largeFont}">{{ value }}</span>
  </div>
</template>

<style scoped lang="sass">
.table-statistics-row
  width: 100%
  span.table-statistics-row-type
    color: white
  span.table-statistics-row-value
    color: #2e97ff
  span.large-font
    font-size: 20px
    margin: 3px 0
.space-out
  display: flex
  flex-direction: row
  justify-content: space-between
.center
  display: grid
  grid-template-columns: 120px 1fr 70px
  span:first-child
    justify-self: start
  span:last-child
    justify-self: end
</style>