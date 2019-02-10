// JavaScript Document

$(document).ready(function(){
	var selected = localStorage.getItem("Theme");
	if(selected == null){
		loadTheme("standard");
	}else{
		loadTheme(selected);
	}
});

function changeTheme(ref){
	var selected = ref.innerText;
	localStorage.setItem("Theme",selected);
	loadTheme(selected);
}

function loadTheme(selected){
	switch(selected){
		case "Standard":
			document.documentElement.style.setProperty('--hover', '#00FFF3');
			document.documentElement.style.setProperty('--index-overlay', 'rgba(0,255,243,0.55)');
			document.documentElement.style.setProperty('--t-md', 'white');
			document.documentElement.style.setProperty('--t-sm', 'white');
			document.documentElement.style.setProperty('--bg-cd', '#ccc');
			document.documentElement.style.setProperty('--cd-t-sm', 'black');
			document.documentElement.style.setProperty('--cd-t-md', 'black');
			document.documentElement.style.setProperty('--bg', '#111');
			document.documentElement.style.setProperty('--bg-rev', '#fff');
		   break;
			
		case "Day":
			document.documentElement.style.setProperty('--hover', '#00FFF3');
			document.documentElement.style.setProperty('--index-overlay', 'rgba(0,255,243,0.55)');
			document.documentElement.style.setProperty('--t-md', 'black');
			document.documentElement.style.setProperty('--t-sm', 'black');
			document.documentElement.style.setProperty('--bg-cd', '#fff');
			document.documentElement.style.setProperty('--cd-t-sm', 'black');
			document.documentElement.style.setProperty('--cd-t-md', 'black');
			document.documentElement.style.setProperty('--bg', '#fff');
			document.documentElement.style.setProperty('--bg-rev', '#000');
		   break;
			
		case "Night":
			document.documentElement.style.setProperty('--hover', '#FF6701');
			document.documentElement.style.setProperty('--index-overlay', 'rgba(255,87,0,0.55)');
			document.documentElement.style.setProperty('--t-md', 'white');
			document.documentElement.style.setProperty('--t-sm', 'white');
			document.documentElement.style.setProperty('--bg-cd', '#ccc');
			document.documentElement.style.setProperty('--cd-t-sm', 'black');
			document.documentElement.style.setProperty('--cd-t-md', 'black');
			document.documentElement.style.setProperty('--bg', '#111');
			document.documentElement.style.setProperty('--bg-rev', '#fff');
		   break;
	}
}