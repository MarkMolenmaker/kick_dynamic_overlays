<script>
import { mapGetters } from 'vuex'
import TableStatistics from "@/components/statistics/TableStatistics.vue";
import LineDivider from "@/components/LineDivider.vue";
import TableStatisticsRow from "@/components/statistics/TableStatisticsRow.vue";

export default {
  name: 'ContainerBonuslistAndStatistics',
  components: {TableStatisticsRow, LineDivider, TableStatistics},
  computed: { ...mapGetters(['loaded', 'bonus_count', 'bonus_list',
    'start_cost', 'current_average_x', 'required_average_x', 'amount_won']) },
  data() { return { lenis: null, scrollFunc: null } },
  mounted() {

  },
  beforeUnmount() {

  }
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <div class="wrapper" ref="wrapper">
      <table class="bonuslist" v-if="bonus_count > 0" ref="bonus_list">
        <tr class="bonus">
          <th>#</th>
          <th class="slot">Slot</th>
          <th>Bet</th>
        </tr>
        <tr class="bonus" v-for="bonus in bonus_list" :key="bonus.id">
          <td>{{ bonus.order }}</td>
          <td class="slot">{{ bonus.name }}</td>
          <td>{{ bonus.bet_size }}</td>
        </tr>
      </table>
    </div>
    <line-divider :hidden="bonus_count < 1"/>
    <table-statistics columns="2">
      <table-statistics-row type="Start" :value="start_cost" />
      <table-statistics-row type="Bonus Count" :value="bonus_count" />
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
  font-size: 22px
  table-layout: auto

  th, tr
    color: white
    text-align: start

    td.slot
      max-width: 50vw
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden

</style>

