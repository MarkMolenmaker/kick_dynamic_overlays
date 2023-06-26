<script>
import { mapGetters } from 'vuex'
import LineDivider from '@/components/LineDivider.vue'
import TableStatistics from '@/components/statistics/TableStatistics.vue'
import TableStatisticsRow from '@/components/statistics/TableStatisticsRow.vue'

export default {
  name: 'ContainerHuntOpeningCurrent',
  components: { TableStatisticsRow, TableStatistics, LineDivider },
  computed: { ...mapGetters(['loaded', 'current_slot_artwork']) },
}
</script>
<template>
  <div class="bg bg-blue tp-1 bt-1" v-if="loaded">
    <span class="title">Chili Heat</span>
    <line-divider />
    <table-statistics columns="2">
      <table-statistics-row type="Betsize" value="$ 0.10" />
      <table-statistics-row type="Payout" value="$ 100.00" />
    </table-statistics>
    <line-divider />
    <img :src="current_slot_artwork" alt="Artwork">
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

