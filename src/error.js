import Vue from 'vue'

Vue.config.errorHandler = e => {
  // this.$store.commit('pop', { msg: e.message, color: 'warning' })
  console.log('에러 발생 :: ' + e.message)
}
