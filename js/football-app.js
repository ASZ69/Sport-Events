// JavaScript Document

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

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
		
		$scope.eventsArray = $filter('filter')(dataList, { name: 'FIFA WorldCup' });
		initHover();
		
	}else{
		
		var parts = url.split("&");
		var category = parts[0].split("=")[1];
		var season = parts[1].split("=")[1];
		
        $scope.eventsArray = $filter('filter')(dataList, { name: category });

        if(season != ""){
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
		}
		
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
    name: 'FIFA WorldCup',
    seasons: [

        {
            name: 'FIFA 1990',
            wiki: 'https://en.wikipedia.org/wiki/1990_FIFA_World_Cup',
            imgSrc: '../images/football/cards/fifa/header/1990.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/fifa/slider/1990/1.jpg',
                    '../images/football/cards/fifa/slider/1990/2.jpg',
                    '../images/football/cards/fifa/slider/1990/3.jpg'],
                scoreDefeat: '0 Goals',
                scoreWin: '1 Goals',
                matchHost: 'Italy',
                runnerUp: 'Argentina',
                winner: 'West Germany',
                text: 'The 1990 FIFA World Cup was the 14th FIFA World Cup, the quadrennial international football tournament. It was held from 8 June to 8 July 1990 in Italy, the second country to host the event twice (the first being Mexico in 1986). Teams representing 116 national football associations entered and qualification began in April 1988.',
                vid: 'https://www.youtube.com/embed/saey6eRFmwU'
            }
        },

        {
            name: 'FIFA 1994',
            wiki: 'https://en.wikipedia.org/wiki/1994_FIFA_World_Cup',
            imgSrc: '../images/football/cards/fifa/header/1994.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/fifa/slider/1994/1.jpg',
                    '../images/football/cards/fifa/slider/1994/2.jpg',
                    '../images/football/cards/fifa/slider/1994/3.jpg'],
                scoreDefeat: '0 Goals 2 penalty',
                scoreWin: '0 Goals 3 penalty',
                matchHost: 'United States',
                runnerUp: 'Italy',
                winner: 'Brazil',
                text: 'The 1994 FIFA World Cup was the 15th FIFA World Cup, held in nine cities across the United States from 17 June to 17 July 1994. The United States was chosen as the host by FIFA on 4 July 1988. Despite the host nation lack of football tradition, the tournament was the most financially successful in World Cup history; aided by the high- capacity stadia in the United States, it broke the World Cup average attendance record with more than 69, 000 spectators per game, a mark that still stands.',
                vid: 'https://www.youtube.com/embed/jsOleoyrbFE'
            }
        },

        {
            name: 'FIFA 1998',
            wiki: 'https://en.wikipedia.org/wiki/1998_FIFA_World_Cup',
            imgSrc: '../images/football/cards/fifa/header/1998.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/fifa/slider/1998/1.jpg',
                    '../images/football/cards/fifa/slider/1998/2.jpg',
                    '../images/football/cards/fifa/slider/1998/3.jpg'],
                scoreDefeat: '0 Goals',
                scoreWin: '3 Goals',
                matchHost: 'France',
                runnerUp: 'Brazil',
                winner: 'France',
                text: 'The 1998 FIFA World Cup was the 16th FIFA World Cup, the world championship for mens national association football teams. It was held in France from 10 June to 12 July 1998. The country was chosen as the host nation by FIFA for the second time in the history of the tournament, defeating Morocco in the bidding process.',
                vid: 'https://www.youtube.com/embed/KOjsWWMfnxU'
            }
        },

        {
            name: 'FIFA 2002',
            wiki: 'https://en.wikipedia.org/wiki/2003_FIFA_World_Cup_Final',
            imgSrc: '../images/football/cards/fifa/header/2002.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/fifa/slider/2002/1.jpg',
                    '../images/football/cards/fifa/slider/2002/2.jpg',
                    '../images/football/cards/fifa/slider/2002/3.jpg'],
                scoreDefeat: '0 Goal',
                scoreWin: '2 Goal',
                matchHost: 'Japan',
                runnerUp: 'Germany',
                winner: 'Brazil',
                text: 'The 2002 FIFA World Cup was the 17th FIFA World Cup, the quadrennial world championship for mens national football teams organized by FIFA. It was held from 31 May to 30 June 2002 at sites in South Korea and Japan, with its final match hosted by Japan at International Stadium in Yokohama.',
                vid: 'https://www.youtube.com/embed/gKHbHUoam-M'
            }
        },

        {
            name: 'FIFA 2006',
            wiki: 'https://en.wikipedia.org/wiki/2006_FIFA_World_Cup_Final',
            imgSrc: '../images/football/cards/fifa/header/2006.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/fifa/slider/2006/1.jpg',
                    '../images/football/cards/fifa/slider/2006/2.jpg',
                    '../images/football/cards/fifa/slider/2006/3.jpg'],
                scoreDefeat: '1 Goal 3 Penalty',
                scoreWin: '1 Goal 5 Penalty',
                matchHost: 'Germany',
                runnerUp: 'France',
                winner: 'Italy',
                text: 'The 2006 FIFA World Cup was the 18th FIFA World Cup, the quadrennial international football world championship tournament. It was held from 9 June to 9 July 2006 in Germany, which won the right to host the event in July 2000. Teams representing 198 national football associations from all six populated continents participated in the qualification process which began in September 2003.',
                vid: 'https://www.youtube.com/embed/lXJy_qTvqpk'
            }
        },

        {
            name: 'FIFA 2010',
            wiki: 'https://en.wikipedia.org/wiki/2010_FIFA_World_Cup_Final',
            imgSrc: '../images/football/cards/fifa/header/2010.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/fifa/slider/2010/1.jpg',
                    '../images/football/cards/fifa/slider/2010/2.jpg',
                    '../images/football/cards/fifa/slider/2010/3.jpg'],
                scoreDefeat: '0 Goal',
                scoreWin: '1 Goal',
                matchHost: 'South Africa',
                runnerUp: 'Netherlands',
                winner: 'Spain',
                text: 'The 2010 FIFA World Cup was the 19th FIFA World Cup, the world championship for mens national association football teams. It took place in South Africa from 11 June to 11 July 2010. The bidding process for hosting the tournament finals was open only to African nations. In 2004, the international football federation, FIFA, selected South Africa over Egypt and Morocco to become the first African nation to host the finals.',
                vid: 'https://www.youtube.com/embed/K2gOGyYbPy0'
            }
        },

        {
            name: 'FIFA 2014',
            wiki: 'https://en.wikipedia.org/wiki/2014_FIFA_World_Cup_Final',
            imgSrc: '../images/football/cards/fifa/header/2014.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/fifa/slider/2014/1.jpg',
                    '../images/football/cards/fifa/slider/2014/2.jpg',
                    '../images/football/cards/fifa/slider/2014/3.jpg'],
                scoreDefeat: '0 Goal',
                scoreWin: '1 Goal',
                matchHost: 'Brazil',
                runnerUp: 'Argentina',
                winner: 'Germany',
                text: 'The 2014 FIFA World Cup was the 20th FIFA World Cup, the quadrennial world championship for mens national football teams organised by FIFA. It took place in Brazil from 12 June to 13 July 2014, after the country was awarded the hosting rights in 2007. It was the second time that Brazil staged the competition, the first being in 1950, and the fifth time that it was held in South America.',
                vid: 'https://www.youtube.com/embed/ZCcnQiuyUlQ'
            }
        },

        {
            name: 'FIFA 2018',
            wiki: 'https://en.wikipedia.org/wiki/2018_FIFA_World_Cup_Final',
            imgSrc: '../images/football/cards/fifa/header/2018.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/fifa/slider/2018/1.jpg',
                    '../images/football/cards/fifa/slider/2018/2.jpg',
                    '../images/football/cards/fifa/slider/2018/3.jpg'],
                scoreDefeat: '2 Goal',
                scoreWin: '4 Goal',
                matchHost: 'Russia',
                runnerUp: 'Croatia',
                winner: 'France',
                text: 'The 2018 FIFA World Cup was the 21st FIFA World Cup, an international football tournament contested by the mens national teams of the member associations of FIFA once every four years. It took place in Russia from 14 June to 15 July 2018.[1] It was the first World Cup to be held in Eastern Europe, [2] and the 11th time that it had been held in Europe.At an estimated cost of over $14.2 billion, it was the most expensive World Cup.[3] It was also the first World Cup to use the video assistant referee (VAR) system.',
                vid: 'https://www.youtube.com/embed/rD5i1Klbqc0'
            }
        }
    ]
},

