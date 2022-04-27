$(document).ready(function(){
    $("article:first").show().siblings().hide();

    $("li").on("click",function(){
    	let i = $(this).index();

    	$("article").eq(i).show(300).siblings().hide(300);
    	$(this).addClass("active").siblings().removeClass("active")

    })
})