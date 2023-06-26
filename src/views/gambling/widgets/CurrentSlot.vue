<script>
import { mapGetters } from 'vuex'
import LineDivider from '@/components/LineDivider.vue'
import TableStatistics from '@/components/statistics/TableStatistics.vue'
import TableStatisticsRow from '@/components/statistics/TableStatisticsRow.vue'

export default {
  name: 'CurrentSlot',
  components: { TableStatisticsRow, TableStatistics, LineDivider },
  computed: { ...mapGetters(['loaded', 'current_slot', 'slot_selected']) },
}
</script>
<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <span class="title">{{ current_slot.name }}</span>
    <line-divider />
    <table-statistics columns="2">
      <table-statistics-row type="Betsize" :value="current_slot.bet_size" />
      <table-statistics-row type="Payout" :value="current_slot.payout" />
    </table-statistics>
    <line-divider />
    <img :src="current_slot.image" alt="Artwork">
  </div>
</template>

<style scoped lang="sass">
.bg
  display: flex
  flex-direction: column
  height: auto
  width: fit-content

img
  max-width: 100%
  max-height: 100%
</style>

