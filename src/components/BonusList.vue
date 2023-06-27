<script>
import {mapGetters} from "vuex";

export default{
  name: 'BonusList',
  props: {
    showActive: { type: Boolean, default: false },
    showPayout: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters(['bonus_count', 'bonus']),
    gridTemplateColumns: function () {
      return this.showPayout ? '40px 1fr 70px 70px' : '40px 1fr 70px'
    }
  }
}
</script>

<template>
    <table class="bonus-table">
      <tr class="bonus" :style="{ gridTemplateColumns: this.gridTemplateColumns }">
        <th>#</th><th class="slot">Slot</th><th>Bet</th><th v-if="this.showPayout">Payout</th>
      </tr>
      <tbody class="wrapper">
        <tr class="bonus" :class="{active: bonus(index).active && this.showActive}"
            :style="{ gridTemplateColumns: this.gridTemplateColumns }"
            v-for="index in bonus_count" :key="bonus(index).id">
          <td>{{ bonus(index).order }}</td>
          <td class="slot">{{ bonus(index).name }}</td>
          <td>{{ bonus(index).bet_size }}</td>
          <td v-if="this.showPayout">{{ bonus(index).payout }}</td>
        </tr>
      </tbody>
    </table>
</template>

<style scoped lang="sass">
@import src/assets/sass/variables

table.bonus-table
  width: 100%
  display: contents
  border-spacing: 0
  margin-bottom: auto

  tbody.wrapper
    width: 100%
    height: 100%
    display: block
    overflow-y: scroll

    -ms-overflow-style: none
    scrollbar-width: none
  tbody.wrapper::-webkit-scrollbar
    display: none

  tr
    display: grid
    width: 100%

    th, td
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