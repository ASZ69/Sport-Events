// JavaScript Document

$(document).ready(function(){
	
	var bgVideos = '<video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/cricicket.mp4"></video><video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/football.mp4"></video><video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/hockey.mp4"></video>';
	$('#background').append(bgVideos);
	
	$(function() {

		$('.heading-transparent').appear();
	  	$('#r1Vid1').appear();
	  	$('#r1Vid2').appear();
	  	$('#r1Vid3').appear();
	  	$('#r1Vid4').appear();

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
		$(document.body).on('appear', '#r1Vid1', function(e, $affected) {
			  $affected.addClass('animated slideInLeft slow');
	  	});

		$(document.body).on('disappear', '#r1Vid1', function(e, $affected) {
			  $affected.removeClass('slideInLeft');
	  	});
		
		$(document.body).on('appear', '#r1Vid2', function(e, $affected) {
			  $affected.addClass('animated slideInLeft fast');
	  	});

		$(document.body).on('disappear', '#r1Vid2', function(e, $affected) {
			  $affected.removeClass('slideInLeft');
	  	});
		
		$(document.body).on('appear', '#r1Vid3', function(e, $affected) {
			  $affected.addClass('animated slideInRight fast');
	  	});
		
		$(document.body).on('disappear', '#r1Vid3', function(e, $affected) {
			  $affected.removeClass('slideInRight');
	  	});
		
		$(document.body).on('appear', '#r1Vid4', function(e, $affected) {
			  $affected.addClass('animated slideInRight slow');
	  	});

		$(document.body).on('disappear', '#r1Vid4', function(e, $affected) {
			  $affected.removeClass('slideInRight');
	  	});
		
//		animation working end
		
	});
	
});

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
	}
}
