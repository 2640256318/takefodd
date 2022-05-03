<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'
import {mapActions} from 'vuex'
export default {
  name: 'App',
  created() {
    //方法一
    // this.$store.dispatch('getAddress')
    this.getAddress()
  },
  components: {
    Footer
  },
  methods:{
    //方法二
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  //解决因为chrome浏览器因为版本原因的报错
  touch-action: none;
}
</style>
