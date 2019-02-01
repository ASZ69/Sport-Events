// JavaScript Document

var events = angular.module("events",[]);

events.controller("categoriesControl",function($scope,$filter){
	$scope.showCat = function(event){
		var clickedRefer = event.currentTarget;
		var category = clickedRefer.innerHTML;
		
		$scope.eventsArray = $filter('filter')(dataList, {name: category});
	};

    $scope.viewMore = function (event) {
        var clickedRefer = event.currentTarget;
        var sessionName = clickedRefer.parentElement.getElementsByTagName("h3")[0].innerHTML;

        $(".right-view").css("display", "none");
        $(".right-page").css("display", "block");

        $scope.moreDetailsArray = $filter('filter')($scope.eventsArray[0].seasons, { name: sessionName});
    };

	$scope.eventsArray = $filter('filter')(dataList, {name: 'ICC ODI WorldCup'});
	
	$scope.categoryArray = dataList;
	
});

var dataList = [{
    name: 'ICC ODI WorldCup',
    seasons: [

        {
            name: 'ICC 1992',
            wiki: 'https://en.wikipedia.org/wiki/1992_Cricket_World_Cup_Final',
            imgSrc: '../images/cricket/cards/icc/header/1992.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '227 all out (49.2 overs)',
                scoreWin: '249/6 (50 overs)',
                matchHost: 'Australia',
                runnerUp: 'England',
                winner: 'Pakistan'
            }
        },

        {
            name: 'ICC 1996',
            wiki: 'https://en.wikipedia.org/wiki/1996_Cricket_World_Cup_Final',
            imgSrc: '../images/cricket/cards/icc/header/1996.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '241/7 (50 overs)',
                scoreWin: '245/3 (46.2 overs)',
                matchHost: 'Pakistan',
                runnerUp: 'Australia',
                winner: 'Sri Lanka'
            }
        },

        {
            name: 'ICC 1999',
            wiki: 'https://en.wikipedia.org/wiki/1999_Cricket_World_Cup_Final',
            imgSrc: '../images/cricket/cards/icc/header/1999.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '132 all out (39 overs)',
                scoreWin: '133/2 (20.1 overs)',
                matchHost: 'England',
                runnerUp: 'Pakistan',
                winner: 'Australia'
            }
        },

        {
            name: 'ICC 2003',
            wiki: 'https://en.wikipedia.org/wiki/2003_Cricket_World_Cup_Final',
            imgSrc: '../images/cricket/cards/icc/header/2003.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '234 all out (39.2 overs)',
                scoreWin: '359/2 (50 overs)',
                matchHost: 'South Africa',
                runnerUp: 'India',
                winner: 'Australia'
            }
        },

        {
            name: 'ICC 2007',
            wiki: 'https://en.wikipedia.org/wiki/2007_Cricket_World_Cup_Final',
            imgSrc: '../images/cricket/cards/icc/header/2007.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '215/8 (36 overs)',
                scoreWin: '281/4 (38 overs)',
                matchHost: 'West Indies',
                runnerUp: 'Sri Lanka',
                winner: 'Australia'
            }
        },

        {
            name: 'ICC 2011',
            wiki: 'https://en.wikipedia.org/wiki/2011_Cricket_World_Cup_Final',
            imgSrc: '../images/cricket/cards/icc/header/2011.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '274/6 (50 overs)',
                scoreWin: '277/4 (48.2 overs)',
                matchHost: 'India',
                runnerUp: 'Sri Lanka',
                winner: 'India'
            }
        },

        {
            name: 'ICC 2015',
            wiki: 'https://en.wikipedia.org/wiki/2015_Cricket_World_Cup_Final',
            imgSrc: '../images/cricket/cards/icc/header/2015.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '183 all out (45 overs)',
                scoreWin: '186/3 (33.1 overs)',
                matchHost: 'Australia',
                runnerUp: 'New Zealand',
                winner: 'Australia'
            }
        }
    ]
},

