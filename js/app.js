// JavaScript Document

var events = angular.module("events",[]);

events.controller("categoriesControl",function($scope){
	$scope.showCat = function(event){
		var clickedRefer = event.currentTarget;
		var category = clickedRefer.innerHTML;
		
		if(category == "The PSL"){
			$scope.eventsArray = ["PSL1","PSL2","PSL3"];
		}else{
			$scope.eventsArray = ["ICC1","Icc2","ICC3"];
		}
		
	};
	
	$scope.eventsArray = [
		{heading:'PSL',year:'2015',
		 wiki:'www.wiki.com/psl',
		 imgSrc:'../images/myimg.jpg'},
		{heading:'PSL',year:'2017',
		 wiki:'www.wiki.com/psl17',
		 imgSrc:'../images/myimg17.jpg'}
		];
});