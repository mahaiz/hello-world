import Vue from 'vue'
import App from './App0.vue'
// import "@babel/polyfill"
// import "core-js/modules/es6.promise";
// import "core-js/modules/es6.symbol";
// import "core-js/modules/es6.map";
// import "core-js/modules/es6.object.is";
import Jsonp from 'jsonp';
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
    console.log('发起请求:',url,data)
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
/*Vue.use({
    install(Vue) {
        Vue.prototype.getData = function (url, fn) {
            Jsonp(url, null, (err, data) => {
                if (err) {
                    console.error('err=',err.message);
                } else {
                    console.log('data=',data);
                    fn?fn(data):'';
                }
            })
        }
    }
});*/
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
