import Vue from 'vue'
import App from './App0.vue'

import Jsonp from 'jsonp'
let timeOut=function (url) {
    return new Promise((resolve) => {
        Jsonp(url, null, (err, data) => {
            if (err) {
                console.error('err=',err.message);
            } else {
                console.log('data=',data);
                resolve(data);
            }
        })
    });
}

async function asyncPrint(url) {
    const data=await timeOut(url);
    console.log('async=',data)
    return data;
}
Vue.use({
    install(Vue)
    {
        Vue.prototype.getData = function (url,fn) {
            asyncPrint(url).then(data=>{
                fn && fn(data)
            })
        }
    }
})
Vue.config.productionTip = false;

new Vue({
    name:'main0',
  render: h => h(App),
}).$mount('#app')
