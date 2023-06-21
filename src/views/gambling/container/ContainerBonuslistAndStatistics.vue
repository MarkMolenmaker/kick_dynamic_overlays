<script>
export default {
  name: 'ContainerBonuslistAndStatistics',
  data () {
    return {
      start_amount: '',
      running_average_x: '',
      required_average_x: '',
      bonus_count: '',
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1">
    <div class="bonuslist"></div>
<!--    <iframe class="bonuslist" src="https://bht.bet/widgets/bonus_list/9UTk18nl4UwzSYz4alwIHSUlNLsFfwQo"></iframe>-->
    <div class="divider" />
    <div class="statistics-container">
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Start</span>
          <span class="value">{{ this.start_amount }}</span>
<!--          wait this.fetchShowValue('https://bht.bet/widgets/start_cost/9UTk18nl4UwzSYz4alwIHSUlNLsFfwQo');-->
        </div>
        <div class="statistics-row">
          <span class="type">Run Avg</span>
          <span class="value">{{ this.running_average_x }}</span>
          <!--          <iframe src="https://bht.bet/widgets/average_current_multi/9UTk18nl4UwzSYz4alwIHSUlNLsFfwQo"></iframe>-->
        </div>
      </div>
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Bonus Count</span>
          <span class="value">{{ this.bonus_count }}</span>
          <!--          <iframe src="https://bht.bet/widgets/bonus_count/9UTk18nl4UwzSYz4alwIHSUlNLsFfwQo"></iframe>-->
        </div>
        <div class="statistics-row">
          <span class="type">Req Avg</span>
          <span class="value">{{ this.required_average_x }}</span>
<!--          <iframe src="https://bht.bet/widgets/average_required_multi/9UTk18nl4UwzSYz4alwIHSUlNLsFfwQo"></iframe>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "src/assets/sass/variables"

.bg
  display: flex
  flex-direction: column

.bonuslist
  width: 100%
  height: 100%

.divider
  width: 100%
  height: 5px
  background: $gradient-gold-1

.statistics-container
  width: calc(100% - 10px)
  display: flex
  gap: 20px
  flex-direction: row

.statistics-section
  display: flex
  width: 100%
  flex-direction: column

.statistics-row
  display: flex
  width: 100%
  flex-direction: row
  justify-content: space-between
  font-family: BigNoodleTitling, sans-serif
  font-size: 30px
  span.type
    color: white
  span.value
    color: #2e97ff
</style>

