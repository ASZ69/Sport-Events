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
}

];