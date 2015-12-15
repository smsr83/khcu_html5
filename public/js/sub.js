// JavaScript Document

$(function(){
	var	prizeIndex = 0, // 수상인증 활성화
	    faqIndex = 0, // faq 활성화
		subHeight = $("#subContents").innerHeight(), // 사이드바 높이
		sideHeight = $("#sideArea").height(), // 서브컨텐츠 높이
		wHeight=$(window).height();

	/* 탑버튼 활성화 */
	$(window).on("scroll", function(event){
	  var initPosition = $(this).scrollTop();
	  if(initPosition > 400){
		//스크롤다운
		$("#topBtn").css("display","block");
	  } else {
		//스크롤 업
		$("#topBtn").css("display","none");
	  }
	});

	/* 탑버튼 위치 */
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();

		if( scrollTop >= $(document).height() - $(window).height() - $('#footer').height()) {
			var bottom =  $(document).height() - scrollTop - $(window).height();

			$("#topBtn").css({
				"bottom" :  $("#footer").height() - bottom
			});
		} else {
			$("#topBtn").css({
				"bottom" : "10px"
			});
		}
	});

	/* 탑버튼 클릭이벤트 */
	$("#topBtn").click(function(event){
		event.preventDefault();
		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 700, "easeInOutExpo");
	});

	/* lnb */
	$(".oneDepth").click(function(){
		$("#lnb > ul > li").removeClass("on");
		$("#lnb > ul > li ul").css("display","none");
		$(this).parents("li").addClass("on");
		$(this).siblings("ul").css("display","block");
		$("#lnb > ul > li").next().children().removeClass("bd_none");
		$("#lnb > ul > li.on").next().children().addClass("bd_none");
	});

	$("#lnb > ul > li").eq(m1).addClass("on");
	// $("#lnb > ul > li.on ul").css("display","block");
	$("#lnb > ul > li.on li").eq(m2).addClass("on");
	$("#lnb > ul > li.on").next().children().addClass("bd_none");

	/* tab style01 - FAQ */
	$(".tabStyle01 li").click(function(){
		$(".tabStyle01 li").removeClass("on");
		$(this).addClass("on");

		faqIndex = $(this).index();
		$(".faqList > ul").css("display","none");
		$(".faqList > ul").eq(faqIndex).css("display","block");

		$(".tabList > div").css("display","none");
		$(".tabList > div").eq(faqIndex).css("display","block");
	});

	/* tab style02 - 외부수상인증 */
	$(".tabStyle02 li").click(function(){
		$(".tabStyle02 li").removeClass("on");
		$(this).addClass("on");

		prizeIndex = $(this).index();
		$(".prizeList ul").css("display","none");
		$(".prizeList ul").eq(prizeIndex).css("display","block");
	});

	/* 모바일 tab */
	$(".mobile_tab p").click(function(){
		$(".mobile_tab ul").css("display","block");
	});

	$(".mobile_tab li").click(function(){

		$(".mobile_tab p").html( $(this).html() );
		$(".mobile_tab ul").css("display","none");

		prizeIndex = $(this).index();
		$(".prizeList ul").css("display","none");
		$(".prizeList ul").eq(prizeIndex).css("display","block");
	});

	/* Q&A 점수부여 */
	$(".score ul li").eq(0).click(function(){
		removeScore();
		$(".score ul").addClass("sc1");
	});
	$(".score ul li").eq(1).click(function(){
		removeScore();
		$(".score ul").addClass("sc2");
	});
	$(".score ul li").eq(2).click(function(){
		removeScore();
		$(".score ul").addClass("sc3");
	});
	$(".score ul li").eq(3).click(function(){
		removeScore();
		$(".score ul").addClass("sc4");
	});
	$(".score ul li").eq(4).click(function(){
		removeScore();
		$(".score ul").addClass("sc5");
	});
	function removeScore () {
		$(".score ul").removeClass("sc1");
		$(".score ul").removeClass("sc2");
		$(".score ul").removeClass("sc3");
		$(".score ul").removeClass("sc4");
		$(".score ul").removeClass("sc5");
	}

	/* FAQ toggle */
	$(".faq_q").click(function(){
		$(".faq_a").css("display","none");
		$(this).siblings(".faq_a").css("display","block");
	});

	/* 지원서 작성 toggle */
	$(".toggleType01 > li > p").click(function(){
		$(this).parents("li").toggleClass("on");
		$(this).siblings(".fm_type01, .tb_type04").toggle();
	});

	/* 입학방문 상담신청 조회하기 */
	$(".ca_view").click(function(){
		$(".ca_result").css("display","block");
		$("#subContents").css("height","auto");
	});

	/* 로그인 placeholder */
	$(".idBox input").focusin(function(){
		$(".idBox label").hide();
	});
	$(".idBox input").focusout(function(){
		if ($(this).val() == "") {
			$(".idBox label").show();
		}else {
			$(".idBox label").hide();
		}
	});
	$(".pwBox input").focusin(function(){
		$(".pwBox label").hide();
	});
	$(".pwBox input").focusout(function(){
		if ($(this).val() == "") {
			$(".pwBox label").show();
		}else {
			$(".pwBox label").hide();
		}
	});

	/* 레이어팝업 */
	$(".pop_close").click(function(){
		bodyUnLock();
		$("#layerPop").css("display","none");
	});
	/* 레이어팝업 - (지원서작성 지원변경쪽) */
	$(".po_entrApp").click(function(){
		bodyLock();
		$("#layerPop").css("display","block");
	});
	$(".pop_entrApp li").click(function(){
		$(".pop_entrApp li").removeClass("on");
		$(this).addClass("on");
	});

	function bodyLock () { // body scroll Y 잠금
		$("body").css("height",wHeight);
		$("body").css("overflow","hidden");
	}

	function bodyUnLock () { // body scroll Y 잠금해제
		$("body").css("height","auto");
		$("body").css("overflow","scroll");
	}

	/* 서브컨텐츠 자동 높이값 */
	if ( subHeight <= sideHeight ) {
		$("#subContents").innerHeight(sideHeight+60);
	}



	function content_print(){
		var initBody = document.body.innerHTML;
		window.onbeforeprint = function(){
			document.body.innerHTML = document.getElementById('subContents').innerHTML;
		}
		window.onafterprint = function(){
			document.body.innerHTML = initBody;
		}
		window.print();
	}

});

