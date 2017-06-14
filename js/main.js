$(function(){
	function resize(){
		var $items = $("#main_ad .carousel-inner .item");
		var $screenWidth = $(window).width();
	 	$items.each(function(i,item){
	 		//item参数这里拿到的是DOM对象所以需要转换为jQuery对象
	 		var $src = $screenWidth < 768 ? $(item).data('image-sm') : $(item).data('image-lg');
	 		$(item).css('backgroundImage','url('+$src+')');
	 		if($screenWidth<768){
	 			$(item).html('<img src="'+$src+'" alt="" />');
	 		}else{
	 			$(item).empty();
	 		}
	 	});
	}
	$(window).on("resize",resize).trigger('resize')

	//滚动图片适应手机
	var $carousels = $(".carousel");
	var startX,endX;
	var offset = 50;
	$carousels.on('touchstart',function(e){
		startX = e.originalEvent.touches[0].clientX;
	});
	$carousels.on('touchmove',function(e){
		endX = e.originalEvent.touches[0].clientX;
	});
	$carousels.on('touchend',function(e){
		var distance = Math.abs(startX - endX);
		if(distance>offset){
			$(this).carousel(startX>endX ? 'next' : 'prev');
		}
	});
})