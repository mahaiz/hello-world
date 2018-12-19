import Vue from 'vue'
import App from './App0.vue'
import '@babel/polyfill'
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
    const _conn=document.createElement('div');
    _conn.setAttribute('id','app')
    document.getElementsByTagName('body')[0].appendChild(_conn);
    var _vm=new Vue({
            render: h => h(App),
        methods:{
            jsLoadCallBack:function(){
                console.log('加载完成')
            }
        }
        }
    ).$mount('#app');
export {_vm}
