$(document).ready(function(){
    $("ul li").hover(function(){
        $(this).css({"color":"white","background-color":"red","cursor": "pointer"})
    },function(){
        $(this).css({"color":"black","background-color":"white","cursor": "pointer"})
    })
});