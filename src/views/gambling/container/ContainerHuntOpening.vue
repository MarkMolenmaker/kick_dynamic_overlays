<script>
export default {
  name: 'ContainerHuntOpening',
  data () {
    return {
      bonus_hunt: null
    }
  },
  computed: {
    _statistics() {
      const statistics = {}

      // Start Cost
      const str_cst = this.bonus_hunt.info_start_cost
      if (str_cst === '' || str_cst === '$ 0') statistics.start_cost = '-'
      else statistics.start_cost = str_cst

      // Average Current Multiplier ( X )
      const avg_crr_mlt = this.bonus_hunt.info_running_average.split('.')[0]
      if (avg_crr_mlt === '' || avg_crr_mlt === '0') statistics.avg_current_multi = '-'
      else statistics.avg_current_multi = `${avg_crr_mlt} X`

      // Average Required Multiplier ( X )
      const avg_req_mlt = this.bonus_hunt.info_required_average.split('.')[0]
      if (avg_req_mlt === '' || avg_req_mlt === '0') statistics.avg_required_multi = '-'
      else statistics.avg_required_multi = `${avg_req_mlt} X`

      // Winnings
      const win = this.bonus_hunt.info_amount_won
      if (win === '' || win === '$ 0') statistics.winnings = '-'
      else statistics.winnings = `${win}`

      // Biggest Win
      const big_win = this.bonus_hunt.highest_payout_value
      if (big_win === '' || big_win === '$ 0') statistics.biggest_win = '-'
      else statistics.biggest_win = `${big_win}`

      // Biggest Multiplier ( X )
      const big_mlt = this.bonus_hunt.highest_multi_value
      if (big_mlt === '' || big_mlt === '$ 0') statistics.biggest_multi = '-'
      else statistics.biggest_multi = `${big_mlt}`

      return statistics
    },
    _opening_progress() {
      return {
        current_index: this.bonus_hunt.currentKey,
        total: this.bonus_hunt.bonuses.length,
        percentage: Math.round(this.bonus_hunt.currentKey / this.bonus_hunt.bonuses.length * 100)
      }
    }
  },
  mounted() {
    /* Auto Update values */
    this.fetchValues()

    setInterval(() => {
      this.fetchValues()
    }, 5000)

    /* Auto Scroll through bonuslist */
    let scrollPosition = 0
    setInterval(() => {
      const wrapper = this.$refs.wrapper
      const bonuslist = this.$refs.bonuslist
      if (wrapper === null || bonuslist === null
          || this.bonus_hunt === null || this.bonus_hunt.bonuses.length === 0) return

      const rows = Math.floor(wrapper.clientHeight / (bonuslist.clientHeight / (this.bonus_hunt.bonuses.length + 1)))
      let scrollOffset = (bonuslist.clientHeight / (this.bonus_hunt.bonuses.length + 1)) * (rows + scrollPosition)

      scrollPosition += rows
      if (scrollPosition >= this.bonus_hunt.bonuses.length) {
        scrollPosition = 0
        scrollOffset = 0
      }

      this.$smoothScroll({
        container: wrapper,
        scrollTo: scrollOffset,
        updateHistory: false,
      })
    }, 3000)

  },
  methods: {
    fetchValues() {
      // const API_URL = 'https://bht-scrapi-markmolenmaker.koyeb.app/statistic/'
      const API_URL = 'http://127.0.0.1:8000/statistic/'
      fetch(API_URL + 'bonus_list')
        .then(response => response.json())
        .then(json => this.bonus_hunt = json)
    }
  }
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="this.bonus_hunt">
    <span class="title">Bonus Hunt Opening</span>
    <div class="divider"/>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: this._opening_progress.percentage + '%' }"/>
      <span class="progress-bar-info">Bonus: {{ this._opening_progress.current_index }}</span>
      <span class="progress-bar-info">{{ this._opening_progress.percentage }}%</span>
      <span class="progress-bar-info">Total: {{ this._opening_progress.total }}</span>
    </div>
    <div class="divider"/>
    <div class="wrapper" ref="wrapper">
      <table class="bonuslist" v-if="this.bonus_hunt.bonuses.length > 0" ref="bonuslist">
        <tr class="bonus">
          <th>#</th>
          <th class="slot">Slot</th>
          <th>Bet</th>
          <th>Payout</th>
        </tr>
        <tr class="bonus" :class="{active: bonus.active}" v-for="bonus in this.bonus_hunt.bonuses" :key="bonus.id" ref="bonuslist_content">
          <td>{{ bonus.order }}</td>
          <td class="slot">{{ bonus.name }}</td>
          <td>{{ bonus.bet_size }}</td>
          <td>{{ bonus.payout ? bonus.payout : '-' }}</td>
        </tr>
      </table>
    </div>
    <div class="divider" v-if="this.bonus_hunt.bonuses.length > 0"/>
    <div class="statistics-container">
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Start</span>
          <span class="value">{{ this._statistics.start_cost }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">AVG X</span>
          <span class="value">{{ this._statistics.avg_current_multi }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">Biggest Win</span>
          <span class="value">{{ this._statistics.biggest_win }}</span>
        </div>
      </div>
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Winnings</span>
          <span class="value">{{ this._statistics.winnings }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">REQ X</span>
          <span class="value">{{ this._statistics.avg_required_multi }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">Biggest X</span>
          <span class="value">{{ this._statistics.biggest_multi }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "src/assets/sass/variables"

span, th, td
  text-shadow: #000 1px 2px 2px

.bg
  display: flex
  flex-direction: column

.title
  font-family: TheBoldFont, sans-serif
  font-size: 30px
  color: white

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
  font-family: BigNoodleTitling, sans-serif
  font-size: 22px
  color: white
  z-index: 1
  margin: 0 10px

.wrapper
  width: 100%
  display: block
  flex-direction: column
  align-items: center
  justify-content: center
  margin-bottom: auto
  overflow-y: scroll
  scroll-behavior: smooth
  scroll-snap-type: x mandatory
  -ms-overflow-style: none
  scrollbar-width: none
.wrapper::-webkit-scrollbar
  display: none

table.bonuslist
  width: 100%
  font-family: BigNoodleTitling, sans-serif
  font-size: 22px
  table-layout: auto
  border-spacing: 0

  th, tr
    color: white
    text-align: start

    td.slot
      max-width: 50vw
      text-wrap: nowrap
      text-overflow: ellipsis
      overflow: hidden

.divider
  width: 100%
  min-height: 5px
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
  font-size: 20px
  span.type
    color: white
  span.value
    color: #2e97ff

.active
  background: $gradient-gold-1
</style>

