<script>
export default {
  name: 'ContainerBonuslistAndStatistics',
  data () {
    return {
      bonus_list: [],
      start_cost: '',
      average_current_multi: '',
      average_required_multi: '',
      bonus_count: '',
    }
  },
  computed: {
    _start_cost () {
      if (this.start_cost === '' || this.start_cost === '$ 0') return '-'
      return `${this.start_cost}`
    },
    _average_current_multi () {
      const value = this.average_current_multi.split('.')[0]
      if (value === '' || value === '0') return '-'
      return `${value} X`
    },
    _average_required_multi () {
      const value = this.average_required_multi.split('.')[0]
      if (value === '' || value === '0') return '-'
      return `${value} X`
    },
    _bonus_count () {
      return `${this.bonus_count}`
    },
  },
  mounted() {
    /* Auto Update values */
    this.fetchValues()
    setInterval(() => {
      this.fetchValues()
    }, 5000)

    /* Auto Scroll through bonuslist */
    setInterval(() => {
      const wrapper = this.$refs.wrapper
      const bonuslist = this.$refs.bonuslist

      const rows = Math.floor(wrapper.clientHeight / (bonuslist.clientHeight / bonuslist.childNodes.length))
      const scrollOffset = (bonuslist.clientHeight / (this.bonus_list.length + 1)) * rows

      wrapper.scrollBy({
        top: scrollOffset, behavior: 'smooth'
      })

      // If reached bottom, scroll to top
      if (wrapper.scrollTop >= wrapper.scrollHeight - wrapper.clientHeight) {
        wrapper.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 3000)

  },
  methods: {
    fetchValues() {
      const API_URL = 'http://127.0.0.1:8000/statistic/'
      fetch(API_URL + 'bonus_list')
        .then(response => response.json())
        .then(json => {
          this.bonus_list = json.value
        })
      fetch(API_URL + 'start_cost')
        .then(response => response.json())
        .then(json => {
          this.start_cost = json.value
        })
      fetch(API_URL + 'average_current_multi')
          .then(response => response.json())
          .then(json => {
            this.average_current_multi = json.value
          })
      fetch(API_URL + 'average_required_multi')
          .then(response => response.json())
          .then(json => {
            this.average_required_multi = json.value
          })
      fetch(API_URL + 'bonus_count')
          .then(response => response.json())
          .then(json => {
            this.bonus_count = json.value
          })
    },
    htmlDecode(input){
      const e = document.createElement('textarea');
      e.innerHTML = input;
      // handle case of empty input
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }
  }
}
</script>

<template>
  <div class="bg bg-blue tp-1 bt-1">
    <div class="wrapper" ref="wrapper">
      <table class="bonuslist" v-if="bonus_list.length > 0" ref="bonuslist">
        <tr class="bonus">
          <th>#</th>
          <th class="slot">Slot</th>
          <th>Bet</th>
        </tr>
        <tr class="bonus" v-for="bonus in this.bonus_list" :key="bonus.id">
          <td>{{ bonus.index }}</td>
          <td class="slot">{{ htmlDecode(bonus.slot) }}</td>
          <td>{{ bonus.betsize }}</td>
        </tr>
      </table>
    </div>
    <div class="divider" v-if="bonus_list.length > 0"/>
    <div class="statistics-container">
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Start</span>
          <span class="value">{{ this._start_cost }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">AVG X</span>
          <span class="value">{{ this._average_current_multi }}</span>
        </div>
      </div>
      <div class="statistics-section">
        <div class="statistics-row">
          <span class="type">Bonus Count</span>
          <span class="value">{{ this._bonus_count }}</span>
        </div>
        <div class="statistics-row">
          <span class="type">REQ X</span>
          <span class="value">{{ this._average_required_multi }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "src/assets/sass/variables"

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
  scroll-behavior: smooth
  scroll-snap-type: x mandatory
  -ms-overflow-style: none
  scrollbar-width: none
.wrapper::-webkit-scrollbar
  display: none

table.bonuslist
  width: 100%
  font-family: BigNoodleTitling, sans-serif
  font-size: 22px
  table-layout: auto

  th, tr
    color: white
    text-align: start

    td.slot
      max-width: 50vw
      text-wrap: nowrap
      text-overflow: ellipsis
      overflow: hidden

.divider
  width: 100%
  min-height: 5px
  height: 5px
  background: $gradient-gold-1

.statistics-container
  width: calc(100% - 10px)
  display: flex
  gap: 20px
  flex-direction: row

.statistics-section
  display: flex
  width: 100%
  flex-direction: column

.statistics-row
  display: flex
  width: 100%
  flex-direction: row
  justify-content: space-between
  font-family: BigNoodleTitling, sans-serif
  font-size: 30px
  span.type
    color: white
  span.value
    color: #2e97ff
</style>