{
    name: 'Premier League',
    seasons: [

        {
            name: '2010',
            wiki: 'https://en.wikipedia.org/wiki/2010%E2%80%9311_Premier_League',
            imgSrc: '../images/football/cards/pl/header/2010.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/pl/slider/2010/1.jpg',
                    '../images/football/cards/pl/slider/2010/2.jpg',
                    '../images/football/cards/pl/slider/2010/3.jpg'],
                scoreDefeat: '2 Goals',
                scoreWin: '4 Goals',
                matchHost: 'United States',
                runnerUp: 'Blackpool',
                winner: 'Manchester United',
                text: 'The 2010–11 Premier League (known as the Barclays Premier League for sponsorship reasons) was the 19th season of the Premier League since its establishment in 1992. The 2010–11 fixtures were released on 17 June 2010 at 09:00 BST.[2] The season began on 14 August 2010,[3] and ended on 22 May 2011. Chelsea were the defending champions.',
                vid: 'https://www.youtube.com/embed/3GjxUn5rN0g'
            }
        },

        {
            name: '2011',
            wiki: 'https://en.wikipedia.org/wiki/2011%E2%80%9312_Premier_League',
            imgSrc: '../images/football/cards/pl/header/2011.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/pl/slider/2011/1.jpg',
                    '../images/football/cards/pl/slider/2011/2.jpg',
                    '../images/football/cards/pl/slider/2011/3.jpg'],
                scoreDefeat: '2 Goals',
                scoreWin: '3 Goals',
                matchHost: 'England',
                runnerUp: 'Queens Park Rangers',
                winner: 'Manchester City',
                text: 'The 2011–12 Premier League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/VEHidPoEyJw'
            }
        },

        {
            name: '2012',
            wiki: 'https://en.wikipedia.org/wiki/2012%E2%80%9313_Premier_League',
            imgSrc: '../images/football/cards/pl/header/2012.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/pl/slider/2012/1.jpg',
                    '../images/football/cards/pl/slider/2012/2.jpg',
                    '../images/football/cards/pl/slider/2012/3.jpg'],
                scoreDefeat: '5 Goals',
                scoreWin: '6 Goals',
                matchHost: 'United Kingdom',
                runnerUp: 'West Bromwich Albion',
                winner: 'Manchester United',
                text: 'The 2012–13 Premier League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/VEHidPoEyJw'
            }
        },

        {
            name: '2013',
            wiki: 'https://en.wikipedia.org/wiki/2013%E2%80%9314_Premier_League',
            imgSrc: '../images/football/cards/pl/header/2013.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/pl/slider/2013/1.jpg',
                    '../images/football/cards/pl/slider/2013/2.jpg',
                    '../images/football/cards/pl/slider/2013/3.jpg'],
                scoreDefeat: '0 Goals',
                scoreWin: '2 Goals',
                matchHost: 'Italy',
                runnerUp: 'West Ham United',
                winner: 'Manchester City',
                text: 'The 2013–14 Premier League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/VEHidPoEyJw'
            }
        },

        {
            name: '2014',
            wiki: 'https://en.wikipedia.org/wiki/2014%E2%80%9315_Premier_League',
            imgSrc: '../images/football/cards/pl/header/2014.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/pl/slider/2014/1.jpg',
                    '../images/football/cards/pl/slider/2014/2.jpg',
                    '../images/football/cards/pl/slider/2014/3.jpg'],
                scoreDefeat: '1 Goals',
                scoreWin: '3 Goals',
                matchHost: 'England',
                runnerUp: 'Sunderland',
                winner: 'Chelsea',
                text: 'The 2014–15 Premier League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/VEHidPoEyJw'
            }
        },

        {
            name: '2015',
            wiki: 'https://en.wikipedia.org/wiki/2015%E2%80%9316_Premier_League',
            imgSrc: '../images/football/cards/pl/header/2015.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/pl/slider/2015/1.jpg',
                    '../images/football/cards/pl/slider/2015/2.jpg',
                    '../images/football/cards/pl/slider/2015/3.jpg'],
                scoreDefeat: '1 Goals',
                scoreWin: '2 Goals',
                matchHost: 'England',
                runnerUp: 'Chelsea',
                winner: 'Leicester City',
                text: 'The 2015–16 Premier League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/VEHidPoEyJw'
            }
        },

        {
            name: '2016',
            wiki: 'https://en.wikipedia.org/wiki/2016%E2%80%9317_Premier_League',
            imgSrc: '../images/football/cards/pl/header/2016.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/pl/slider/2016/1.jpg',
                    '../images/football/cards/pl/slider/2016/2.jpg',
                    '../images/football/cards/pl/slider/2016/3.jpg'],
                scoreDefeat: '0 Goals',
                scoreWin: '1 Goals',
                matchHost: 'United States',
                runnerUp: 'Southampton',
                winner: 'Manchester City',
                text: 'The 2016–17 Premier League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/VEHidPoEyJw'
            }
        },

        {
            name: '2017',
            wiki: 'https://en.wikipedia.org/wiki/2017%E2%80%9318_Premier_League',
            imgSrc: '../images/football/cards/pl/header/2017.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/pl/slider/2017/1.jpg',
                    '../images/football/cards/pl/slider/2017/2.jpg',
                    '../images/football/cards/pl/slider/2017/3.jpg'],
                scoreDefeat: '1 Goals',
                scoreWin: '4 Goals',
                matchHost: 'United States',
                runnerUp: 'Chelsea',
                winner: 'Manchester City',
                text: 'The 2017–18 Premier League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/VEHidPoEyJw'
            }
        }
    ]
},

