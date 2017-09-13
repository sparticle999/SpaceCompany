// Wonders Tab

function refreshWonderBars(){
	if(contains(resourcesUnlocked, "preciousWonderNav") === false){
		if (getResource(RESOURCE.Gem) >= 10000*floor1Price) {
			var preciousGem = 10000*floor1Price;
		}
		else {
			preciousGem = getResource(RESOURCE.Gem);
		}
		if (getResource(RESOURCE.Silver) >= 7500*floor1Price) {
			var preciousSilver = 7500*floor1Price;
		}
		else {
			preciousSilver = getResource(RESOURCE.Silver);
		}
		if (getResource(RESOURCE.Gold) >= 5000*floor1Price) {
			var preciousGold = 5000*floor1Price;
		}
		else {
			preciousGold = getResource(RESOURCE.Gold);
		}
		var preciousBar = (preciousGem+preciousSilver+preciousGold)/225*floor1Price;
		if(preciousBar <= 100){
			document.getElementById("preciousBar").innerHTML = Game.settings.format(preciousBar,2) + "%";
			document.getElementById("preciousBar").style.width = preciousBar + "%";
		}
		else{
			document.getElementById("preciousBar").innerHTML = "100%";
			document.getElementById("preciousBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activatePreciousWonder").className === "hidden") === false){
		if (getResource(RESOURCE.Gem) >= 30000*floor1Price) {
			var preciousActivateGem = 30000*floor1Price;
		}
		else {
			preciousActivateGem = getResource(RESOURCE.Gem);
		}
		if (getResource(RESOURCE.Silver) >= 20000*floor1Price) {
			var preciousActivateSilver = 20000*floor1Price;
		}
		else {
			preciousActivateSilver = getResource(RESOURCE.Silver);
		}
		if (getResource(RESOURCE.Gold) >= 10000*floor1Price) {
			var preciousActivateGold = 10000*floor1Price;
		}
		else {
			preciousActivateGold = getResource(RESOURCE.Gold);
		}
		var preciousActivateBar = (preciousActivateGem+preciousActivateSilver+preciousActivateGold)/600*floor1Price;
		if(preciousActivateBar <= 100){
			document.getElementById("preciousActivateBar").innerHTML = Game.settings.format(preciousActivateBar,2) + "%";
			document.getElementById("preciousActivateBar").style.width = preciousActivateBar + "%";
		}
		else{
			document.getElementById("preciousActivateBar").innerHTML = "100%";
			document.getElementById("preciousActivateBar").style.width = 100 + "%";
		}
	}
	if(contains(resourcesUnlocked, "energeticWonderNav") === false){
		if (getResource(RESOURCE.Wood) >= 10000*floor1Price) {
			var energeticWood = 10000*floor1Price;
		}
		else {
			energeticWood = getResource(RESOURCE.Wood);
		}
		if (getResource(RESOURCE.Charcoal) >= 5000*floor1Price) {
			var energeticCharcoal = 5000*floor1Price;
		}
		else {
			energeticCharcoal = getResource(RESOURCE.Charcoal);
		}
		if (getResource(RESOURCE.Uranium) >= 200*floor1Price) {
			var energeticUranium = 200*floor1Price;
		}
		else {
			energeticUranium = getResource(RESOURCE.Uranium);
		}
		var energeticBar = (energeticWood+energeticCharcoal+energeticUranium)/152*floor1Price;
		if(energeticBar <= 100){
			document.getElementById("energeticBar").innerHTML = Game.settings.format(energeticBar,2) + "%";
			document.getElementById("energeticBar").style.width = energeticBar + "%";
		}
		else{
			document.getElementById("energeticBar").innerHTML = "100%";
			document.getElementById("energeticBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activateEnergeticWonder").className === "hidden") === false){
		if (getResource(RESOURCE.Wood) >= 30000*floor1Price) {
			var energeticActivateWood = 30000*floor1Price;
		}
		else {
			energeticActivateWood = getResource(RESOURCE.Wood);
		}
		if (getResource(RESOURCE.Charcoal) >= 15000*floor1Price) {
			var energeticActivateCharcoal = 15000*floor1Price;
		}
		else {
			energeticActivateCharcoal = getResource(RESOURCE.Charcoal);
		}
		if (getResource(RESOURCE.Uranium) >= 500*floor1Price) {
			var energeticActivateUranium = 500*floor1Price;
		}
		else {
			energeticActivateUranium = getResource(RESOURCE.Uranium);
		}
		var energeticActivateBar = (energeticActivateWood+energeticActivateCharcoal+energeticActivateUranium)/455*floor1Price;
		if(energeticActivateBar <= 100){
			document.getElementById("energeticActivateBar").innerHTML = Game.settings.format(energeticActivateBar,2) + "%";
			document.getElementById("energeticActivateBar").style.width = energeticActivateBar + "%";
		}
		else{
			document.getElementById("energeticActivateBar").innerHTML = "100%";
			document.getElementById("energeticActivateBar").style.width = 100 + "%";
		}
	}
	if(contains(resourcesUnlocked, "techWonderNav") === false){
		if (getResource(RESOURCE.Silicon) >= 30000*floor1Price) {
			var techSilicon = 30000*floor1Price;
		}
		else {
			techSilicon = getResource(RESOURCE.Silicon);
		}
		if (getResource(RESOURCE.Gold) >= 18000*floor1Price) {
			var techGold = 18000*floor1Price;
		}
		else {
			techGold = getResource(RESOURCE.Gold);
		}
		if (getResource(RESOURCE.Gem) >= 40000*floor1Price) {
			var techGem = 40000*floor1Price;
		}
		else {
			techGem = getResource(RESOURCE.Gem);
		}
		var techBar = (techSilicon+techGold+techGem)/880*floor1Price;
		if(techBar <= 100){
			document.getElementById("techBar").innerHTML = Game.settings.format(techBar,2) + "%";
			document.getElementById("techBar").style.width = techBar + "%";
		}
		else{
			document.getElementById("techBar").innerHTML = "100%";
			document.getElementById("techBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activateTechWonder").className === "hidden") === false){
		if (getResource(RESOURCE.Silicon) >= 50000*floor1Price) {
			var techActivateSilicon = 50000*floor1Price;
		}
		else {
			techActivateSilicon = getResource(RESOURCE.Silicon);
		}
		if (getResource(RESOURCE.Gold) >= 30000*floor1Price) {
			var techActivateGold = 30000*floor1Price;
		}
		else {
			techActivateGold = getResource(RESOURCE.Gold);
		}
		if (getResource(RESOURCE.Gem) >= 60000*floor1Price) {
			var techActivateGem = 60000*floor1Price;
		}
		else {
			techActivateGem = getResource(RESOURCE.Gem);
		}
		var techActivateBar = (techActivateSilicon+techActivateGold+techActivateGem)/1400*floor1Price;
		if(techActivateBar <= 100){
			document.getElementById("techActivateBar").innerHTML = Game.settings.format(techActivateBar,2) + "%";
			document.getElementById("techActivateBar").style.width = techActivateBar + "%";
		}
		else{
			document.getElementById("techActivateBar").innerHTML = "100%";
			document.getElementById("techActivateBar").style.width = 100 + "%";
		}
	}
	if(contains(resourcesUnlocked, "meteoriteWonderNav") === false){
		if (getResource(RESOURCE.Meteorite) >= 5000*floor1Price) {
			var meteoriteMeteorite = 5000*floor1Price;
		}
		else {
			meteoriteMeteorite = getResource(RESOURCE.Meteorite);
		}
		if (getResource(RESOURCE.Ice) >= 600000*floor1Price) {
			var meteoriteIce = 600000*floor1Price;
		}
		else {
			meteoriteIce = getResource(RESOURCE.Ice);
		}
		if (getResource(RESOURCE.Silicon) >= 1200000*floor1Price) {
			var meteoriteSilicon = 1200000*floor1Price;
		}
		else {
			meteoriteSilicon = getResource(RESOURCE.Silicon);
		}
		var meteoriteBar = (meteoriteMeteorite+meteoriteIce+meteoriteSilicon)/18050*floor1Price;
		if(meteoriteBar <= 100){
			document.getElementById("meteoriteBar").innerHTML = Game.settings.format(meteoriteBar,2) + "%";
			document.getElementById("meteoriteBar").style.width = meteoriteBar + "%";
		}
		else{
			document.getElementById("meteoriteBar").innerHTML = "100%";
			document.getElementById("meteoriteBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activateMeteoriteWonder").className === "hidden") === false){
		if (getResource(RESOURCE.Meteorite) >= 10000*floor1Price) {
			var meteoriteActivateMeteorite = 10000*floor1Price;
		}
		else {
			meteoriteActivateMeteorite = getResource(RESOURCE.Meteorite);
		}
		if (getResource(RESOURCE.Ice) >= 2000000*floor1Price) {
			var meteoriteActivateIce = 2000000*floor1Price;
		}
		else {
			meteoriteActivateIce = getResource(RESOURCE.Ice);
		}
		if (getResource(RESOURCE.Silicon) >= 4000000*floor1Price) {
			var meteoriteActivateSilicon = 4000000*floor1Price;
		}
		else {
			meteoriteActivateSilicon = getResource(RESOURCE.Silicon);
		}
		var meteoriteActivateBar = (meteoriteActivateMeteorite+meteoriteActivateIce+meteoriteActivateSilicon)/60100*floor1Price;
		if(meteoriteActivateBar <= 100){
			document.getElementById("meteoriteActivateBar").innerHTML = Game.settings.format(meteoriteActivateBar,2) + "%";
			document.getElementById("meteoriteActivateBar").style.width = meteoriteActivateBar + "%";
		}
		else{
			document.getElementById("meteoriteActivateBar").innerHTML = "100%";
			document.getElementById("meteoriteActivateBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("rebuildCommsWonder").className === "hidden") === false){
		if (getResource(RESOURCE.Gold) >= 6000000*floor23Price) {
			var rebuildCommsGold = 6000000*floor23Price;
		}
		else {
			rebuildCommsGold = getResource(RESOURCE.Gold);
		}
		if (getResource(RESOURCE.Silicon) >= 10000000*floor23Price) {
			var rebuildCommsSilicon = 10000000*floor23Price;
		}
		else {
			rebuildCommsSilicon = getResource(RESOURCE.Silicon);
		}
		if (getResource(RESOURCE.Ice) >= 6000000*floor23Price) {
			var rebuildCommsIce = 6000000*floor23Price;
		}
		else {
			rebuildCommsIce = getResource(RESOURCE.Ice);
		}
		var commsWonderBar = (rebuildCommsGold+rebuildCommsSilicon+rebuildCommsIce)/220000*floor23Price;
		if(commsWonderBar <= 100){
			document.getElementById("commsWonderBar").innerHTML = Game.settings.format(commsWonderBar,2) + "%";
			document.getElementById("commsWonderBar").style.width = commsWonderBar + "%";
		}
		else{
			document.getElementById("commsWonderBar").innerHTML = "100%";
			document.getElementById("commsWonderBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("rebuildRocketWonder").className === "hidden") === false){
		if (getResource(RESOURCE.Lunarite) >= 8000000*floor23Price) {
			var rebuildRocketLunarite = 8000000*floor23Price;
		}
		else {
			rebuildRocketLunarite = getResource(RESOURCE.Lunarite);
		}
		if (getResource(RESOURCE.Titanium) >= 6000000*floor23Price) {
			var rebuildRocketTitanium = 6000000*floor23Price;
		}
		else {
			rebuildRocketTitanium = getResource(RESOURCE.Titanium);
		}
		if (getResource(RESOURCE.Metal) >= 12000000*floor23Price) {
			var rebuildRocketMetal = 12000000*floor23Price;
		}
		else {
			rebuildRocketMetal = getResource(RESOURCE.Metal);
		}
		var rocketWonderBar = (rebuildRocketLunarite+rebuildRocketTitanium+rebuildRocketMetal)/260000*floor23Price;
		if(rocketWonderBar <= 100){
			document.getElementById("rocketWonderBar").innerHTML = Game.settings.format(rocketWonderBar,2) + "%";
			document.getElementById("rocketWonderBar").style.width = rocketWonderBar + "%";
		}
		else{
			document.getElementById("rocketWonderBar").innerHTML = "100%";
			document.getElementById("rocketWonderBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("rebuildAntimatterWonder").className === "hidden") === false){
		if (getResource(RESOURCE.Uranium) >= 6000000*floor23Price) {
			var rebuildAntimatterUranium = 6000000*floor23Price;
		}
		else {
			rebuildAntimatterUranium = getResource(RESOURCE.Uranium);
		}
		if (getResource(RESOURCE.Lava) >= 10000000*floor23Price) {
			var rebuildAntimatterLava = 10000000*floor23Price;
		}
		else {
			rebuildAntimatterLava = getResource(RESOURCE.Lava);
		}
		if (getResource(RESOURCE.Oil) >= 8000000*floor23Price) {
			var rebuildAntimatterOil = 8000000*floor23Price;
		}
		else {
			rebuildAntimatterOil = getResource(RESOURCE.Oil);
		}
		if (getResource(RESOURCE.Methane) >= 6000000*floor23Price) {
			var rebuildAntimatterMethane = 6000000*floor23Price;
		}
		else {
			rebuildAntimatterMethane = getResource(RESOURCE.Methane);
		}
		var antimatterWonderBar = (rebuildAntimatterUranium+rebuildAntimatterLava+rebuildAntimatterOil+rebuildAntimatterMethane)/300000*floor23Price;
		if(antimatterWonderBar <= 100){
			document.getElementById("antimatterWonderBar").innerHTML = Game.settings.format(antimatterWonderBar,2) + "%";
			document.getElementById("antimatterWonderBar").style.width = antimatterWonderBar + "%";
		}
		else{
			document.getElementById("antimatterWonderBar").innerHTML = "100%";
			document.getElementById("antimatterWonderBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("activatePortal").className === "hidden") === false){
		if (getResource(RESOURCE.Meteorite) >= 500000*floor23Price) {
			var portalMeteorite = 500000*floor23Price;
		}
		else {
			portalMeteorite = getResource(RESOURCE.Meteorite);
		}
		if (getResource(RESOURCE.Helium) >= 8000000*floor23Price) {
			var portalHelium = 8000000*floor23Price;
		}
		else {
			portalHelium = getResource(RESOURCE.Helium);
		}
		if (getResource(RESOURCE.Silicon) >= 6000000*floor23Price) {
			var portalSilicon = 6000000*floor23Price;
		}
		else {
			portalSilicon = getResource(RESOURCE.Silicon);
		}
		var portalBar = (portalMeteorite+portalHelium+portalSilicon)/145000*floor23Price;
		if(portalBar <= 100){
			document.getElementById("portalBar").innerHTML = Game.settings.format(portalBar,2) + "%";
			document.getElementById("portalBar").style.width = portalBar + "%";
		}
		else{
			document.getElementById("portalBar").innerHTML = "100%";
			document.getElementById("portalBar").style.width = 100 + "%";
		}
	}
	if((document.getElementById("rebuildStargate").className === "hidden") === false){
		if (getResource(RESOURCE.Plasma) >= 500000*floor23Price) {
			var stargatePlasma = 500000*floor23Price;
		}
		else {
			stargatePlasma = getResource(RESOURCE.Plasma);
		}
		if (getResource(RESOURCE.Silicon) >= 920000000*floor23Price) {
			var stargateSilicon = 920000000*floor23Price;
		}
		else {
			stargateSilicon = getResource(RESOURCE.Silicon);
		}
		if (getResource(RESOURCE.Meteorite) >= 17000000*floor23Price) {
			var stargateMeteorite = 17000000*floor23Price;
		}
		else {
			stargateMeteorite = getResource(RESOURCE.Meteorite);
		}
		var stargateBar = (stargatePlasma+stargateSilicon+stargateMeteorite)/9375000*floor23Price;
		if(stargateBar <= 100){
			document.getElementById("stargateWonderBar").innerHTML = Game.settings.format(stargateBar,2) + "%";
			document.getElementById("stargateWonderBar").style.width = stargateBar + "%";
		}
		else{
			document.getElementById("stargateWonderBar").innerHTML = "100%";
			document.getElementById("stargateWonderBar").style.width = 100 + "%";
		}
	}
}

function unlockTier3(){
	document.getElementById("uraniumTier3").className = "";
	document.getElementById("lavaTier3").className = "";
	document.getElementById("oilTier3").className = "";
	document.getElementById("metalTier3").className = "";
	document.getElementById("gemTier3").className = "";
	document.getElementById("charcoalTier3").className = "";
	document.getElementById("woodTier3").className = "";
	document.getElementById("siliconTier3").className = "";
	document.getElementById("lunariteTier3").className = "";
	document.getElementById("methaneTier3").className = "";
	document.getElementById("titaniumTier3").className = "";
	document.getElementById("goldTier3").className = "";
	document.getElementById("silverTier3").className = "";
	document.getElementById("hydrogenTier3").className = "";
	document.getElementById("heliumTier3").className = "";
	document.getElementById("iceTier3").className = "";
}

function unlockTier4(){
	document.getElementById("uraniumTier4").className = "";
	document.getElementById("lavaTier4").className = "";
	document.getElementById("oilTier4").className = "";
	document.getElementById("metalTier4").className = "";
	document.getElementById("gemTier4").className = "";
	document.getElementById("charcoalTier4").className = "";
	document.getElementById("woodTier4").className = "";
	document.getElementById("siliconTier4").className = "";
	document.getElementById("lunariteTier4").className = "";
	document.getElementById("methaneTier4").className = "";
	document.getElementById("titaniumTier4").className = "";
	document.getElementById("goldTier4").className = "";
	document.getElementById("silverTier4").className = "";
	document.getElementById("hydrogenTier4").className = "";
	document.getElementById("heliumTier4").className = "";
	document.getElementById("iceTier4").className = "";
}

function unlockTier5(){
	document.getElementById("uraniumTier5").className = "";
	document.getElementById("lavaTier5").className = "";
	document.getElementById("oilTier5").className = "";
	document.getElementById("metalTier5").className = "";
	document.getElementById("gemTier5").className = "";
	document.getElementById("charcoalTier5").className = "";
	document.getElementById("woodTier5").className = "";
	document.getElementById("siliconTier5").className = "";
	document.getElementById("lunariteTier5").className = "";
	document.getElementById("methaneTier5").className = "";
	document.getElementById("titaniumTier5").className = "";
	document.getElementById("goldTier5").className = "";
	document.getElementById("silverTier5").className = "";
	document.getElementById("hydrogenTier5").className = "";
	document.getElementById("heliumTier5").className = "";
	document.getElementById("iceTier5").className = "";
}



function achievePreciousWonder(){
	if(getResource(RESOURCE.Gem) >= 10000 && getResource(RESOURCE.Silver) >= 7500 && getResource(RESOURCE.Gold) >= 5000){
		Game.resources.takeResource(RESOURCE.Gem, 10000);
		Game.resources.takeResource(RESOURCE.Silver, 7500);
		Game.resources.takeResource(RESOURCE.Gold, 5000);
		document.getElementById("preciousWonderButton").className = "hidden";
		document.getElementById("preciousProgress").className = "hidden";
		document.getElementById("preciousWonderNav").className = "";
		document.getElementById("wonderFloor1Nav").className = "";
		buttonsHidden.push("preciousProgress", "preciousWonderButton");
		resourcesUnlocked.push("preciousWonderNav", "wonderFloor1Nav");
        Game.statistics.add('wondersBuilt');
	}
}

function activatePreciousWonder(){
	if(getResource(RESOURCE.Gem) >= 30000 && getResource(RESOURCE.Silver) >= 20000 && getResource(RESOURCE.Gold) >= 10000){
		Game.resources.takeResource(RESOURCE.Gem, 30000);
		Game.resources.takeResource(RESOURCE.Silver, 20000);
		Game.resources.takeResource(RESOURCE.Gold, 10000);
		document.getElementById("nuclearPower").className = "";
		document.getElementById("activatePreciousWonder").className = "hidden";
		document.getElementById("uraniumNav").className = "innerPlanet";
		document.getElementById("preciousActivation").innerHTML = "Activated";
		document.getElementById("preciousActivation").className = "green";
		resourcesUnlocked.push("uraniumNav", "nuclearPower");
		buttonsHidden.push("activatePreciousWonder");
		activated.push("precious");
        Game.statistics.add('wondersActivated');
		newUnlock("resources");
	}
}

function achieveEnergeticWonder(){
	if(getResource(RESOURCE.Wood) >= 10000 && getResource(RESOURCE.Charcoal) >= 5000 && getResource(RESOURCE.Uranium) >= 200){
		Game.resources.takeResource(RESOURCE.Wood, 10000);
		Game.resources.takeResource(RESOURCE.Charcoal, 5000);
		Game.resources.takeResource(RESOURCE.Uranium, 200);
		document.getElementById("energeticWonderButton").className = "hidden";
		document.getElementById("energeticProgress").className = "hidden";
		document.getElementById("energeticWonderNav").className = "";
		buttonsHidden.push("energeticProgress", "energeticWonderButton");
		resourcesUnlocked.push("energeticWonderNav");
        Game.statistics.add('wondersBuilt');
	}
}

function activateEnergeticWonder(){
	if(getResource(RESOURCE.Wood) >= 30000 && getResource(RESOURCE.Charcoal) >= 15000 && getResource(RESOURCE.Uranium) >= 500){
		Game.resources.takeResource(RESOURCE.Wood, 30000);
		Game.resources.takeResource(RESOURCE.Charcoal, 15000);
		Game.resources.takeResource(RESOURCE.Uranium, 500);
		document.getElementById("magmaticPower").className = "";
		document.getElementById("activateEnergeticWonder").className = "hidden";
		document.getElementById("lavaNav").className = "innerPlanet";
		document.getElementById("energeticActivation").innerHTML = "Activated";
		document.getElementById("energeticActivation").className = "green";
		resourcesUnlocked.push("lavaNav", "magmaticPower");
		buttonsHidden.push("activateEnergeticWonder");
		activated.push("energetic");
        Game.statistics.add('wondersActivated');
		newUnlock("resources");
	}
}

function achieveTechWonder(){
	if(getResource(RESOURCE.Silicon) >= 30000 && getResource(RESOURCE.Gold) >= 18000 && getResource(RESOURCE.Gem) >= 40000){
		Game.resources.takeResource(RESOURCE.Silicon, 30000);
		Game.resources.takeResource(RESOURCE.Gold, 18000);
		Game.resources.takeResource(RESOURCE.Gem, 40000);
		document.getElementById("techWonderButton").className = "hidden";
		document.getElementById("techProgress").className = "hidden";
		document.getElementById("techWonderNav").className = "";
		buttonsHidden.push("techProgress", "techWonderButton");
		resourcesUnlocked.push("techWonderNav");
        Game.statistics.add('wondersBuilt');
	}
}

function activateTechWonder(){
	if(getResource(RESOURCE.Silicon) >= 50000 && getResource(RESOURCE.Gold) >= 30000 && getResource(RESOURCE.Gem) >= 60000){
		Game.resources.takeResource(RESOURCE.Silicon, 50000);
		Game.resources.takeResource(RESOURCE.Gold, 30000);
		Game.resources.takeResource(RESOURCE.Gem, 60000);
		unlockTier3();
		document.getElementById("activateTechWonder").className = "hidden";
		document.getElementById("techActivation").innerHTML = "Activated";
		document.getElementById("techActivation").className = "green";
		techUnlocked = true;
		buttonsHidden.push("activateTechWonder");
		activated.push("tech");
        Game.statistics.add('wondersActivated');
		newUnlock("resources");
	}
}

function achieveMeteoriteWonder(){
	if(getResource(RESOURCE.Meteorite) >= 5000 && getResource(RESOURCE.Ice) >= 600000 && getResource(RESOURCE.Silicon) >= 1200000){
		Game.resources.takeResource(RESOURCE.Meteorite, 5000);
		Game.resources.takeResource(RESOURCE.Ice, 600000);
		Game.resources.takeResource(RESOURCE.Silicon, 1200000);
		document.getElementById("meteoriteWonderButton").className = "hidden";
		document.getElementById("meteoriteProgress").className = "hidden";
		document.getElementById("meteoriteWonderNav").className = "";
		buttonsHidden.push("meteoriteProgress", "meteoriteWonderButton");
		resourcesUnlocked.push("meteoriteWonderNav");
        Game.statistics.add('wondersBuilt');
	}
}

function activateMeteoriteWonder(){
	if(getResource(RESOURCE.Meteorite) >= 10000 && getResource(RESOURCE.Ice) >= 2000000 && getResource(RESOURCE.Silicon) >= 4000000){
		Game.resources.takeResource(RESOURCE.Meteorite, 10000);
		Game.resources.takeResource(RESOURCE.Ice, 2000000);
		Game.resources.takeResource(RESOURCE.Silicon, 4000000);
		unlockTier4();
		document.getElementById("activateMeteoriteWonder").className = "hidden";
		document.getElementById("meteoriteActivation").innerHTML = "Activated";
		document.getElementById("meteoriteActivation").className = "green";
		meteoriteUnlocked = true;
		buttonsHidden.push("activateMeteoriteWonder");
		activated.push("meteorite");
        Game.statistics.add('wondersActivated');
		newUnlock("resources");

		document.getElementById("wonderFloor2Nav").className = "sideTab";
		document.getElementById("communicationWonderNav").className = "sideTab";
		document.getElementById("rocketWonderNav").className = "sideTab";
		document.getElementById("antimatterWonderNav").className = "sideTab";
		document.getElementById("portalRoomNav").className = "sideTab";
		resourcesUnlocked.push("wonderFloor2Nav", "communicationWonderNav", "rocketWonderNav", "antimatterWonderNav", "portalRoomNav");
	}
}

function rebuildCommsWonder(){
	if(getResource(RESOURCE.Gold) >= 6000000 && getResource(RESOURCE.Silicon) >= 10000000 && getResource(RESOURCE.Ice) >= 6000000){
		Game.resources.takeResource(RESOURCE.Gold, 6000000);
		Game.resources.takeResource(RESOURCE.Silicon, 10000000);
		Game.resources.takeResource(RESOURCE.Ice, 6000000);
		document.getElementById("rebuildCommsWonder").className = "hidden";
		document.getElementById("commsActivation").innerHTML = "Activated";
		document.getElementById("commsActivation").className = "green";
		document.getElementById("interstellarTab_comms_ne").className = "collapse_interstellarTab_general";
		buttonsHidden.push("rebuildCommsWonder");
		activated.push("comms");
        Game.statistics.add('wondersActivated');
		if(document.getElementById("interstellarTab").className != ""){
        	document.getElementById("interstellarTab").className = "";
        	tabsUnlocked.push("interstellarTab");
        	Game.notifySuccess("New Tab!", "You've unlocked the Interstellar Tab!");
        }
		newUnlock("interstellar");
		Game.removeExcess(tabsUnlocked, "interstellarTab");

		Game.interstellar.getInterstellarData('comms').unlocked = true;
		Game.interstellar.getInterstellarData('comms').displayNeedsUpdate = true;
	}
}

function rebuildRocketWonder(){
	if(getResource(RESOURCE.Lunarite) >= 8000000 && getResource(RESOURCE.Titanium) >= 6000000 && getResource(RESOURCE.Metal) >= 12000000){
		Game.resources.takeResource(RESOURCE.Lunarite, 8000000);
		Game.resources.takeResource(RESOURCE.Titanium, 6000000);
		Game.resources.takeResource(RESOURCE.Metal, 12000000);
		document.getElementById("rebuildRocketWonder").className = "hidden";
		document.getElementById("rocketActivation").innerHTML = "Activated";
		document.getElementById("rocketActivation").className = "green";
		buttonsHidden.push("rebuildRocketWonder");
		activated.push("rocket");
        Game.statistics.add('wondersActivated');
        if(document.getElementById("interstellarTab").className != ""){
        	document.getElementById("interstellarTab").className = "";
        	tabsUnlocked.push("interstellarTab");
        	Game.notifySuccess("New Tab!", "You've unlocked the Interstellar Tab!");
        }
		document.getElementById("interstellarTab_rocket_ne").className = "collapse_interstellarTab_general";
		newUnlock("interstellar");
		Game.removeExcess(tabsUnlocked, "interstellarTab");

		Game.interstellar.getInterstellarData('rocket').unlocked = true;
		Game.interstellar.getInterstellarData('rocket').displayNeedsUpdate = true;
	}
}

function rebuildAntimatterWonder(){
	if(getResource(RESOURCE.Uranium) >= 6000000 && getResource(RESOURCE.Lava) >= 10000000 && getResource(RESOURCE.Oil) >= 8000000 && getResource(RESOURCE.Methane) >= 6000000){
		Game.resources.takeResource(RESOURCE.Uranium, 6000000);
		Game.resources.takeResource(RESOURCE.Lava, 10000000);
		Game.resources.takeResource(RESOURCE.Oil, 8000000);
		Game.resources.takeResource(RESOURCE.Methane, 6000000);
		document.getElementById("rebuildAntimatterWonder").className = "hidden";
		document.getElementById("antimatterActivation").innerHTML = "Activated";
		document.getElementById("antimatterActivation").className = "green";
		buttonsHidden.push("rebuildAntimatterWonder");
		activated.push("antimatter");
        Game.statistics.add('wondersActivated');
        if(document.getElementById("interstellarTab").className != ""){
        	document.getElementById("interstellarTab").className = "";
        	tabsUnlocked.push("interstellarTab");
        	Game.notifySuccess("New Tab!", "You've unlocked the Interstellar Tab!");
        }
		document.getElementById("interstellarTab_antimatter_ne").className = "collapse_interstellarTab_general";
		newUnlock("interstellar");
		Game.removeExcess(tabsUnlocked, "interstellarTab");

		Game.interstellar.getInterstellarData('antimatter').unlocked = true;
		Game.interstellar.getInterstellarData('antimatter').displayNeedsUpdate = true;
	}
}

function activatePortal(){
	if(getResource(RESOURCE.Meteorite) >= 500000 && getResource(RESOURCE.Helium) >= 8000000 && getResource(RESOURCE.Silicon) >= 6000000){
		Game.resources.takeResource(RESOURCE.Meteorite, 500000);
		Game.resources.takeResource(RESOURCE.Helium, 8000000);
		Game.resources.takeResource(RESOURCE.Silicon, 6000000);
		document.getElementById("activatePortal").className = "hidden";
		document.getElementById("portalRoomActivation").innerHTML = "Activated";
		document.getElementById("portalRoomActivation").className = "green";
		document.getElementById("wonderFloor3Nav").className = "sideTab";
		document.getElementById("stargateNav").className = "sideTab";
		resourcesUnlocked.push("wonderFloor3Nav", "stargateNav");
		buttonsHidden.push("activatePortal");
		activated.push("portalRoom");
		newUnlock("wonder");
	}
}

function rebuildStargate(){
	if(getResource(RESOURCE.Plasma) >= 500000 && getResource(RESOURCE.Silicon) >= 920000000 && getResource(RESOURCE.Meteorite) >= 17000000){
		Game.resources.takeResource(RESOURCE.Plasma, 500000);
		Game.resources.takeResource(RESOURCE.Silicon, 920000000);
		Game.resources.takeResource(RESOURCE.Meteorite, 17000000);
		document.getElementById("rebuildStargate").className = "hidden";
		document.getElementById("stargateActivation").innerHTML = "Activated";
		document.getElementById("stargateActivation").className = "green";
		document.getElementById("interstellarTab_travel_ne").className = "collapse_interstellarTab_general";
		buttonsHidden.push("rebuildStargate");
		activated.push("stargate");
		Game.statistics.add('wondersActivated');
		if(document.getElementById("interstellarTab").className != ""){
			document.getElementById("interstellarTab").className = "";
			tabsUnlocked.push("interstellarTab");
			Game.notifySuccess("New Tab!", "You've unlocked the Interstellar Tab!");
		}
		newUnlock("interstellar");

		Game.interstellar.getInterstellarData('stargate').unlocked = true;
		Game.interstellar.getInterstellarData('stargate').displayNeedsUpdate = true;
	}
}
