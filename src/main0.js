import Vue from 'vue'
import App from './App0.vue'

import Jsonp from 'jsonp'
Vue.use({
    install(Vue)
    {
        Vue.prototype.getData = function (url,fn) {
            Jsonp(url, null, (err, data) => {
                if (err) {
                    console.error('err=',err.message);
                } else {
                    console.log('data=',data);
                    fn && fn(data);
                }
            })
        }
    }
})
Vue.config.productionTip = false;

new Vue({
    name:'main0',
  render: h => h(App),
}).$mount('#app')