{
    name: 'La Liga',
    seasons: [

        {
            name: '2014',
            wiki: 'https://en.wikipedia.org/wiki/2013%E2%80%9314_La_Liga',
            imgSrc: '../images/football/cards/laliga/header/2014.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/laliga/slider/2014/1.jpg',
                    '../images/football/cards/laliga/slider/2014/2.jpg',
                    '../images/football/cards/laliga/slider/2014/3.jpg'],
                scoreDefeat: '4 Goals',
                scoreWin: '6 Goals',
                matchHost: 'Italy',
                runnerUp: 'Barcelona',
                winner: 'Atletico Madrid',
                text: 'The 2014–15 La Liga League (known as the Barclays Premier League for sponsorship reasons) was the 19th season of the Premier League since its establishment in 1992. The 2010–11 fixtures were released on 17 June 2010 at 09:00 BST.[2] The season began on 14 August 2010,[3] and ended on 22 May 2011. Chelsea were the defending champions.',
                vid: 'https://www.youtube.com/embed/LF1E3J-3HrA'
            }
        },

        {
            name: '2015',
            wiki: 'https://en.wikipedia.org/wiki/2015%E2%80%9316_La_Liga',
            imgSrc: '../images/football/cards/laliga/header/2015.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/laliga/slider/2015/1.jpg',
                    '../images/football/cards/laliga/slider/2015/2.jpg',
                    '../images/football/cards/laliga/slider/2015/3.jpg'],
                scoreDefeat: '0 Goals',
                scoreWin: '3 Goals',
                matchHost: 'England',
                runnerUp: 'Granada',
                winner: 'Barcelona',
                text: 'The 2015–16 La Liga League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/LF1E3J-3HrA'
            }
        },

        {
            name: '2016',
            wiki: 'https://en.wikipedia.org/wiki/2016%E2%80%9317_La_Liga',
            imgSrc: '../images/football/cards/laliga/header/2016.jpg',
            moreDetails: {
                images: [
                    '../images/football/cards/laliga/slider/2016/1.jpg',
                    '../images/football/cards/laliga/slider/2016/2.jpg',
                    '../images/football/cards/laliga/slider/2016/3.jpg'],
                scoreDefeat: '5 Goals',
                scoreWin: '6 Goals',
                matchHost: 'United Kingdom',
                runnerUp: 'Barcelona',
                winner: 'Real Madrid',
                text: 'The 2016–17 La liga League (known as the Barclays Premier League for sponsorship reasons) was the 20th season of the Premier League since its establishment in 1992. The season began on 13 August 2011 and ended on 13 May 2012 with Manchester City sealing their first league title since 1968 with victory over Queens Park Rangers on the final day. The title was Citys first Premier League success, making them the fifth club to win the Premier League in its 20-year history',
                vid: 'https://www.youtube.com/embed/LF1E3J-3HrA'
            }
        }
    ]
}

];