var oil = 0; var oilStorage = 50; var oilGain = 1;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalStorageCost = 50; var metalGain = 1; var metalps = 0;
var miner = 0; var minerGain = 1;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemStorageCost = 50; var gemGain = 1; var gemps = 0;
var extractor = 0; var extractorGain = 1;
var charcoal = 0; var charcoalStorage = 50; var charcoalNextStorage = 100; var charcoalStorageCost = 100; var charcoalGain = 1; var charcoalps = 0;
var wood = 0; var woodStorage = 50; var woodNextStorage = 100; var woodStorageCost = 50; var woodGain = 1; var woodps = 0;
var woodcutter = 0; var woodcutterGain = 1;
var science = 0; var scienceps = 0;
var lab = 0; var labGain = 0.1; var labWoodCost = 10; var labGemCost = 15; var labMetalCost = 20;

function refresh(){
	document.getElementById("oil").innerHTML = oil;
	document.getElementById("metal").innerHTML = metal;
	document.getElementById("gem").innerHTML = gem;
	document.getElementById("charcoal").innerHTML = charcoal;
	document.getElementById("wood").innerHTML = wood;
	document.getElementById("science").innerHTML = science;
}

function refreshPerSec(){
	metalps = (miner * minerGain)+(0 * 0)+(0 * 0);
	gemps = (extractor * extractorGain)+(0 * 0)+(0 * 0);
	woodps = (woodcutter * woodcutterGain)+(0 * 0)+(0 * 0);
	scienceps = (lab * labGain);
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
	science += scienceps;
	science = Math.round(science*10)/10;
}

// Gain Buttons

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

function gainCharcoal(){
	if(charcoal < charcoalStorage){
		wood -= (charcoalGain*2);
		charcoal += charcoalGain;
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

// Resources Tab

function upgradeMetalStorage(){
	if(metal >= metalStorageCost){
		metal -= metalStorageCost;
		metalStorage = metalNextStorage;
		metalNextStorage *= 2;
		metalStorageCost *= 2;
		refresh();
		document.getElementById("metalStorage").innerHTML = metalStorage;
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

function buildLab(){
	if(wood >= labWoodCost && gem >= labGemCost && metal >= labMetalCost){
		wood -= labWoodCost;
		gem -= labGemCost;
		metal -= labMetalCost;
		lab += 1;
		labWoodCost = Math.floor(10 * Math.pow(1.1,lab + 1));
		labGemCost = Math.floor(15 * Math.pow(1.1,lab + 1));
		labMetalCost = Math.floor(20 * Math.pow(1.1,lab + 1));
		document.getElementById("labWoodCost").innerHTML = labWoodCost;
		document.getElementById("labGemCost").innerHTML = labGemCost;
		document.getElementById("labMetalCost").innerHTML = labMetalCost;
		refresh();
		refreshPerSec();
	}
}


function unlockOil(){
	if(science >= 15){
		science -= 15;
		document.getElementById("unlockOil").className = "hidden";
		document.getElementById("oilNav").className = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		refresh();
	}
}

function unlockStorage(){
	if(science >= 5){
		science -= 5;
		document.getElementById("unlockStorage").className = "hidden";
	//	document.getElementById("oilStorageUpgrade").className = "";
		document.getElementById("metalStorageUpgrade").className = "";
		document.getElementById("gemStorageUpgrade").className = "";
		document.getElementById("woodStorageUpgrade").className = "";
	}
}

function unlockBasicEnergy(){
	if(science >= 10){
		science -= 10;
		document.getElementById("charcoalNav").className = "";
		document.getElementById("energyNav").className = "";
		document.getElementById("metalNav1").style.border = "";
		document.getElementById("metalNav2").style.border = "";
		document.getElementById("metalNav3").style.border = "";
		document.getElementById("oilNav1").style.border = "";
		document.getElementById("oilNav2").style.border = "";
		document.getElementById("oilNav3").style.border = "";
		document.getElementById("unlockBasicEnergy").className = "hidden";
	}
}

//Space Tech Tree Tab

window.setInterval(function(){
	gainResources();
	refresh();
},1000)
