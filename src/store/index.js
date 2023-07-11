import { createStore } from 'vuex'
import axios from 'axios'

const money = (value) => {
  if (value === null || value === undefined) return '-'
  if (value === '' || value === '0' || value === '0.00' || value === '$' || value === 0
      || value === '$ 0' || value === '$ 0.00') return '-'
  return value.length > 7 ? value.split('.')[0] : value
}

const multi = (value) => {
  if (value !== null && value !== undefined) value = value.split('.')[0]
  value = value.replaceAll('x', '').trim()
  return value !== null && value !== undefined
      && value !== '' && value !== '0' && value !== '0.00'
      ? value + ' X' : '-'
}

export default createStore({
  state: {
    bonus_list: null,
    current_slot_artwork: null,
  },
  getters: {
    loaded: state => { return state.bonus_list != null &&
      state.current_slot_artwork != null },

    bonus: (state) => {
      return (index) => {
        const bonus = state.bonus_list.bonuses[index - 1]

        bonus.multi = '-'
        if (bonus.payout !== null && bonus.bet_size !== null) {
          const payout = Number(bonus.payout.substring(2, bonus.payout.length))
          const bet_size = Number(bonus.bet_size.substring(2, bonus.bet_size.length))
          bonus.multi = multi((payout / bet_size).toFixed(2))
        }

        bonus.bet_size = money(bonus.bet_size)
        bonus.payout = money(bonus.payout)
        return bonus
      }
    },
    bonus_count: state => { return state.bonus_list.bonuses.length },
    bonus_progress: state => { return Math.round(state.bonus_list.currentKey
      / state.bonus_list.bonuses.length * 100) },

    slot_selected: state => { return state.bonus_list.currentKey },
    is_opening: state => { return state.bonus_list.isRedeeming === 1 },

    start_cost: state => { return money(state.bonus_list.info_start_cost) },
    amount_won: state => { return money(state.bonus_list.info_amount_won) },
    required_average_x: state => { return multi(state.bonus_list.info_required_average) },
    current_average_x: state => { return multi(state.bonus_list.info_running_average) },

    highest_win_value: state => { return money(state.bonus_list.highest_payout_value) },
    highest_win_slot: state => { return state.bonus_list.highest_payout_name },
    highest_win_betsize: state => { return money(state.bonus_list.highest_payout_betsize) },
    highest_win_index: state => { return state.bonus_list.highest_payout_index },

    highest_multi_value: state => { return multi(state.bonus_list.highest_multi_value) },
    highest_multi_slot: state => { return state.bonus_list.highest_multi_name },
    highest_multi_betsize: state => { return money(state.bonus_list.highest_multi_betsize) },
    highest_multi_index: state => { return state.bonus_list.highest_multi_index },

    current_slot: state => { return {
      image: state.current_slot_artwork.image,
      name: state.bonus_list.bonuses[state.bonus_list.currentKey - 1].name,
      bet_size: money(state.bonus_list.bonuses[state.bonus_list.currentKey - 1].bet_size),
      payout: money(state.bonus_list.bonuses[state.bonus_list.currentKey - 1].payout),
    }},
  },
  mutations: {
  },
  actions: {
    update({ state }) {
      axios.get(process.env.VUE_APP_BASE_URL + 'bonus_list')
        .then(response => state.bonus_list = response.data)
      axios.get(process.env.VUE_APP_BASE_URL + 'current_slot_artwork')
          .then(response => state.current_slot_artwork = response.data)
    }
  },
  modules: {
  }
})
