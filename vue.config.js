// vue.config.js
const resolve = require('path').resolve;
// const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 选项...
    outputDir:"dist00",
    baseUrl:process.env.NODE_ENV=="production"?"./":"/test/",

    devServer:{
        host:'test.hexun.com',
        port: 8000,
    },
    /*pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            //chunks: ['chunk-vendors', 'chunk-common','index']
        },
        index0: {
            // page 的入口
            entry: 'src/main0.js',
            // 模板来源
            template: 'public/index0.html',
            // 在 dist/index.html 的输出
            filename: 'index0.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'test',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index0']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: 'src/subpage/main.js'
    },*/
    configureWebpack:config=>{
        config.optimization={
            /*splitChunks: {
                cacheGroups: {
                    /!*vueJs:
                        {
                            name: 'chunk-vue',
                            test: /[\\\/]vue[\\\/]$/,
                            priority: -9,
                            chunks: 'initial',
                            // reuseExistingChunk: true
                        },*!/
                    vendors:
                        {
                            name: 'chunk-vendors',
                            test: /[\\\/]node_modules[\\\/]/,
                            priority: -10,
                            chunks: 'initial'
                        },
                    common:
                    {
                        name: 'chunk-common',
                            minChunks: 2,
                        priority: -20,
                        chunks: 'initial',
                        reuseExistingChunk: true
                    }
                }
            }*/
        }
    },
    filenameHashing:false,
    /*transpileDependencies: [
        // 可以是字符串或正则表达式
        './src/App0.vue',
        /other-dep/
    ]*/
    chainWebpack: config => {
        // console.log('config=',config.output('path'))
        /*config
            .plugin('html')
            .tap(args => {
                // args[0].title = 'test';
                // args[0].caidaoPath='//imgcd.hexun.com';
                console.log('args=',args)
                return args
            })*/
    }
}
// console.log('test:',process.env,'__dirname=',__dirname,"resolve(__dirname, 'dist')=",resolve(__dirname, 'dist'))