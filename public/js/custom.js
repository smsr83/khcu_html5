// JavaScript Document

$(function(){

	var wHeight=$(window).height();

	/* 나눔고딕 비동기 적용 */
	WebFontConfig = {
		custom: {
			families: ['Nanum Gothic'],
			urls: ['http://fonts.googleapis.com/earlyaccess/nanumgothic.css']
		}
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		  '://ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();

	/* GNB */
	$(".gnb li").click(function(){
		$("#twoArea").animate({"top":"110px"}, 500, "easeInOutExpo");


		var gnbNum = $(this).index();
		if (gnbNum != 3) {
			$(".twoDepth > li").css("display","none");
			$(".twoDepth > li").eq(gnbNum).css("display","block");
		}
	});
	$(".gnb_close").click(function(){
		$("#twoArea").animate({"top":"-1000px"}, 500, "easeInOutExpo");
	});

	/* 퀵메뉴 */
	var summaries = $("#quickMenu");
	summaries.each(function(i) {
		var summary = $(summaries[i]);
		var next = summaries[i + 1];

		summary.scrollToFixed({
			marginTop: 10,
			limit: function() {
				var limit = 0;
				if (next) {
					limit = $(next).offset().top - $(this).outerHeight(true) - 10;
				} else {
					limit = $("#footer").offset().top - $(this).outerHeight(true) - 50;
				}
				return limit;
			},
			zIndex: 1000
		});
	});

	/* footer select */
	$(".selectBox > p").click(function(){
		$(this).siblings("ul").toggle();
	});
	$("#container, .foot_bottom").click(function(){
		$(".selectBox ul").css("display","none");
	});

	/********************************** MOBILE **********************************/

	/* MENU */
	$(".open_menu").click(function(){
		bodyLock();
		$("#menuArea").animate({"left":"0%"}, 700, "easeInOutExpo");
	});
	$(".close_menu").click(function(){
		bodyUnLock();
		$("#menuArea").animate({"left":"-100%"}, 700, "easeInOutExpo");
	});

	$(".oneDep > li > p").click(function(){ // 원뎁스 클릭시
		$(".twoDep").css("display","none");
		$(this).siblings(".twoDep").css("display","block");
		$(".oneDep > li").removeClass("on");
		$(this).parents("li").addClass("on");

	});
	$(".twoDep > li > p").click(function(){ // 투뎁스 클릭시
		$(".threeDep").css("display","none");
		$(this).siblings(".threeDep").css("display","block");
	});

	/* LOGIN */
	$(".open_login").click(function(){
		bodyLock();
		$("#loginArea").animate({"right":"0%"}, 700, "easeInOutExpo");
	});
	$(".close_login").click(function(){
		bodyUnLock();
		$("#loginArea").animate({"right":"-100%"}, 700, "easeInOutExpo");
	});

	function bodyLock () { // body scroll Y 잠금
		$("body").css("height",wHeight);
		$("body").css("overflow-y","hidden");
	}

	function bodyUnLock () { // body scroll Y 잠금해제
		$("body").css("height","auto");
		$("body").css("overflow-y","scroll");
	}
});
