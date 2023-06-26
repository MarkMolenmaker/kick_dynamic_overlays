<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ContainerBonuslistAndStatistics',
  computed: { ...mapGetters(['loaded', 'bonus_count', 'bonus_list',
    'start_cost', 'current_average_x', 'required_average_x']) },
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <div class="wrapper" ref="wrapper">
      <table class="bonuslist" v-if="bonus_count > 0" ref="bonuslist">
        <tr class="bonus">
          <th>#</th>
          <th class="slot">Slot</th>
          <th>Bet</th>
        </tr>
        <tr class="bonus" v-for="bonus in bonus_list" :key="bonus.id" ref="bonuslist_content">
          <td>{{ bonus.order }}</td>
          <td class="slot">{{ bonus.name }}</td>
          <td>{{ bonus.bet_size }}</td>
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
          <span class="value">{{ current_average_x }}</span>
        </div>
      </div>
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Bonus Count</span>
          <span class="value">{{ bonus_count }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">REQ X</span>
          <span class="value">{{ required_average_x }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import src/assets/sass/variables

.bg
  display: flex
  flex-direction: column

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
  font-size: 22px
  table-layout: auto

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
  span.type
    color: white
  span.value
    color: #2e97ff
</style>

