// JavaScript Document

$(function(){
	/* 메인탭 */
	$(".tab li").click(function(){
		$(this).siblings("li").removeClass("on");
		$(this).addClass("on");
	});

	/* 절차 hide none */
	$(".proTab01").click(function(){
		$(".proBox01").css("display","block");
		$(".proBox02").css("display","none");
	});

	$(".proTab02").click(function(){
		$(".proBox02").css("display","block");
		$(".proBox01").css("display","none");
	});

});
