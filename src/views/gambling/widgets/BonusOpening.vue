<script>
import { mapGetters } from 'vuex'
import LineDivider from "@/components/LineDivider.vue";
import TableStatistics from "@/components/statistics/TableStatistics.vue";
import TableStatisticsRow from "@/components/statistics/TableStatisticsRow.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: 'ContainerHuntOpening',
  components: {ProgressBar, TableStatisticsRow, TableStatistics, LineDivider},
  computed: { ...mapGetters(['loaded', 'bonus_count', 'bonus_list', 'bonus_progress', 'slot_selected',
      'start_cost', 'amount_won', 'current_average_x', 'required_average_x']) },
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <span class="title">Bonus Opening</span>
    <line-divider />
    <progress-bar :left-text="'Bonus: ' + slot_selected" :middle-text="bonus_progress + '%'"
                  :progress="bonus_progress" :right-text="'Total: ' + bonus_count" />
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

