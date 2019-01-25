// JavaScript Document

$(document).ready(function(){
	
	var bgVideos = '<video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/cricicket.mp4"></video><video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/football.mp4"></video><video autoplay loop muted class="bg-img1 dis-none"><source src="videos/bg/hockey.mp4"></video>';
	$('#background').append(bgVideos);
	
	$(function() {

	  $('.heading-transparent').appear();

	  $(document.body).on('appear', '.heading-transparent', function(e, $affected) {
		// this code is executed for each appeared element
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
