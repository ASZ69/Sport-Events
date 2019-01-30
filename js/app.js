// JavaScript Document

var events = angular.module("events",[]);

events.controller("categoriesControl",function($scope,$filter){
	$scope.showCat = function(event){
		var clickedRefer = event.currentTarget;
		var category = clickedRefer.innerHTML;
		
		$scope.eventsArray = $filter('filter')(dataList, {name: category});
	};
	
	$scope.eventsArray = $filter('filter')(dataList, {name: 'ICC ODI WorldCup'});
	
	$scope.categoryArray = dataList;
	
});

var dataList = [{name:'ICC ODI WorldCup',
				 seasons:[
					 
					 {name:'ICC 1992',
					  wiki:'https://en.wikipedia.org/wiki/1992_Cricket_World_Cup_Final',
					  imgSrc:'../images/cricket/cards/icc/header/1992.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'Australia'}},
					 
					 {name:'ICC 1996',
					  wiki:'https://en.wikipedia.org/wiki/1996_Cricket_World_Cup_Final', 
					  imgSrc:'../images/cricket/cards/icc/header/1996.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'Pakistan'}},
					 
					 {name:'ICC 1999',
					  wiki:'https://en.wikipedia.org/wiki/1999_Cricket_World_Cup_Final', 
					  imgSrc:'../images/cricket/cards/icc/header/1999.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'England'}},
					 
					 {name:'ICC 2003',
					  wiki:'https://en.wikipedia.org/wiki/2003_Cricket_World_Cup_Final', 
					  imgSrc:'../images/cricket/cards/icc/header/2003.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'South Africa'}},
					 
					 {name:'ICC 2007',
					  wiki:'https://en.wikipedia.org/wiki/2007_Cricket_World_Cup_Final', 
					  imgSrc:'../images/cricket/cards/icc/header/2007.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'West Indies'}},
					 
					 {name:'ICC 2011',
					  wiki:'https://en.wikipedia.org/wiki/2011_Cricket_World_Cup_Final', 
					  imgSrc:'../images/cricket/cards/icc/header/2011.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'India'}},
					 
					 {name:'ICC 2015',
					  wiki:'https://en.wikipedia.org/wiki/2015_Cricket_World_Cup_Final', 
					  imgSrc:'../images/cricket/cards/icc/header/2015.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'Australia'}}
				 ]},
				
				{name:'Pakistan Super League',
				 seasons:[
					 
					 {name:'PSL 2016',
					  wiki:'https://en.wikipedia.org/wiki/2016_Pakistan_Super_League',
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
					  wiki:'https://en.wikipedia.org/wiki/2017_Pakistan_Super_League', 
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
					  wiki:'https://en.wikipedia.org/wiki/2018_Pakistan_Super_League',
					  imgSrc:'../images/cricket/cards/psl/header/2018.jpg',
					  moreDetails:{
						  images:[
							  '../images/my.jpg',
							  'asdasda',
							  'adsfda'],
						  scoreDefeat:'24/7',
						  scoreWin:'12/24',
						  matchHost:'Karachi'}}
				 ]}
				
			   ];