// JavaScript Document

$(document).ready(function(){
	
//	$(window).scroll(function() {
//	   var hT = $('.heading-transparent').offset().top,
//		   hH = $('.heading-transparent').outerHeight(),
//		   wH = $(window).height(),
//		   wS = $(this).scrollTop();
//		console.log("scrolltop is: ",wS);
//	   if (wS > (hT+hH-wH)){
//		   console.log('H1 on the view!');
//	   }
//	});
	
//	$('.heading-transparent').appear(function(){
//		alert('heading aagai');
//	});
	
	$(function() {

	  $('.heading-transparent').appear();

	  $(document.body).on('appear', '.heading-transparent', function(e, $affected) {
		// this code is executed for each appeared element

		$affected.each(function() {
		  changeBG($(this));
		})
		  
		  
	  });

//	  $(document.body).on('disappear', '.heading-transparent', function(e, $affected) {
//		// this code is executed for each disappeared element
//		$affected.each(function() {
//		  alert('disappered');
//		})
//	  });
	});
	
});


function changeBG($ref){
	if($('#background').children()[0].src != "https://media.giphy.com/media/SwD9JjkA073Og/giphy.gif"){
		
		$('#background').children().remove();
		$('#background').append('<img src="https://media.giphy.com/media/SwD9JjkA073Og/giphy.gif" alt="BG" class="bg-img1">');
		
	}
}