{
    name: 'ICC T20 WorldCup',
    seasons: [

        {
            name: 'ICC 2007',
            wiki: 'https://en.wikipedia.org/wiki/2007_ICC_World_Twenty20',
            imgSrc: '../images/cricket/cards/icc-t20/header/2007.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '152 all out (19.4 overs)',
                scoreWin: '157/5 (20 overs)',
                matchHost: 'South Africa',
                runnerUp: 'Pakistan',
                winner: 'India'
            }
        },

        {
            name: 'ICC 2009',
            wiki: 'https://en.wikipedia.org/wiki/2009_ICC_World_Twenty20',
            imgSrc: '../images/cricket/cards/icc-t20/header/2009.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '138/6 (20 overs)',
                scoreWin: '139/2 (18.4 overs)',
                matchHost: 'England',
                runnerUp: 'Sri Lanka',
                winner: 'Pakistan'
            }
        },

        {
            name: 'ICC 2010',
            wiki: 'https://en.wikipedia.org/wiki/2010_ICC_World_Twenty20',
            imgSrc: '../images/cricket/cards/icc-t20/header/2010.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '147/6 (20 overs)',
                scoreWin: '148/3 (17 overs)',
                matchHost: 'West Indies',
                runnerUp: 'Australia',
                winner: 'England'
            }
        },

        {
            name: 'ICC 2012',
            wiki: 'https://en.wikipedia.org/wiki/2012_ICC_World_Twenty20',
            imgSrc: '../images/cricket/cards/icc-t20/header/2012.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '101 all out (18.4 overs)',
                scoreWin: '137/6 (20 overs)',
                matchHost: 'Sri Lanka',
                runnerUp: 'Sri Lanka',
                winner: 'West Indies'
            }
        },

        {
            name: 'ICC 2014',
            wiki: 'https://en.wikipedia.org/wiki/2014_ICC_World_Twenty20',
            imgSrc: '../images/cricket/cards/icc-t20/header/2014.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '130/4 (20 overs)',
                scoreWin: '134/4 (17.5 overs)',
                matchHost: 'Bangladesh',
                runnerUp: 'India',
                winner: 'Sri Lanka'
            }
        },

        {
            name: 'ICC 2016',
            wiki: 'https://en.wikipedia.org/wiki/2016_ICC_World_Twenty20',
            imgSrc: '../images/cricket/cards/icc-t20/header/2016.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '155/9 (20 overs)',
                scoreWin: '161/6 (19.4 overs)',
                matchHost: 'India',
                runnerUp: 'England',
                winner: 'West Indies'
            }
        }
    ]
},

{
    name: 'Asia Cup',
    seasons: [

        {
            name: 'Asia Cup 2000',
            wiki: 'https://en.wikipedia.org/wiki/2000_Asia_Cup',
            imgSrc: '../images/cricket/cards/asia-cup/header/2000.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '238 (45.2 overs)',
                scoreWin: '277/4 (50 overs)',
                matchHost: 'Bangladesh',
                runnerUp: 'Sri Lanka',
                winner: 'Pakistan'
            }
        },

        {
            name: 'Asia Cup 2004',
            wiki: 'https://en.wikipedia.org/wiki/2004_Asia_Cup',
            imgSrc: '../images/cricket/cards/asia-cup/header/2004.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '203/9 (50 overs)',
                scoreWin: '148/6 (20 overs)',
                matchHost: 'Sri Lanka',
                runnerUp: 'India',
                winner: 'Sri Lanka'
            }
        },

        {
            name: 'Asia Cup 2008',
            wiki: 'https://en.wikipedia.org/wiki/2008_Asia_Cup',
            imgSrc: '../images/cricket/cards/asia-cup/header/2008.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '173 (39.3 overs)',
                scoreWin: '273 (49.5 overs)',
                matchHost: 'Pakistan',
                runnerUp: 'India',
                winner: 'Sri Lanka'
            }
        },

        {
            name: 'Asia Cup 2010',
            wiki: 'https://en.wikipedia.org/wiki/2010_Asia_Cup',
            imgSrc: '../images/cricket/cards/asia-cup/header/2010.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '187 (44.4 overs)',
                scoreWin: '268/6 (50 overs)',
                matchHost: 'Sri Lanka',
                runnerUp: 'Sri Lanka',
                winner: 'India'
            }
        },

        {
            name: 'Asia Cup 2012',
            wiki: 'https://en.wikipedia.org/wiki/2012_Asia_Cup',
            imgSrc: '../images/cricket/cards/asia-cup/header/2012.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '234/8 (50 overs)',
                scoreWin: '236/9 (50 overs)',
                matchHost: 'Bangladesh',
                runnerUp: 'Bangladesh',
                winner: 'Pakistan'
            }
        },

        {
            name: 'Asia Cup 2014',
            wiki: 'https://en.wikipedia.org/wiki/2014_Asia_Cup',
            imgSrc: '../images/cricket/cards/asia-cup/header/2014.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '260/5 (50 overs)',
                scoreWin: '261/5 (46.2 overs)',
                matchHost: 'Bangladesh',
                runnerUp: 'Pakistan',
                winner: 'Sri Lanka'
            }
        },

        {
            name: 'Asia Cup 2016',
            wiki: 'https://en.wikipedia.org/wiki/2016_Asia_Cup',
            imgSrc: '../images/cricket/cards/asia-cup/header/2016.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '120/5 (15 overs)',
                scoreWin: '122/2 (13.5 overs)',
                matchHost: 'Bangladesh',
                runnerUp: 'Bangladesh',
                winner: 'India'
            }
        },

        {
            name: 'Asia Cup 2018',
            wiki: 'https://en.wikipedia.org/wiki/2018_Asia_Cup',
            imgSrc: '../images/cricket/cards/asia-cup/header/2018.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '222 (48.3 overs)',
                scoreWin: '223/7 (50 overs)',
                matchHost: 'United Arab Emirates',
                runnerUp: 'Bangladesh',
                winner: 'India'
            }
        }
    ]
},

