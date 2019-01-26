// JavaScript Document

$(document).ready(function(){
	
//	$('#background').append('<img src="images/cricket/stadium-wide.jpg" alt="BG" class="bg-img bg-img1">');
	
	var bgVideos = '<video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/cricicket.mp4"></video><video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/football.mp4"></video><video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/hockey.mp4"></video><video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/basketball.mp4"></video>';
	$('#background').append(bgVideos);
	
	$(function() {

		$('.heading-transparent').appear();

	  	$(document.body).on('appear', '.heading-transparent', function(e, $affected) {
			$affected.each(function() {
			  changeBG($(this));
			})  
	  	});
		
	  	$(document.body).on('disappear', '.heading-transparent:eq(0)', function(e, $affected) {
			$('#background').children().each(function(){
			  	$(this).css("display","none");
		  	});
		  	$('#background img').css('display','block');
	  	});
		
//		animation working start
		
		anim("#r1Vid1","slideInLeft","slow");
		anim("#r1Vid2","slideInLeft","fast");
		anim("#r1Vid3","slideInRight","fast");
		anim("#r1Vid4","slideInRight","slow");
		anim(".heading-transparent","zoomIn","slower");
//		anim("#r2","fadeInRight","slow");
//		anim("#r3","fadeInLeft","slow");
//		anim("#r4","fadeInUp","slow");
		anim(".hOverlay:eq(0) div:eq(0)","slideOutLeft","");
		anim(".hOverlay:eq(0) div:eq(1)","slideOutRight","");
		
		anim(".hOverlay:eq(1) div:eq(0)","slideOutLeft","");
		anim(".hOverlay:eq(1) div:eq(1)","slideOutRight","");
		
		anim(".hOverlay:eq(2) div:eq(0)","slideOutLeft","");
		anim(".hOverlay:eq(2) div:eq(1)","slideOutRight","");
		
		anim(".hOverlay:eq(3) div:eq(0)","slideOutLeft","");
		anim(".hOverlay:eq(3) div:eq(1)","slideOutRight","");
		
//		animation working end
		
	});
	
});

function anim(id,classList,unRemoveableClasses){
	
	$(id).appear();
	
	$(document.body).on('appear', id, function(e, $affected) {
		$affected.addClass('animated '+classList+' '+unRemoveableClasses);
	});
	
	$(document.body).on('disappear', id, function(e, $affected) {
		$affected.removeClass(classList);
	});
}

function changeBG($ref){
	switch($ref.text().trim()){
		case "Cricket":
			if($('#background video').eq(0).css('display') == 'none'){
				$('#background').children().each(function(){
					$(this).css("display","none");
				});
				$('#background video').eq(0).css('display','block');
			}
			break;
		case "Football":
			if($('#background video').eq(1).css('display') == 'none'){
				$('#background').children().each(function(){
					$(this).css("display","none");
				});
				$('#background video').eq(1).css('display','block');
			}
			break;
		case "Hockey":
			if($('#background video').eq(2).css('display') == 'none'){
				$('#background').children().each(function(){
					$(this).css("display","none");
				});
				$('#background video').eq(2).css('display','block');
			}
			break;
		case "Basketball":
			if($('#background video').eq(3).css('display') == 'none'){
				$('#background').children().each(function(){
					$(this).css("display","none");
				});
				$('#background video').eq(3).css('display','block');
			}
			break;
	}
}
