import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editable: true,
    fireUser: null,
    sb: {
      act: false,
      msg: '',
      color: 'error'
    }
  },
  mutations: {
    setEdit (state, edit) {
      state.editable = edit
    },
    setFireUser (state, fu) {
      state.fireUser = fu
    },
    pop (state, d) {
      state.sb.msg = d.msg
      state.sb.color = d.color
      state.sb.act = false
      if (d.act === undefined) state.sb.act = true
    }
  },
  actions: {
  },
  modules: {
  }
})
