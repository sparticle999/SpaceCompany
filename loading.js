var op = 1;
var opUp = false;
var loadVal = 0;

window.setInterval(function(){
	if(document.getElementById("loadScreen").className === ""){
		loadVal += 0.2
		if(op <= 0.3){
			opUp = true;
		}
		if(op >= 0.9){
			opUp = false;
		}
		if(opUp === true){
			op += 0.05;
		}
		if(opUp === false){
			op -= 0.05;
		}
		document.getElementById("loadLogo").style.opacity = op;
	}
},100);