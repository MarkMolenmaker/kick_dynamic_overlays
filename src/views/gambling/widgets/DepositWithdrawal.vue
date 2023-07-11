<script>
import { mapGetters } from 'vuex'
import TableStatistics from '@/components/statistics/TableStatistics.vue'
import TableStatisticsRow from '@/components/statistics/TableStatisticsRow.vue'

export default {
  name: 'DepositWithdrawal',
  components: { TableStatisticsRow, TableStatistics },
  computed: { ...mapGetters(['loaded', 'current_slot']) },
}
</script>
<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <table-statistics columns="1">
      <table-statistics-row large-font type="Deposit: " value="" />
      <table-statistics-row large-font type="Withdrawal: " value="" />
    </table-statistics>
  </div>
</template>

<style scoped lang="sass">
.bg
  display: flex
  flex-direction: column
  height: auto
  width: fit-content
  padding-right: 50px
  .table-statistics-row
    column-gap: 50px
</style>

