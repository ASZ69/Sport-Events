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
			document.documentElement.style.setProperty('--hover', '#FCFFE5');
			document.documentElement.style.setProperty('--index-overlay', 'rgba(252,255,229,0.65)');
			document.documentElement.style.setProperty('--hover-btn', 'rgba(252,255,229,1)');
			document.documentElement.style.setProperty('--t-md', '#D03E3D');
			document.documentElement.style.setProperty('--t-sm', '#00c07f');
			document.documentElement.style.setProperty('--bg-cd', '#262D36');
			document.documentElement.style.setProperty('--cd-t-sm', '#00c07f');
			document.documentElement.style.setProperty('--cd-t-md', '#D03E3D');
			document.documentElement.style.setProperty('--bg', '#313d4b');
			document.documentElement.style.setProperty('--bg-rev', '#f9f8fd');
		   break;
			
		case "Day":
			document.documentElement.style.setProperty('--hover', '#00FFF3');
			document.documentElement.style.setProperty('--index-overlay', 'rgba(0,255,243,0.55)');
			document.documentElement.style.setProperty('--hover-btn', 'rgba(0,255,243,1)');
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
			document.documentElement.style.setProperty('--hover-btn', 'rgba(255,87,0,1)');
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