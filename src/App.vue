<template>
  <div id="app">
    <v-header></v-header>
    <v-content></v-content>
  </div>
</template>

<script>
import vHeader from './components/header.vue'
import vContent from './components/content.vue'
export default {
  components: {
    vHeader,
    vContent
  },
}
</script>
<style lang="less">
 
   html {
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>
