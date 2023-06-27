<script>
import { mapGetters } from 'vuex'
import TableStatistics from "@/components/statistics/TableStatistics.vue";
import LineDivider from "@/components/LineDivider.vue";
import TableStatisticsRow from "@/components/statistics/TableStatisticsRow.vue";
import BonusList from "@/components/BonusList.vue";

export default {
  name: 'ContainerBonuslistAndStatistics',
  components: {BonusList, TableStatisticsRow, LineDivider, TableStatistics},
  computed: { ...mapGetters(['loaded', 'bonus_count', 'bonus_list',
    'start_cost', 'current_average_x', 'required_average_x', 'amount_won']) }
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <bonus-list :hidden="bonus_count < 1"/>
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
.bg
  display: flex
  flex-direction: column
</style>

