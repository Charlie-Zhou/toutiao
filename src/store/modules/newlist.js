import axios from 'axios'
import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    allData: {}
  },
  mutations: {
    updateList (state, { currentCatagtory, list }) {
      Vue.set(state.allData, currentCatagtory, list)
    }
  },
  actions: {
    async getNewList (context, cataId) {
      const {
        data: {
          data: { results }
        }
      } = await axios.get(
        `http://ttapi.research.itcast.cn/app/v1_1/articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`
      )
      axios
        .get(
          `http://ttapi.research.itcast.cn/app/v1_1/articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`
        )
        .then(res => console.log(res.data))
      context.commit('updateList', { currentCatagtory: cataId, list: results })
    }
  }
}
