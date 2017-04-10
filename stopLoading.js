window.setInterval(function(){
	if(loadVal >= 5){
		if(pageLoaded === true){
			document.getElementById("loadScreen").className = "hidden";
			document.getElementById("game").className = "container";
			loadVal = 0;
		}
	}
},1000);