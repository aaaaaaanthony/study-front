
const path = require("path")

const htmlplugin = require("html-webpack-plugin")

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

plugin = new htmlplugin({
    // 指定要服务的页面
    template:"./src/index.html",
    // 复制到哪里去
    filename:"./index.html"
})


module.exports = {
    mode:"development",
    devtool:"eval-source-map",
    plugins:[plugin,new CleanWebpackPlugin()],
    output:{
        path:path.join(__dirname,"./dist")
    },
    devServer:{
        // 自动打开浏览器
        open:true,
        // 端口
        port:10086
    },
    module:{
        // 所有第三方文件模块的匹配规则
        rules:[
            // 文件后缀的匹配规则
            // 处理css
            {test:/\.css$/,use:["style-loader","css-loader"]},
            // 处理less
            {test: /\.less$/, use: ["style-loader", "css-loader", "less-loader",],
            },
        ]
    },
    resolve:{
        alias:{
            "@":path.join(__dirname,"./src/")
        }
    }
}
