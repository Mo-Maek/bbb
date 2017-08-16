$(function(){
	//侧边
	let sidLi = $('.sidLi')
	sidLi.on('tap',function(ev){
		$(this).addClass('active').siblings().removeClass('active');
		ev.stopPropagation();
	})
	$('input').on('tap',function(ev){
		ev.stopPropagation();
	})
	$('button').on('tap',function(ev){
		ev.stopPropagation();
	})
	$('.left').on('tap',function(ev){
		ev.stopPropagation();
		$('.sidePullBar').css({left:'0'})
		$('.zhezhao').css({display:'block'})
	})
	
	$('.zhezhao').on('tap',function(ev){
		//console.log(ev.target)// ev.target 点击的目标是谁
		$('.sidePullBar').css({left:'-4.5rem'})
		$('.zhezhao').css({display:'none'})
	})
	
	$('.jj').on('tap',function(){
		 window.location.href="jujia.html";
	})
	
	
	 var mySwiper = new Swiper(".swiper-container",{  
        direction:"horizontal",/*横向滑动*/  
        loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/  
        pagination:".swiper-pagination",/*分页器*/  
        prevButton:".swiper-button-prev",/*前进按钮*/  
        nextButton:".swiper-button-next",/*后退按钮*/  
        autoplay:3000,/*每隔3秒自动播放*/  
        autoplayDisableOnInteraction : false,
    })  
})
