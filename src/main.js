import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;
new Vue({
    data:function(){
      return {
          jsUrl:'http://imgcd.hexun.com/js/httpToHttps.js',
      }
    },
    methods:{
      loadJsComplete(){
        console.log('window.httpToHttps=',window.httpToHttps);
      }
    },
  render: function(h) {
      console.log('vm=',this.jsUrl)
      let _this=this;
    return h('div', {
        attrs: { id: 'text'},
        on: {
            load: function () {
                console.log('load div text')
                // self.$emit('load-js-finish')
            }
        }
    },[h('script', {
        attrs: { type: 'text/javascript' ,src:_this.jsUrl },
        on: {
            load: function () {
                console.log('load js')
                // self.$emit('load-js-finish')
                _this.loadJsComplete();
            }
        }
    }),h(App)])
  }
}).$mount('#test')
