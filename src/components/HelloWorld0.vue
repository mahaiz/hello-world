<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3 v-on:click="greet">goto index.html</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <template v-for="(value,key) in slotDD">
      <slot :t0="key" :t1="value">{{key}}:{{value}}</slot>
    </template>

  </div>
</template>

<script>
    /*const httpToHttps=window.httpToHttps||{editHost:(_url)=>{
        console.log('_url=',_url,httpToHttps)
        return _url
        }};*/
    export default {
        name: 'HelloWorld',
        created:function(){
        },
        props: {
            msg: String,
            slotDD:Object,
            httpToHttps:Object
        },
        methods: {
            greet: function (event) {
                console.log('event=',event)
                console.log('httpToHttps=',this.httpToHttps,window.httpToHttps)
                this.getData(this.httpToHttps.editHost('http://apilesson.hexun.com/comment/203539/0/1/10'),function (_data) {
                    console.log('_data=',_data)
                    // window.location.href='./index.html';
                });
            }
        }
        /* methods:{
           testClick:function(event){
               // console.log(this.loginAjax)
               /!*this.axios.get('http://apilesson.hexun.com/comment/203539/0/1/10').then((response) => {
                   // console.log(response.data)
               })*!/
           }
         },*/
        /*methods: {
            testClick: function () {
                this.a++
            }
        }*/
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
