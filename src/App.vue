<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-app-bar-nav-icon @click="drawer = !drawer" />
        <site-title :title="site.title" />
      <v-spacer/>
      <site-sign></site-sign>
    </v-app-bar>
      <v-navigation-drawer app v-model="drawer" width="400">
      <site-menu :items="site.menu"></site-menu>
      </v-navigation-drawer>
    <v-main>

    <router-view/>

    </v-main>

    <site-footer :footer="site.footer"></site-footer>

    <v-snackbar
      v-model="$store.state.sb.act"
      :color="$store.state.sb.color"
    >
      {{ $store.state.sb.msg }}
      <v-btn text @click="$store.commit('pop', { act: false })">닫기</v-btn>
      </v-snackbar>

   </v-app>

</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'
import SiteSign from '@/views/site/sign'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu, SiteSign },
  name: 'App',
  data () {
    return {
      drawer: false,
      site: {
        menu: [
          {
            title: 'home',
            icon: 'mdi-home',
            subItems: [
              {
                title: 'Dashboard',
                to: '/'
              },
              {
                title: 'About',
                to: '/about'
              }
            ]
          },
          {
            title: 'about',
            active: true,
            icon: 'mdi-account',
            subItems: [
              {
                title: 'xxx',
                to: '/xxx',
                icon: 'mdi-calendar-range'
              }
            ]
          }
        ],
        title: '나의 타이틀입니다',
        footer: '푸터입니다'
      }
    }
  },
  created () {
    this.subscribe()
  },
  mounted () {
    console.log(this.$firebase)
  },
  methods: {
    subscribe () {
      this.$firebase.database().ref().child('site').on('value', (sn) => {
        const v = sn.val()
        if (!v) {
          this.$firebase.database().ref().child('site').set(this.site)
          return
        }
        this.site = v

        console.log('메뉴', this.site)
        // console.log(sn.val())
      }, (e) => {
        console.log(e.message)
      })
    }
    // ,
    // save () {
    //   console.log('save000')
    //   this.$firebase.database().ref().child('abcd').set({
    //     title: 'abcd', text: 'tttttt'
    //   })
    // },
    // read () {
    //   this.$firebase.database().ref().child('abcd').on('value', (sn) => {
    //     console.log(sn)
    //     console.log(sn.val())
    //   })
    // },
    // async readOne () {
    //   const sn = await this.$firebase.database().ref().child('abcd').once('value')
    //   console.log(sn.val())
    // }
  }

}
</script>
