// 使用ES6的导入语法,导入jQuery
import $ from 'jquery'

// 导入样式
import "./css/index.css"

import "./css/index.less"

$(function(){
    $("li:odd").css("background-color","red")
    $("li:even").css("background-color","gray")
})
