<template>
  <div id="app">
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
