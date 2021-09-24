import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
// import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib'
import Vuetify from 'vuetify'
// import VuetifyToast from 'vuetify-toast-snackbar'
import en from 'vuetify/es5/locale/en'
import ko from 'vuetify/es5/locale/ko'

Vue.use(Vuetify)

// Vue.use(Vuetify, {
//   components: {
//     VSnackbar,
//     VBtn,
//     VIcon
//   }
// })

// Vue.use(VuetifyToast, {
//   x: 'right', // default
//   y: 'bottom', // default
//   color: 'info', // default
//   icon: 'info',
//   iconColor: '', // default
//   classes: [
//     'body-2'
//   ],
//   timeout: 3000, // default
//   dismissable: true, // default
//   multiLine: false, // default
//   vertical: false, // default
//   queueable: false, // default
//   showClose: false, // default
//   closeText: '', // default
//   closeIcon: 'close', // default
//   closeColor: '', // default
//   slot: [], // default
//   shorts: {
//     custom: {
//       color: 'purple'
//     }
//   },
//   property: '$toast' // default
// })

// Vue.use(VuetifyToast, {
//   x: 'right', // default
//   y: 'bottom', // default
//   color: 'info', // default
//   icon: 'mdi-information', // default
//   iconColor: '',
//   classes: [
//     'body-2'
//   ],
//   timeout: 3000, // default
//   dismissable: true, // default
//   multiLine: false, // default
//   vertical: false, // default
//   queueable: false, // default
//   showClose: false, // default
//   closeText: '', // default
//   closeIcon: 'close', // default
//   closeColor: '', // default
//   slot: [], // default
//   shorts: {
//     custom: {
//       color: 'purple'
//     }
//   },
//   property: '$toast' // default
// })

export default new Vuetify({
  lang: {
    locales: { en, ko },
    current: 'ko'
  }
})
