// JavaScript Document

var events = angular.module("events",[]);

events.controller("categoriesControl",function($scope,$filter){
	$scope.showCat = function(event){
		var clickedRefer = event.currentTarget;
		var category = clickedRefer.innerHTML;
		
		$scope.eventsArray = $filter('filter')(dataList, {name: category});
		initHover();
	};

    $scope.viewMore = function (event) {
        var clickedRefer = event.currentTarget;
        var sessionName = clickedRefer.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;

        $(".scroll-container h2").addClass("mr-r-30p");
        $(".right-page h3").css("animation","2s top-to-down-margin");

        $scope.moreDetailsArray = $filter('filter')($scope.eventsArray[0].seasons, { name: sessionName});
		$("#frame").hide();
		
		setTimeout(function(){
			var data = $("#vidData").html().trim();
			$("#frame").attr("src",data);
			$("#frame").show();
		},1000);
		
		$(".right-view").css("display", "none");
        $(".right-page").css("display", "block");
		
		initHover();
		
    };

    $scope.viewSubCategory = function (event) {
        var clickedRefer = event.currentTarget;
        var sessionName = clickedRefer.innerHTML;
		
		var leagueName = clickedRefer.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;
		$scope.eventsArray = $filter('filter')(dataList, {name: leagueName});
		
        $(".scroll-container h2").addClass("mr-r-30p");
        $(".right-page h3").css("animation", "2s top-to-down-margin");

        $scope.moreDetailsArray = $filter('filter')($scope.eventsArray[0].seasons, { name: sessionName });
        $("#frame").hide();

        setTimeout(function () {
            var data = $("#vidData").html().trim();
            $("#frame").attr("src", data);
            $("#frame").show();
        }, 1000);
		
		$(".right-view").css("display", "none");
        $(".right-page").css("display", "block");
		
		initHover();
		
    };

    $scope.eventsArray = $filter('filter')(dataList, { name: 'Basketball WorldCup'});
	$scope.categoryArray = dataList;
	initHover();
	
});

function initHover(){
	$(function () {
		$('.hover-effect').hoverdir();
	});
}

