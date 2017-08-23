<template>
  <div id="app">
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from './components/common/footer';

export default {
  name: 'app',
  data() {
    return {}
  },
  components: {
    vFooter
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
