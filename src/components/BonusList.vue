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
    ...mapGetters(['bonus_count', 'bonus', 'is_opening', 'slot_selected', 'max_character_lengths']),

    gridTemplateColumns: function () {
      if (this.showPayout)
        return `${this.max_character_lengths.id * 20}px 1fr ${this.max_character_lengths.bet_size * 10}px ${this.max_character_lengths.multi * 9}px ${this.max_character_lengths.payout * 9}px`
      else
        return `${this.max_character_lengths.id * 20}px 1fr ${this.max_character_lengths.bet_size * 10}px`
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

      // // Scroll to selected row in the middle, when opening
      // if (this.is_opening) {
      //   if (this.$route.path === '/gambling/widgets/bonus_opening') {
      //     const index = this.slot_selected
      //     const rows = wrapper.children.length
      //     const rowHeight = wrapper.scrollHeight / rows
      //
      //     // Get the amount of rows that fit in the visible area
      //     const visibleRows = Math.floor(wrapper.clientHeight / rowHeight)
      //     const offsetRows = Math.floor(visibleRows / 2)
      //
      //     const position = rowHeight * (index - 1) - offsetRows * rowHeight - 1
      //
      //     // If the selected bonus is already on top, we don't need to scroll
      //     if (wrapper.scrollTop === position) return
      //     wrapper.scrollTo({top: position, behavior: 'smooth'})
      //     return
      //   }
      // }


      // Scroll down 1px
      wrapper.scrollBy({top: 1, behavior: 'auto'})

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
        <th>#</th><th class="slot">Slot</th><th>Bet</th><th v-if="this.showPayout">Multi</th><th v-if="this.showPayout">Payout</th>
      </tr>
      <tbody class="wrapper" ref="wrapper">
        <tr class="bonus" :class="{active: bonus(index).active && this.showActive}"
            :style="{ gridTemplateColumns: this.gridTemplateColumns }"
            v-for="index in bonus_count" :key="bonus(index).id">
          <td>{{ index }}</td>
          <td class="slot">
            <i v-if="bonus(index).prefix">[{{bonus(index).prefix}}]</i>
            {{ bonus(index).name }}
            <i v-if="bonus(index).suffix">[{{bonus(index).suffix}}]</i></td>
          <td>{{ bonus(index).bet_size }}</td>
          <td v-if="this.showPayout">{{ bonus(index).multiplier ? bonus(index).multiplier : '-' }}</td>
          <td v-if="this.showPayout">{{ bonus(index).payout ? bonus(index).payout : '-' }}</td>
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
      i
        background: $text-gradient-gold-1
        -webkit-background-clip: text
        text-shadow: none
        -webkit-text-fill-color: transparent
        padding-right: 3px
        display: inline-flex

.active
  background: $gradient-gold-1
table.bonus-table tr.active td.slot i
  background: transparent
  -webkit-background-clip: initial
  text-shadow: #000 1px 2px 2px
  -webkit-text-fill-color: white
  color: white
  padding-right: 3px
</style>
