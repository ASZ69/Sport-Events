// JavaScript Document

var events = angular.module("events", []);

events.controller("categoriesControl", function ($scope, $filter) {
    $scope.showCat = function (event) {
        var clickedRefer = event.currentTarget;
        var category = clickedRefer.innerHTML;

        $scope.eventsArray = $filter('filter')(dataList, { name: category });
        initHover();
    };

    $scope.viewMore = function (event) {
        var clickedRefer = event.currentTarget;
        var sessionName = clickedRefer.parentElement.parentElement.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;

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

    $scope.viewSubCategory = function (event) {
        var clickedRefer = event.currentTarget;
        var sessionName = clickedRefer.innerHTML;

        var leagueName = clickedRefer.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML;
        $scope.eventsArray = $filter('filter')(dataList, { name: leagueName });

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
	
	//	check url to get specific result
	var url = window.location.search.replace("?","").replaceAll("%22","").replaceAll("%20"," ");
	if(url == ""){
		
		$scope.eventsArray = $filter('filter')(dataList, { name: 'Hockey WorldCup' });
		initHover();
		
	}else{
		
		var parts = url.split("&");
		var category = parts[0].split("=")[1];
		var season = parts[1].split("=")[1];
		
        $scope.eventsArray = $filter('filter')(dataList, { name: category });

        $(".scroll-container h2").addClass("mr-r-30p");
        $(".right-page h3").css("animation", "2s top-to-down-margin");

        $scope.moreDetailsArray = $filter('filter')($scope.eventsArray[0].seasons, { name: season });
		
        $("#frame").hide();

        setTimeout(function () {
            var data = $("#vidData").html().trim();
            $("#frame").attr("src", data);
            $("#frame").show();
        }, 1000);


        $(".right-view").css("display", "none");
        $(".right-page").css("display", "block");
		
        initHover();
		
	}
	
    $scope.categoryArray = dataList;

});

function initHover() {
    $(function () {
        $('.hover-effect').hoverdir();
    });
}

var dataList = [{
    name: 'Hockey WorldCup',
    seasons: [

        {
            name: '1990',
            wiki: 'https://en.wikipedia.org/wiki/1990_Men%27s_Hockey_World_Cup',
            imgSrc: '../images/hockey/cards/worldcup/header/1990.jpg',
            moreDetails: {
                images: [
                    '../images/hockey/cards/worldcup/slider/1990/1.jpg',
                    '../images/hockey/cards/worldcup/slider/1990/2.jpg'],
                scoreDefeat: '1 Goals',
                scoreWin: '3 Goals',
                matchHost: 'Lahore, Pakistan',
                runnerUp: 'Pakistan',
                winner: 'Netherlands',
                text: 'The 1990 Mens Hockey World Cup was the seventh edition of the Hockey World Cup mens field hockey tournament. It was held in National Hockey Stadium in Lahore, Pakistan from 12–23 February 1990. The Netherlands defeated Pakistan 3–1 in the final, with Australia beating out West Germany for third place in extra time.',
                vid: 'https://www.youtube.com/embed/3fD6hheug4w'
            }
        },

        {
            name: '1994',
            wiki: 'https://en.wikipedia.org/wiki/1994_Men%27s_Hockey_World_Cup',
            imgSrc: '../images/hockey/cards/worldcup/header/1994.jpg',
            moreDetails: {
                images: [
                    '../images/hockey/cards/worldcup/slider/1994/1.jpg',
                    '../images/hockey/cards/worldcup/slider/1994/2.jpg'],
                scoreDefeat: '1 Goals 3 penalty',
                scoreWin: '1 Goals 4 penalty',
                matchHost: 'Australia',
                runnerUp: 'Netherlands',
                winner: 'Pakistan',
                text: 'The 1994 Mens Hockey World Cup was the eighth edition of the Hockey World Cup, the quadrennial world championship for mens national field hockey teams organized by the FIH. It was held from 23 November to 4 December 1994 in Sydney, Australia. Pakistan defeated the Netherlands 1–1 (4–3 on penalties) to lift the trophy',
                vid: 'https://www.youtube.com/embed/7P2zA2mzsKk'
            }
        },

        {
            name: '1998',
            wiki: 'https://en.wikipedia.org/wiki/1998_Men%27s_Hockey_World_Cup',
            imgSrc: '../images/hockey/cards/worldcup/header/1998.jpg',
            moreDetails: {
                images: [
                    '../images/hockey/cards/worldcup/slider/1998/1.jpg',
                    '../images/hockey/cards/worldcup/slider/1998/2.jpg'],
                scoreDefeat: '2 Goals a.e.t',
                scoreWin: '3 Goals a.e.t',
                matchHost: 'Netherlands',
                runnerUp: 'Spain',
                winner: 'Netherlands',
                text: 'The 1998 Mens Hockey World Cup was the ninth edition of the Hockey World Cup, the quadrennial world championship for mens national field hockey teams organized by the FIH. It was held from 23 November to 4 December 1998 in Sydney, Netherlands. Netherlands defeated the Spain 3–2 (a.e.t) to lift the trophy',
                vid: 'https://www.youtube.com/embed/OgbewPAtNzo'
            }
        },

        {
            name: '2002',
            wiki: 'https://en.wikipedia.org/wiki/2004_Men%27s_Hockey_World_Cup',
            imgSrc: '../images/hockey/cards/worldcup/header/2002.jpg',
            moreDetails: {
                images: [
                    '../images/hockey/cards/worldcup/slider/2002/1.jpg',
                    '../images/hockey/cards/worldcup/slider/2002/2.jpg'],
                scoreDefeat: '1 Goals',
                scoreWin: '2 Goals',
                matchHost: 'Malaysia',
                runnerUp: 'Australia',
                winner: 'Germany',
                text: 'The 2002 Mens Hockey World Cup was the ninth edition of the Hockey World Cup, the quadrennial world championship for mens national field hockey teams organized by the FIH. It was held from 23 November to 4 December 2002 in Sydney, Netherlands. Netherlands defeated the Spain 2–1 to lift the trophy',
                vid: 'https://www.youtube.com/embed/tsSOSuQ5wLE'
            }
        },

        {
            name: '2006',
            wiki: 'https://en.wikipedia.org/wiki/2006_Men%27s_Hockey_World_Cup',
            imgSrc: '../images/hockey/cards/worldcup/header/2006.jpg',
            moreDetails: {
                images: [
                    '../images/hockey/cards/worldcup/slider/2006/1.jpg',
                    '../images/hockey/cards/worldcup/slider/2006/2.jpg'],
                scoreDefeat: '3 Goals',
                scoreWin: '4 Goals',
                matchHost: 'Germany',
                runnerUp: 'Australia',
                winner: 'Germany',
                text: 'The 2006 Mens Hockey World Cup was the ninth edition of the Hockey World Cup, the quadrennial world championship for mens national field hockey teams organized by the FIH. It was held from 23 November to 4 December 2006 in Sydney, Netherlands. Netherlands defeated the Spain 4–3 to lift the trophy',
                vid: 'https://www.youtube.com/embed/xiOpSjqIfxg'
            }
        },

        {
            name: '2010',
            wiki: 'https://en.wikipedia.org/wiki/2010_Men%27s_Hockey_World_Cup',
            imgSrc: '../images/hockey/cards/worldcup/header/2010.jpg',
            moreDetails: {
                images: [
                    '../images/hockey/cards/worldcup/slider/2010/1.jpg',
                    '../images/hockey/cards/worldcup/slider/2010/2.jpg'],
                scoreDefeat: '1 Goals',
                scoreWin: '2 Goals',
                matchHost: 'India',
                runnerUp: 'Germany',
                winner: 'Australia',
                text: 'The 2010 Mens Hockey World Cup was the ninth edition of the Hockey World Cup, the quadrennial world championship for mens national field hockey teams organized by the FIH. It was held from 23 November to 4 December 2010 in India. Australia defeated the Germany 2–1 to lift the trophy',
                vid: 'https://www.youtube.com/embed/dL0lbB7BUBo'
            }
        },

        {
            name: '2014',
            wiki: 'https://en.wikipedia.org/wiki/2014_Men%27s_Hockey_World_Cup',
            imgSrc: '../images/hockey/cards/worldcup/header/2014.jpg',
            moreDetails: {
                images: [
                    '../images/hockey/cards/worldcup/slider/2014/1.jpg',
                    '../images/hockey/cards/worldcup/slider/2014/2.jpg'],
                scoreDefeat: '1 Goals',
                scoreWin: '6 Goals',
                matchHost: 'Netherlands',
                runnerUp: 'Netherlands',
                winner: 'Australia',
                text: 'The 2014 Mens Hockey World Cup was the ninth edition of the Hockey World Cup, the quadrennial world championship for mens national field hockey teams organized by the FIH. It was held from 23 November to 4 December 2014 in India. Australia defeated the Netherlands  6–1 to lift the trophy',
                vid: 'https://www.youtube.com/embed/nAfzagRAS74'
            }
        },

        {
            name: '2018',
            wiki: 'https://en.wikipedia.org/wiki/2018_Men%27s_Hockey_World_Cup',
            imgSrc: '../images/hockey/cards/worldcup/header/2018.jpg',
            moreDetails: {
                images: [
                    '../images/hockey/cards/worldcup/slider/2018/1.jpg',
                    '../images/hockey/cards/worldcup/slider/2018/2.jpg'],
                scoreDefeat: '0 Goals 2 Penalaty',
                scoreWin: '0 Goals 3 Penalaty',
                matchHost: 'India',
                runnerUp: 'Netherlands',
                winner: 'Belgium',
                text: 'The 2018 Mens Hockey World Cup was the ninth edition of the Hockey World Cup, the quadrennial world championship for mens national field hockey teams organized by the FIH. It was held from 23 November to 4 December 2018 in India. Australia defeated the Netherlands  6–1 to lift the trophy',
                vid: 'https://www.youtube.com/embed/2W3Y79Nz4Yw'
            }
        }
    ]
}

];