var dataList = [{
    name: 'Basketball WorldCup',
    seasons: [

        {
            name: 'FIBA 1990',
            wiki: 'https://en.wikipedia.org/wiki/1990_FIBA_World_Championship',
            imgSrc: '../images/basketball/cards/worldcup/header/1990.jpg',
            moreDetails: {
                images: [
                    '../images/basketball/cards/worldcup/slider/1990/1.jpg',
                    '../images/basketball/cards/worldcup/slider/1990/2.jpg'],
                scoreDefeat: '75 Score',
                scoreWin: '92 Score',
                matchHost: 'Argentina',
                runnerUp: 'Soviet Union',
                winner: 'Yugoslavia',
                text: 'The 1990 FIBA World Championship was the 11th FIBA World Championship, the international basketball world championship for mens teams. It was hosted by Argentina from August 8 to August 20, 1990. The competition final phase was held at the Luna Park, Buenos Aires.',
                vid:'https://www.youtube.com/embed/kSjZgNuM4cI'
            }
        },

        {
            name: 'FIBA 1994',
            wiki: 'https://en.wikipedia.org/wiki/1994_FIBA_World_Championship',
            imgSrc: '../images/basketball/cards/worldcup/header/1994.jpg',
            moreDetails: {
                images: [
                    '../images/basketball/cards/worldcup/slider/1994/1.jpg',
                    '../images/basketball/cards/worldcup/slider/1994/2.jpg'],
                scoreDefeat: '91 Scores',
                scoreWin: '137 Scores',
                matchHost: 'Canada',
                runnerUp: 'Russia',
                winner: 'United States',
                text: 'The 1994 FIBA World Championship was the 12th FIBA World Championship, the international basketball world championship for mens teams. The tournament was hosted by Canada from August 4 to August 14, 1994. The tournament was held at SkyDome and Maple Leaf Gardens in Toronto[2] as well as at Copps Coliseum in Hamilton.[2] The hosting duties were originally awarded to Belgrade, Yugoslavia, but after United Nations imposed a trade embargo on the Balkan country, Toronto stepped in as a replacement option in 1992.',
                vid: 'https://www.youtube.com/embed/kJFBSK-qX58'
            }
        },

        {
            name: 'FIBA 1998',
            wiki: 'https://en.wikipedia.org/wiki/1998_FIBA_World_Championship',
            imgSrc: '../images/basketball/cards/worldcup/header/1998.jpg',
            moreDetails: {
                images: [
                    '../images/basketball/cards/worldcup/slider/1998/1.jpg',
                    '../images/basketball/cards/worldcup/slider/1998/2.jpg'],
                scoreDefeat: '62 Scores',
                scoreWin: '64 Scores',
                matchHost: 'Greece',
                runnerUp: 'Russia',
                winner: 'Yugoslavia',
                text: 'The 1998 FIBA World Championship was the 13th FIBA World Championship, an international basketball tournament held by the International Basketball Federation and hosted in Greece from 29 July to 9 August 1998. The tournament was contested by 16 nations and the matches were played in two venues in Athens and Piraeus.',
                vid: 'https://www.youtube.com/embed/4mrTUWACzoQ'
            }
        },

        {
            name: 'FIBA 2002',
            wiki: 'https://en.wikipedia.org/wiki/2002_FIBA_World_Championship',
            imgSrc: '../images/basketball/cards/worldcup/header/2002.jpg',
            moreDetails: {
                images: [
                    '../images/basketball/cards/worldcup/slider/2002/1.jpg',
                    '../images/basketball/cards/worldcup/slider/2002/2.jpg'],
                scoreDefeat: '77 Scores OT',
                scoreWin: '84 Scores OT',
                matchHost: 'United States',
                runnerUp: 'Argentina',
                winner: 'Yugoslavia',
                text: 'The 2002 FIBA World Championship was the 14th FIBA World Championship, the international world championship for mens basketball teams. The tournament held by the International Basketball Federation in Indianapolis, Indiana, United States from August 29 to September 8, 2002.',
                vid: 'https://www.youtube.com/embed/TsL0HpeVzXs'
            }
        },

        {
            name: 'FIBA 2006',
            wiki: 'https://en.wikipedia.org/wiki/2006_FIBA_World_Championship',
            imgSrc: '../images/basketball/cards/worldcup/header/2006.jpg',
            moreDetails: {
                images: [
                    '../images/basketball/cards/worldcup/slider/2006/1.jpg',
                    '../images/basketball/cards/worldcup/slider/2006/2.jpg'],
                scoreDefeat: '47 Scores',
                scoreWin: '70 Scores',
                matchHost: 'Japan',
                runnerUp: 'Greece',
                winner: 'Spain',
                text: 'The 2006 FIBA World Championship was the 14th FIBA World Championship, the international world championship for mens basketball teams. The tournament held by the International Basketball Federation in Indianapolis, Indiana, United States from August 29 to September 8, 2006.',
                vid: 'https://www.youtube.com/embed/07EWuL6pw0A'
            }
        },

        {
            name: 'FIBA 2010',
            wiki: 'https://en.wikipedia.org/wiki/2010_FIBA_World_Championship',
            imgSrc: '../images/basketball/cards/worldcup/header/2010.jpg',
            moreDetails: {
                images: [
                    '../images/basketball/cards/worldcup/slider/2010/1.jpg',
                    '../images/basketball/cards/worldcup/slider/2010/2.jpg'],
                scoreDefeat: '64 Scores',
                scoreWin: '81 Scores',
                matchHost: 'Turkey',
                runnerUp: 'Turkey',
                winner: 'United States',
                text: 'The 2010 FIBA World Championship was the 14th FIBA World Championship, the international world championship for mens basketball teams. The tournament held by the International Basketball Federation in Indianapolis, Indiana, United States from August 29 to September 8, 2010.',
                vid: 'https://www.youtube.com/embed/ZFg0m9AefsM'
            }
        },

        {
            name: 'FIBA 2014',
            wiki: 'https://en.wikipedia.org/wiki/2014_FIBA_World_Championship',
            imgSrc: '../images/basketball/cards/worldcup/header/2014.jpg',
            moreDetails: {
                images: [
                    '../images/basketball/cards/worldcup/slider/2014/1.jpg',
                    '../images/basketball/cards/worldcup/slider/2014/2.jpg'],
                scoreDefeat: '92 Scores',
                scoreWin: '129 Scores',
                matchHost: 'Spain',
                runnerUp: 'Serbia',
                winner: 'United States',
                text: 'The 2014 FIBA World Championship was the 14th FIBA World Championship, the international world championship for mens basketball teams. The tournament held by the International Basketball Federation in Indianapolis, Indiana, United States from August 29 to September 8, 2014.',
                vid: 'https://www.youtube.com/embed/B-bPqXTWfeo'
            }
        }
    ]
}

];