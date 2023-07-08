<script>
export default {
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number,
      default: 0
    },
    leftText: String,
    middleText: String,
    rightText: String
  }
}
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar-fill" :style="{ width: this.progress + '%' }"/>
    <span class="progress-bar-info">{{ this.leftText }}</span>
    <span class="progress-bar-info">{{ this.middleText }}</span>
    <span class="progress-bar-info">{{ this.rightText }}</span>
  </div>
</template>

<style scoped lang="sass">
.progress-bar
  position: relative
  width: 100%
  height: 30px
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-between

.progress-bar-fill
  position: absolute
  left: 0
  height: 100%
  background: #2e97ff

.progress-bar-info
  color: white
  z-index: 1
  margin: 0 10px
</style>