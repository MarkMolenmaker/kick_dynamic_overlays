<script>
import {mapGetters} from "vuex";

export default{
  name: 'BonusList',
  data () {
    return {
      scrollInterval: null,
      presentationList: null,
      hasScrolled: false
    }
  },
  props: {
    showActive: { type: Boolean, default: false },
    showPayout: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters(['bonus_count', 'bonus', 'is_opening', 'slot_selected', 'max_character_lengths', 'bonus_list']),

    gridTemplateColumns: function () {
      if (this.showPayout)
        return `${this.max_character_lengths.id * 20}px 1fr ${this.max_character_lengths.bet_size * 10}px ${this.max_character_lengths.multi * 9}px ${this.max_character_lengths.payout * 9}px`
      else
        return `${this.max_character_lengths.id * 20}px 1fr ${this.max_character_lengths.bet_size * 10}px`
    }
  },
  mounted () {
    // The presentation list, is the bonus list, but with its index added as a property
    this.presentationList = this.bonus_list.map((bonus, index) => {
      bonus.index = index
      return bonus
    })

    // Auto scroll loop
    const wrapper = this.$refs.wrapper
    this.scrollInterval = setInterval(() => {
      if (wrapper.scrollHeight === wrapper.clientHeight) return       // If the wrapper is the same size as the content, we don't need to scroll
      if (this.showActive) {        // Check if we need show the active bonus
        const visibleRows = Math.floor(wrapper.clientHeight / wrapper.firstElementChild.clientHeight)
        const centerIndex = Math.floor(visibleRows / 2)         // Center index = the index of the bonus that should be in the center of the wrapper
        const scrollPosition = wrapper.firstElementChild.clientHeight * (this.slot_selected - 1 - centerIndex)          // Calculate the new scroll position

        if (!this.hasScrolled) {
          wrapper.scrollTo({top: scrollPosition, behavior: 'smooth'})
          this.hasScrolled = true
        }
      } else {
        wrapper.scrollBy({top: 1, behavior: 'auto'})        // Scroll down 1px
        if (Math.floor(wrapper.scrollHeight - wrapper.scrollTop) <= wrapper.clientHeight + 1) {
          this.presentationList.push(this.presentationList.shift())   // Move the first bonus to the end of the list
        }
      }
    }, 50)
  },
  beforeUnmount() { clearInterval(this.scrollInterval) },
  watch: {
    bonus_list: function (newList, oldList) {
      if (newList.length === 0) return  // If the new list is empty, don't do anything

      const newListIds = newList.map(bonus => bonus.id)
      const oldListIds = oldList.map(bonus => bonus.id)
      if (newListIds.join('') === oldListIds.join('')) return  // If the new list is the same as the old list, don't do anything

      // Overwrite the presentation list with the new list
      this.presentationList = newList.map((bonus, index) => {
        bonus.index = index
        return bonus
      })
      this.hasScrolled = false
    },
    slot_selected: function (newSlot, oldSlot) {
      if (newSlot === oldSlot) return
      this.hasScrolled = false
    }
  }
}
</script>

<template>
    <table class="bonus-table">
      <tr class="bonus" :style="{ gridTemplateColumns: this.gridTemplateColumns }">
        <th>#</th><th class="slot">Slot</th><th>Bet</th><th v-if="this.showPayout">Multi</th><th v-if="this.showPayout">Payout</th>
      </tr>
      <tbody class="wrapper" ref="wrapper">
        <tr class="bonus" :class="{active: this.slot_selected - 1 === bonus.index && this.showActive}"
            :style="{ gridTemplateColumns: this.gridTemplateColumns }"
            v-for="(bonus) in this.presentationList" :key="bonus.id">
          <td>{{ bonus.index + 1 }}</td>
          <td class="slot">
            <i v-if="bonus.prefix">[{{bonus.prefix}}]</i>
            {{ bonus.name }}
            <i v-if="bonus.suffix">[{{bonus.suffix}}]</i></td>
          <td>{{ bonus.bet_size }}</td>
          <td v-if="this.showPayout">{{ bonus.multiplier ? bonus.multiplier : '-' }}</td>
          <td v-if="this.showPayout">{{ bonus.payout ? bonus.payout : '-' }}</td>
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
