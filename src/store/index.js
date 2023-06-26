import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    bonus_list: null,
    current_slot_artwork: null,
  },
  getters: {
    loaded: state => { return state.bonus_list != null &&
      state.current_slot_artwork != null },

    bonus_list: state => { return state.bonus_list.bonuses },
    bonus_count: state => { return state.bonus_list.bonuses.length },
    bonus_progress: state => { return Math.round(state.bonus_list.currentKey
      / state.bonus_list.bonuses.length * 100) },

    slot_selected: state => { return state.bonus_list.currentKey },

    start_cost: state => {
      return state.bonus_list.info_start_cost !== '$ 0' ?
        state.bonus_list.info_start_cost : '-'
    },
    amount_won: state => {
      return state.bonus_list.info_amount_won !== '$ 0' ?
        state.bonus_list.info_amount_won : '-'
    },
    req_avg_money: state => {
      return state.bonus_list.info_required_average_number !== '0' ?
        state.bonus_list.info_required_average_number : '-'
    },
    req_avg_multi: state => {
      const value = state.bonus_list.info_required_average.split('.')[0]
      if (value === '0') return '-'
      return value + ' X'
    },
    run_avg_money: state => {
      return state.bonus_list.infobox.running_avg !== '0' ?
        state.bonus_list.infobox.running_avg : '-'
    },
    run_avg_multi: state => {
      const value = state.bonus_list.info_running_average.split('.')[0]
      if (value === '0') return '-'
      return value + ' X'
    },

    highest_win_value: state => { return state.bonus_list.highest_payout_value },
    highest_win_slot: state => { return state.bonus_list.highest_payout_name },
    highest_win_betsize: state => { return state.bonus_list.highest_payout_betsize },
    highest_win_index: state => { return state.bonus_list.highest_payout_index },

    highest_multi_value: state => { return state.bonus_list.highest_multi_value },
    highest_multi_slot: state => { return state.bonus_list.highest_multi_name },
    highest_multi_betsize: state => { return state.bonus_list.highest_multi_betsize },
    highest_multi_index: state => { return state.bonus_list.highest_multi_index },

    current_slot_artwork: state => { return state.current_slot_artwork.image },
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
