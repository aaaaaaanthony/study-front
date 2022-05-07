// 使用ES6的导入语法,导入jQuery
import $ from 'jquery'


$(function(){
    $("li:odd").css("background-color","red")
    $("li:even").css("background-color","pink")
})
