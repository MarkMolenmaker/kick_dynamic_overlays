<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContainerHuntOpening',
  computed: { ...mapGetters(['loaded', 'bonus_count', 'bonus_list', 'bonus_progress', 'bonus_selected',
      'start_cost', 'amount_won', 'run_avg_multi', 'req_avg_multi']) },
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <span class="title">Bonus Opening</span>
    <div class="divider"/>
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: bonus_progress + '%' }"/>
      <span class="progress-bar-info">Bonus: {{ bonus_selected }}</span>
      <span class="progress-bar-info">{{ bonus_progress }}%</span>
      <span class="progress-bar-info">Total: {{ bonus_count }}</span>
    </div>
    <div class="divider"/>
    <div class="wrapper" ref="wrapper">
      <table class="bonuslist" v-if="bonus_count > 0" ref="bonuslist">
        <tr class="bonus">
          <th>#</th>
          <th class="slot">Slot</th>
          <th>Bet</th>
          <th>Payout</th>
        </tr>
        <tr class="bonus" :class="{active: bonus.active}" v-for="bonus in bonus_list" :key="bonus.id" ref="bonuslist_content">
          <td>{{ bonus.order }}</td>
          <td class="slot">{{ bonus.name }}</td>
          <td>{{ bonus.bet_size }}</td>
          <td>{{ bonus.payout ? bonus.payout : '-' }}</td>
        </tr>
      </table>
    </div>
    <div class="divider" v-if="bonus_count > 0"/>
    <div class="statistics-container">
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Start</span>
          <span class="value">{{ start_cost }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">AVG X</span>
          <span class="value">{{ run_avg_multi }}</span>
        </div>
      </div>
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Winnings</span>
          <span class="value">{{ amount_won }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">REQ X</span>
          <span class="value">{{ req_avg_multi }}</span>
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