{
    name: 'Pakistan Super League',
    seasons: [

        {
            name: 'PSL 2016',
            wiki: 'https://en.wikipedia.org/wiki/2016_Pakistan_Super_League',
            imgSrc: '../images/cricket/cards/psl/header/2016.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '174/7 (20 overs)',
                scoreWin: '175/4 (18.4 overs)',
                matchHost: 'Dubai',
                runnerUp: 'Quetta Gladiators',
                winner: 'Islamabad United'
            }
        },

        {
            name: 'PSL 2017',
            wiki: 'https://en.wikipedia.org/wiki/2017_Pakistan_Super_League',
            imgSrc: '../images/cricket/cards/psl/header/2017.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '90 (16.3 Overs)',
                scoreWin: '148/6 (20 overs)',
                matchHost: 'Lahore',
                runnerUp: 'Quetta Gladiators',
                winner: 'Peshawar Zalmi'
            }
        },

        {
            name: 'PSL 2018',
            wiki: 'https://en.wikipedia.org/wiki/2018_Pakistan_Super_League',
            imgSrc: '../images/cricket/cards/psl/header/2018.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '148/9 (20 overs)',
                scoreWin: '154/7 (16.5 overs)',
                matchHost: 'Karachi',
                runnerUp: 'Peshawar Zalmi',
                winner: 'Islamabad United'
            }
        }
    ]
},

{
    name: 'Indian Premier League',
    seasons: [

        {
            name: 'IPL 2013',
            wiki: 'https://en.wikipedia.org/wiki/2013_Indian_Premier_League',
            imgSrc: '../images/cricket/cards/ipl/header/2013.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '125/9 (20 overs)',
                scoreWin: '148/9 (20 overs)',
                matchHost: 'Eden Gardens, Kolkata',
                runnerUp: 'Chennai Super Kings',
                winner: 'Mumbai Indians'
            }
        },

        {
            name: 'IPL 2014',
            wiki: 'https://en.wikipedia.org/wiki/2014_Indian_Premier_League',
            imgSrc: '../images/cricket/cards/ipl/header/2014.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '199/4 (20 overs)',
                scoreWin: '200/7 (19.3 overs)',
                matchHost: 'M. Chinnaswamy Stadium, Bengaluru',
                runnerUp: 'Kings XI Punjab',
                winner: 'Kolkata Knight Riders'
            }
        },

        {
            name: 'IPL 2015',
            wiki: 'https://en.wikipedia.org/wiki/2015_Indian_Premier_League',
            imgSrc: '../images/cricket/cards/ipl/header/2015.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '161/8 (20 overs)',
                scoreWin: '202/5 (20 overs)',
                matchHost: 'Eden Gardens, Kolkata',
                runnerUp: 'Chennai Super Kings',
                winner: 'Mumbai Indians'
            }
        },

        {
            name: 'IPL 2016',
            wiki: 'https://en.wikipedia.org/wiki/2016_Indian_Premier_League',
            imgSrc: '../images/cricket/cards/ipl/header/2016.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '200/7 (20 overs)',
                scoreWin: '208/7 (20 overs)',
                matchHost: 'M. Chinnaswamy Stadium, Bengaluru',
                runnerUp: 'Royal Challengers Bangalore',
                winner: 'Sunrisers Hyderabad'
            }
        },

        {
            name: 'IPL 2017',
            wiki: 'https://en.wikipedia.org/wiki/2017_Indian_Premier_League',
            imgSrc: '../images/cricket/cards/ipl/header/2017.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '128/6 (20 overs)',
                scoreWin: '129/8 (20 overs)',
                matchHost: 'Rajiv Gandhi International Cricket Stadium, Hyderabad',
                runnerUp: 'Rising Pune Supergiant',
                winner: 'Mumbai Indians'
            }
        },

        {
            name: 'IPL 2018',
            wiki: 'https://en.wikipedia.org/wiki/2018_Indian_Premier_League',
            imgSrc: '../images/cricket/cards/ipl/header/2018.jpg',
            moreDetails: {
                images: [
                    '../images/my.jpg',
                    'asdasda',
                    'adsfda'],
                scoreDefeat: '178/6 (20 overs)',
                scoreWin: '181/2 (18.3 overs)',
                matchHost: 'Wankhede Stadium, Mumbai',
                runnerUp: 'Sunrisers Hyderabad',
                winner: 'Chennai Super Kings'
            }
        }
    ]
}

];