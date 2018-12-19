<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" v-bind:slotDD="slotData">
      <p slot-scope="slotProps"><span v-if="slotProps.t0=='m1'">^_^ </span>{{slotProps.t1}}+{{slotProps.t0}}</p>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
    data(){
      return{
          slotData: {
              m1: 'ma1',
              m2: 'ma2',
              m3: 'ma33'
          }
      }
    },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
