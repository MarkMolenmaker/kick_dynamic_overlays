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

    bonus: (state) => {
      return (index) => {
        return state.bonus_list.bonuses[index - 1]
      }
    },
    bonus_count: state => { return state.bonus_list.bonuses.length },
    bonus_progress: state => { return state.bonus_list.bonus_progress_value },

    slot_selected: state => { return state.bonus_list.currentKey },
    is_opening: state => { return state.bonus_list.isRedeeming === 1 },

    start_cost: state => { return state.bonus_list.info_start_cost },
    amount_won: state => { return state.bonus_list.info_amount_won },
    required_average_x: state => { return state.bonus_list.info_required_average },
    current_average_x: state => { return state.bonus_list.info_running_average },

    highest_win_value: state => { return state.bonus_list.highest_payout_value },
    highest_win_slot: state => { return state.bonus_list.highest_payout_name },
    highest_win_betsize: state => { return state.bonus_list.highest_payout_betsize },
    highest_win_index: state => { return state.bonus_list.highest_payout_index },

    highest_multi_value: state => { return state.bonus_list.highest_multi_value },
    highest_multi_slot: state => { return state.bonus_list.highest_multi_name },
    highest_multi_betsize: state => { return state.bonus_list.highest_multi_betsize },
    highest_multi_index: state => { return state.bonus_list.highest_multi_index },

    current_slot: state => { return {
      image: state.current_slot_artwork.image,
      name: state.bonus_list.bonuses[state.bonus_list.currentKey - 1].name,
      bet_size: state.bonus_list.bonuses[state.bonus_list.currentKey - 1].bet_size, // Money
      payout: state.bonus_list.bonuses[state.bonus_list.currentKey - 1].payout, // Money
    }},

    max_character_lengths: state => {
      const obj = {}

      obj.id = state.bonus_list.bonuses.reduce((maxLength, obj) => {
        const currentLength = String(obj.order).length;
        return currentLength > maxLength ? currentLength : maxLength;
      }, 0);
      obj.slot = state.bonus_list.bonuses.reduce((maxLength, obj) => {
        const currentLength = String(obj.name).length;
        return currentLength > maxLength ? currentLength : maxLength;
      }, 0);
      obj.bet_size = state.bonus_list.bonuses.reduce((maxLength, obj) => {
        const currentLength = String(obj.bet_size).length;
        return currentLength > maxLength ? currentLength : maxLength;
      }, 0);
      obj.multi = state.bonus_list.bonuses.reduce((maxLength, obj) => {
        const currentLength = String(obj.multi).length;
        return currentLength > maxLength ? currentLength : maxLength;
      }, 0);
      obj.payout = state.bonus_list.bonuses.reduce((maxLength, obj) => {
        const currentLength = String(obj.payout).length;
        return currentLength > maxLength ? currentLength : maxLength;
      }, 0);

      return obj },

    bonus_list: state => { return state.bonus_list.bonuses },
  },
  mutations: {
  },
  actions: {
    update({ state }) {
      axios.get(import.meta.env.VITE_API_BASE_URL + 'bonus_list')
        .then(response => state.bonus_list = response.data)
      axios.get(import.meta.env.VITE_API_BASE_URL + 'current_slot_artwork')
          .then(response => state.current_slot_artwork = response.data)
    }
  },
  modules: {
  }
})
