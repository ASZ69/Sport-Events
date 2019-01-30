// JavaScript Document

var events = angular.module("events",[]);

events.controller("categoriesControl",function($scope,$filter){
	$scope.showCat = function(event){
		var clickedRefer = event.currentTarget;
		var category = clickedRefer.innerHTML;
		
		$scope.eventsArray = $filter('filter')(dataList, {heading: category});
	};
	
	$scope.eventsArray = $filter('filter')(dataList, {heading: 'The PSL'});
});

var dataList = [
		{heading:'The PSL',season:'2015',
		 wiki:'www.wiki.com/psl',
		 imgSrc:'../images/myimg.jpg',
		 moreDetails:{
			 images:{
				 image1:'../images/my.jpg',
			 	 image2:'asdasda',
			 	 image3:'adsfda'},
			 scoreDefeat:'24/7',
			 scoreWin:'12/24',
		 	 matchHost:'quaidabad'}},
		{heading:'The PSL',season:'2017',
			 wiki:'www.wiki.com/psl',
			 imgSrc:'../images/myimg.jpg',
			 moreDetails:{
				 images:{
					 image1:'../images/my.jpg',
					 image2:'asdasda',
					 image3:'adsfda'},
				 scoreDefeat:'24/7',
				 scoreWin:'12/24',
				 matchHost:'landhi'}},
		{heading:'The ICC',season:'2017',
		 wiki:'www.wiki.com/psl17',
		 imgSrc:'../images/myimg17.jpg',
		 moreDetails:{
			 images:{
				 image1:'../images/myfor3.jpg',
			 	 image2:'axzxz',
			 	 image3:'iii'},
			 scoreDefeat:'69/7',
			 scoreWin:'1/240',
		 	 matchHost:'nadi kinare'}}
		];