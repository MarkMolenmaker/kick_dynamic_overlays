<script>
import {mapGetters} from "vuex";

export default{
  name: 'BonusList',
  data () { return { scrollInterval: null } },
  props: {
    showActive: { type: Boolean, default: false },
    showPayout: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters(['bonus_count', 'bonus']),
    gridTemplateColumns: function () {
      return this.showPayout ? '40px 1fr 70px 70px' : '40px 1fr 70px'
    }
  },
  // watch: {
  //   bonus_count: function () {
  //     location.reload()
  //   }
  // },
  mounted () {
    const wrapper = this.$refs.wrapper
    this.scrollInterval = setInterval(() => {
      // If the wrapper is the same size as the content, we don't need to scroll
      if (wrapper.scrollHeight === wrapper.clientHeight) return

      // Scroll down 1px
      wrapper.scrollBy({ top: 1, behavior: 'auto' })

      // If we've reached the bottom, move the first child to the end, so we can keep scrolling
      if (Math.floor(wrapper.scrollHeight - wrapper.scrollTop) <= wrapper.clientHeight) {
        const fragment = document.createDocumentFragment()
        fragment.appendChild(wrapper.firstElementChild)
        wrapper.appendChild(fragment)
      }
    }, 50)
  },
  beforeUnmount() { clearInterval(this.scrollInterval) }
}
</script>

<template>
    <table class="bonus-table">
      <tr class="bonus" :style="{ gridTemplateColumns: this.gridTemplateColumns }">
        <th>#</th><th class="slot">Slot</th><th>Bet</th><th v-if="this.showPayout">Payout</th>
      </tr>
      <tbody class="wrapper" ref="wrapper">
        <tr class="bonus" :class="{active: bonus(index).active && this.showActive}"
            :style="{ gridTemplateColumns: this.gridTemplateColumns }"
            v-for="index in bonus_count" :key="bonus(index).id">
          <td>{{ index }}</td>
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