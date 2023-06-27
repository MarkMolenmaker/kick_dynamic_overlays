<script>
import { mapGetters } from 'vuex'
import LineDivider from "@/components/LineDivider.vue";
import TableStatistics from "@/components/statistics/TableStatistics.vue";
import TableStatisticsRow from "@/components/statistics/TableStatisticsRow.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import BonusList from "@/components/BonusList.vue";

export default {
  name: 'ContainerHuntOpening',
  components: {BonusList, ProgressBar, TableStatisticsRow, TableStatistics, LineDivider},
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
    <bonus-list show-active show-payout />
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
.bg
  display: flex
  flex-direction: column
</style>

