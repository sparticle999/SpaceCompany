var gas = 0; var gasStorage = 50; var gasGain = 1;
var oil = 0; var oilStorage = 50; var oilGain = 1;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalStorageCost = 50; var metalGain = 1; var metalps = 0;
	var miner = 0; var minerGain = 1;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemStorageCost = 50; var gemGain = 1; var gemps = 0;
	var extractor = 0; var extractorGain = 1;
var wood = 0; var woodStorage = 50; var woodNextStorage = 100; var woodStorageCost = 50; var woodGain = 1; var woodps = 0;
	var woodcutter = 0; var woodcutterGain = 1;
var science = 0; var scienceGain = 1;

function refresh(){
	document.getElementById("gas").innerHTML = gas;
	document.getElementById("oil").innerHTML = oil;
	document.getElementById("metal").innerHTML = metal;
	document.getElementById("gem").innerHTML = gem;
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("metal2").innerHTML = metal;
	document.getElementById("gem2").innerHTML = gem;
	document.getElementById("wood2").innerHTML = wood;
	document.getElementById("science").innerHTML = science;
}

function refreshPerSec(){
	metalps = (miner * minerGain)+(0 * 0)+(0 * 0);
	gemps = (extractor * extractorGain)+(0 * 0)+(0 * 0);
	woodps = (woodcutter * woodcutterGain)+(0 * 0)+(0 * 0);
	document.getElementById("metalps").innerHTML = metalps;
	document.getElementById("gemps").innerHTML = gemps;
	document.getElementById("woodps").innerHTML = woodps;
}

function gainResources(){
	if(metal + metalps < metalStorage){
		metal += metalps;
	}
	else{
		metal = metalStorage;
	}
	if(gem + gemps < gemStorage){
		gem += gemps;
	}
	else{
		gem = gemStorage;
	}
	if(wood + woodps < woodStorage){
		wood += woodps;
	}
	else{
		wood = woodStorage;
	}
}

// Gain Buttons

function gainGas(){
	if(gas < gasStorage){
		gas += gasGain;
		refresh();
	}
}

function gainOil(){
	if(oil < oilStorage){
		oil += oilGain;
		refresh();
	}
}

function gainMetal(){
	if(metal < metalStorage){
		metal += metalGain;
		refresh();
	}
}

function gainGem(){
	if(gem < gemStorage){
		gem += gemGain;
		refresh();
	}
}

function gainWood(){
	if(wood < woodStorage){
		wood += woodGain;
		refresh();
	}
}

function gainScience(){
	science += scienceGain;
	refresh();
}

// Crafting Tab

function upgradeMetalStorage(){
	if(metal >= metalStorageCost){
		metal -= metalStorageCost;
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
		metalStorageCost *= 2;
		refresh();
		document.getElementById("metalStorage").innerHTML = metalStorage;
		document.getElementById("metalStorage2").innerHTML = metalStorage;
		document.getElementById("metalNextStorage").innerHTML = metalNextStorage;
		document.getElementById("metalStorageCost").innerHTML = metalStorageCost;
	}
}

function upgradeGemStorage(){
	if(gem >= gemStorageCost){
		gem -= gemStorageCost;
		gemStorage = gemNextStorage;
		gemNextStorage *= 2;
		gemStorageCost *= 2;
		refresh();
		document.getElementById("gemStorage").innerHTML = gemStorage;
		document.getElementById("gemStorage2").innerHTML = gemStorage;
		document.getElementById("gemNextStorage").innerHTML = gemNextStorage;
		document.getElementById("gemStorageCost").innerHTML = gemStorageCost;
	}
}

function upgradeWoodStorage(){
	if(wood >= woodStorageCost){
		wood -= woodStorageCost;
		woodStorage = woodNextStorage;
		woodNextStorage *= 2;
		woodStorageCost *= 2;
		refresh();
		document.getElementById("woodStorage").innerHTML = woodStorage;
		document.getElementById("woodStorage2").innerHTML = woodStorage;
		document.getElementById("woodNextStorage").innerHTML = woodNextStorage;
		document.getElementById("woodStorageCost").innerHTML = woodStorageCost;
	}
}

function getMiner(){
	if(metal >= 10 && wood >= 5){
		metal -= 10;
		wood -= 5;
		miner += 1;
		document.getElementById("miner").innerHTML = miner;
		refresh();
		refreshPerSec();
	}
}

function getExtractor(){
	if(metal >= 30){
		metal -= 30;
		extractor += 1;
		document.getElementById("extractor").innerHTML = extractor;
		refresh();
		refreshPerSec();
	}
}

function getWoodcutter(){
	if(metal >= 10 && wood >= 5){
		metal -= 10;
		wood -= 5;
		woodcutter += 1;
		document.getElementById("woodcutter").innerHTML = woodcutter;
		refresh();
		refreshPerSec();
	}
}

// Research Tab

	//Science Tab

function buildLab(){
	if(science >= 20){
		if(metal >= 20){
			science -= 20;
			metal -= 20;
			scienceGain *= 2;
			document.getElementById("scienceGain").innerHTML = scienceGain;
			refresh();
			document.getElementById("labTab").className = "hidden";
		}
		else{
			alert("Not Enough Metal");
		}
	}
	else{
		alert("Not Enough Science");
	}
}

	//Unlock Resources Tab

function unlockGas(){
	if(science >= 100){
		science -= 100;
		document.getElementById("unlockGas").className = "hidden";
		document.getElementById("gasNav").className = "";
		document.getElementById("oilNav1").style.border = "";
		document.getElementById("oilNav2").style.border = "";
		refresh();
	}
}

function unlockOil(){
	if(science >= 50){
		science -= 50;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		refresh();
	}
}

	//Resource Tech Tree Tab

function unlockStorage(){
	if(science >= 100){
		science -= 100;
		document.getElementById("unlockStorage").className = "hidden";
	//	document.getElementById("gasStorageUpgrade").className = "";
	//	document.getElementById("oilStorageUpgrade").className = "";
		document.getElementById("metalStorageUpgrade").className = "";
		document.getElementById("gemStorageUpgrade").className = "";
		document.getElementById("woodStorageUpgrade").className = "";
	}
}

	//Space Tech Tree Tab

window.setInterval(function(){
	gainResources();
	refresh();
},1000)
