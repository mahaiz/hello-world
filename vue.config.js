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
    /*configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Custom template using Handlebars'
            })
        ]
    }*/
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'test';
                console.log('args=',args)
                return args
            })
    }
}
console.log('test:',process.env,'__dirname=',__dirname,"resolve(__dirname, 'dist')=",resolve(__dirname, 'dist'))