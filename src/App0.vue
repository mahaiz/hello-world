<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld0 msg="HelloWorld0:Welcome to Your Vue.js App" v-bind:slotDD="slotData" v-if="is0">
      <p slot-scope="slotProps"><span v-if="slotProps.t0=='m1'">^_^ </span>{{slotProps.t1}}+{{slotProps.t0}}</p>
    </HelloWorld0>
    <HelloWorld msg="HelloWorld:Welcome to Your Vue.js App" v-bind:slotDD="slotData" v-else>
      <p slot-scope="slotProps"><span v-if="slotProps.t0=='m1'">^_^ </span>{{slotProps.t1}}+{{slotProps.t0}}</p>
    </HelloWorld>-->
    <component :is="comId" :msg="msg" v-bind:slotDD="slotData">
      <p slot-scope="slotProps"><span v-if="slotProps.t0=='m1'">^_^ </span>{{slotProps.t1}}+{{slotProps.t0}}</p>
    </component >
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import HelloWorld0 from './components/HelloWorld0.vue';
// import Hello from './components/Hello.vue';
export default {
  name: 'app0',
    data(){
      return{
          slotData: {
          },
          is0:false,
          comId:'',
          msg:'HelloWorld:Welcome to Your Vue.js App'
      }
    },
    created(){
      console.log('this.$parent=',this.$parent.$el.id)
        this.is0=this.$parent.$el.id==='app';
        if(this.$parent.$el.id==='app'){
          // this.$set(this.slotData,'m1','哈哈哈')
            this.comId='HelloWorld0'
            this.msg='HelloWorld0:Welcome to Your Vue.js App'
            this.slotData={
                m1: 'test1',
                m2: 'test2',
                m3: 'test3'
            }
        }else{
            this.comId='HelloWorld';
            this.msg='HelloWorld:Welcome to Your Vue.js App';
          this.slotData={
              m1: 'ma1',
              m2: 'ma2',
              m3: 'ma3'
          }
        }
        console.log('this.components=',this)
    },
  components: {
      // Hello,
      HelloWorld: function (resolve) {
          import('./components/HelloWorld.vue').then(function (_d) {
              console.log('_d=', this)
              resolve(_d)
          });
      }, HelloWorld0: () => import('./components/HelloWorld0.vue')/*function(resolve) {
          import('./components/HelloWorld0.vue').then(function (_d) {
              console.log('_d=', this)
              resolve(_d)
          })
      }*/
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
