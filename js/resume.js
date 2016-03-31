$(document).ready(function(){
	//點擊回到頁首
	$(".nav-bar .nav-bar-header .header").click(function(){
		$("html,body").animate({scrollTop:0},1000);
	});

	//點擊menu-bar
	$(".nav-bar .menu .bar").click(function(){
		$(".bar-down").slideToggle();	
	});

	//點擊bar移動
	$(".nav-bar .menu .bar-down li").click(function(){
		var goMenu = $(this).attr("id");
		var goHeight = $(".div-"+ goMenu).offset().top;

		$("html,body").animate({
			scrollTop: goHeight
		},500);
	});

	//偵測網頁寬度，大於959就顯示，其他就隱藏(手機板，桌機板切換)
	$(window).resize(function(){
		var myWidth = window.innerWidth;
		if(myWidth > 959) {
			$(".bar-down").show();
		}else{
			$(".bar-down").hide();
		}
	});

});