<script>
import { mapGetters } from 'vuex'
import LineDivider from "@/components/LineDivider.vue";
import TableStatistics from "@/components/statistics/TableStatistics.vue";
import TableStatisticsRow from "@/components/statistics/TableStatisticsRow.vue";

export default {
  name: 'ContainerHuntOpening',
  components: {TableStatisticsRow, TableStatistics, LineDivider},
  computed: { ...mapGetters(['loaded', 'bonus_count', 'bonus_list', 'bonus_progress', 'slot_selected',
      'start_cost', 'amount_won', 'current_average_x', 'required_average_x']) },
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <span class="title">Bonus Opening</span>
    <line-divider />
    <div class="progress-bar">
      <div class="progress-bar-fill" :style="{ width: bonus_progress + '%' }"/>
      <span class="progress-bar-info">Bonus: {{ slot_selected }}</span>
      <span class="progress-bar-info">{{ bonus_progress }}%</span>
      <span class="progress-bar-info">Total: {{ bonus_count }}</span>
    </div>
    <line-divider />
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
    <line-divider :hidden="bonus_count < 1"/>
    <table-statistics columns="2">
      <table-statistics-row type="Start" :value="start_cost" />
      <table-statistics-row type="Winnings" :value="amount_won" />
      <table-statistics-row type="AVG X" :value="current_average_x" />
      <table-statistics-row type="REQ X" :value="required_average_x" />
    </table-statistics>
  </div>
</template>

<style scoped lang="sass">
@import src/assets/sass/variables
.bg
  display: flex
  flex-direction: column

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

.wrapper
  width: 100%
  display: block
  flex-direction: column
  align-items: center
  justify-content: center
  margin-bottom: auto
  overflow-y: scroll
  -ms-overflow-style: none
  scrollbar-width: none
.wrapper::-webkit-scrollbar
  display: none

table.bonuslist
  width: 100%
  table-layout: auto
  border-spacing: 0

  th, tr
    color: white
    text-align: start

    td.slot
      max-width: 50vw
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden

.active
  background: $gradient-gold-1
</style>

