import Vue from 'vue'
import App from './App.vue'
/*import Jsonp from 'jsonp'
Vue.use({
    install(Vue)
    {
        Vue.prototype.getData = function (url,fn) {
            // console.log('httpToHttps:',httpToHttps);
            // console.log('httpToHttps.editHost(url)=',window.httpToHttps.editHost(url))
            Jsonp(url, null, (err, data) => {
                if (err) {
                    console.error('err=',err.message);
                } else {
                    console.log('data=',data);
                }
            })
        }
    }
})*/
Vue.config.productionTip = false;
new Vue({
  render: h => h(App),
}).$mount('#test0')
