// JavaScript Document

$(document).ready(function(){
	
	$('.left-ul span').click(function(e){
		$(this).toggleClass('fa-caret-right');
		$(this).toggleClass('fa-caret-down');
		$ul = $(this).parent().parent().children().eq(1);
		if($ul.hasClass('left-ul-hidden-list')){
			$ul.addClass('left-ul-show-list');
			$ul.removeClass('left-ul-hidden-list');
			$ul.children().css("animation","0.8s fadeInLeft");
		}else{
			$ul.children().css("animation","none");
			$ul.removeClass('left-ul-show-list');
			$ul.addClass('left-ul-hidden-list');
		}
    });
	
});

function goToBack() {
    $(".right-view").css("display", "flex");
    $(".right-page").css("display", "none");
}