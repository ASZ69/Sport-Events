// JavaScript Document

var events = angular.module("events",[]);

events.controller("categoriesControl",function($scope,$filter){
	$scope.showCat = function(event){
		var clickedRefer = event.currentTarget;
		var category = clickedRefer.innerHTML;
		
		$scope.eventsArray = $filter('filter')(dataList, {name: category});
	};
	
	$scope.eventsArray = $filter('filter')(dataList, {name: 'Pakistan Super League'});
});

var dataList = [{name:'Pakistan Super League',
				 seasons:[
					 
					 {name:'PSL 2016',
					  wiki:'www.wiki.com/psl',
					  imgSrc:'../images/cricket/cards/psl/header/2016.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'Dubai'}},
					 
					 {name:'PSL 2017',
					  wiki:'www.wiki.com/psl', 
					  imgSrc:'../images/cricket/cards/psl/header/2017.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'Lahore'}},
					 
					 {name:'PSL 2018',
					  wiki:'www.wiki.com/psl', 
					  imgSrc:'../images/cricket/cards/psl/header/2018.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'Karachi'}}
				 ]},
				
				{name:'ICC ODI WorldCup',
				 seasons:[
					 
					 {name:'2015',
					  wiki:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'quaidabad'}},
					 
					 {name:'2017',
					  wiki:'www.wiki.com/psl', 
					  imgSrc:'../images/myimg.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'quaidabad'}}
				 ]}
				
			   ];
	
//		{heading:'The PSL',season:'2015',
//		 wiki:'www.wiki.com/psl',
//		 imgSrc:'../images/myimg.jpg',
//		 moreDetails:{
//			 images:[
//				 '../images/my.jpg',
//			 	 'asdasda',
//			 	 'adsfda'],
//			 scoreDefeat:'24/7',
//			 scoreWin:'12/24',
//		 	 matchHost:'quaidabad'}},
//	
//		{heading:'The PSL',season:'2017',
//			 wiki:'www.wiki.com/psl',
//			 imgSrc:'../images/myimg.jpg',
//			 moreDetails:{
//				 images:[
//				 '../images/my.jpg',
//			 	 'asdasda',
//			 	 'e44',
//				 'jj11',
//				 'hhh22'],
//				 scoreDefeat:'24/7',
//				 scoreWin:'12/24',
//				 matchHost:'landhi'}},
//		{heading:'The ICC',season:'2017',
//		 wiki:'www.wiki.com/psl17',
//		 imgSrc:'../images/myimg17.jpg',
//		 moreDetails:{
//			 images:[
//				 '../images/my.jpg',
//			 	 'asdasda',
//			 	 'adsfda'],
//			 scoreDefeat:'69/7',
//			 scoreWin:'1/240',
//		 	 matchHost:'nadi kinare'}}
//		];