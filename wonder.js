// Wonders Tab

function refreshWonderBars(){
	if(contains(resourcesUnlocked, "preciousWonderNav") === false){
		if(gem >= 10000){
			var preciousGem = 10000;
		}
		else{preciousGem = gem;}
		if(silver >= 7500){
			var preciousSilver = 7500;
		}
		else{preciousSilver = silver;}
		if(gold >= 5000){
			var preciousGold = 5000;
		}
		else{preciousGold = gold;}
		var preciousBar = (preciousGem+preciousSilver+preciousGold)/225;
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
		if(gem >= 30000){
			var preciousActivateGem = 30000;
		}
		else{preciousActivateGem = gem;}
		if(silver >= 20000){
			var preciousActivateSilver = 20000;
		}
		else{preciousActivateSilver = silver;}
		if(gold >= 10000){
			var preciousActivateGold = 10000;
		}
		else{preciousActivateGold = gold;}
		var preciousActivateBar = (preciousActivateGem+preciousActivateSilver+preciousActivateGold)/600;
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
		if(wood >= 10000){
			var energeticWood = 10000;
		}
		else{energeticWood = wood;}
		if(charcoal >= 5000){
			var energeticCharcoal = 5000;
		}
		else{energeticCharcoal = charcoal;}
		if(uranium >= 200){
			var energeticUranium = 200;
		}
		else{energeticUranium = uranium;}
		var energeticBar = (energeticWood+energeticCharcoal+energeticUranium)/152;
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
		if(wood >= 30000){
			var energeticActivateWood = 30000;
		}
		else{energeticActivateWood = wood;}
		if(charcoal >= 15000){
			var energeticActivateCharcoal = 15000;
		}
		else{energeticActivateCharcoal = charcoal;}
		if(uranium >= 500){
			var energeticActivateUranium = 500;
		}
		else{energeticActivateUranium = uranium;}
		var energeticActivateBar = (energeticActivateWood+energeticActivateCharcoal+energeticActivateUranium)/455;
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
		if(silicon >= 30000){
			var techSilicon = 30000;
		}
		else{techSilicon = silicon;}
		if(gold >= 18000){
			var techGold = 18000;
		}
		else{techGold = gold;}
		if(gem >= 40000){
			var techGem = 40000;
		}
		else{techGem = gem;}
		var techBar = (techSilicon+techGold+techGem)/880;
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
		if(silicon >= 50000){
			var techActivateSilicon = 50000;
		}
		else{techActivateSilicon = silicon;}
		if(gold >= 30000){
			var techActivateGold = 30000;
		}
		else{techActivateGold = gold;}
		if(gem >= 60000){
			var techActivateGem = 60000;
		}
		else{techActivateGem = gem;}
		var techActivateBar = (techActivateSilicon+techActivateGold+techActivateGem)/1400;
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
		if(meteorite >= 5000){
			var meteoriteMeteorite = 5000;
		}
		else{meteoriteMeteorite = meteorite;}
		if(ice >= 600000){
			var meteoriteIce = 600000;
		}
		else{meteoriteIce = ice;}
		if(silicon >= 1200000){
			var meteoriteSilicon = 1200000;
		}
		else{meteoriteSilicon = silicon;}
		var meteoriteBar = (meteoriteMeteorite+meteoriteIce+meteoriteSilicon)/18050;
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
		if(meteorite >= 10000){
			var meteoriteActivateMeteorite = 10000;
		}
		else{meteoriteActivateMeteorite = meteorite;}
		if(ice >= 2000000){
			var meteoriteActivateIce = 2000000;
		}
		else{meteoriteActivateIce = ice;}
		if(silicon >= 4000000){
			var meteoriteActivateSilicon = 4000000;
		}
		else{meteoriteActivateSilicon = silicon;}
		var meteoriteActivateBar = (meteoriteActivateMeteorite+meteoriteActivateIce+meteoriteActivateSilicon)/60100;
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
		if(gold >= 6000000){
			var rebuildCommsGold = 6000000;
		}
		else{rebuildCommsGold = gold;}
		if(silicon >= 10000000){
			var rebuildCommsSilicon = 10000000;
		}
		else{rebuildCommsSilicon = silicon;}
		if(ice >= 6000000){
			var rebuildCommsIce = 6000000;
		}
		else{rebuildCommsIce = ice;}
		var commsWonderBar = (rebuildCommsGold+rebuildCommsSilicon+rebuildCommsIce)/220000;
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
		if(lunarite >= 8000000){
			var rebuildRocketLunarite = 8000000;
		}
		else{rebuildRocketLunarite = lunarite;}
		if(titanium >= 6000000){
			var rebuildRocketTitanium = 6000000;
		}
		else{rebuildRocketTitanium = titanium;}
		if(metal >= 12000000){
			var rebuildRocketMetal = 12000000;
		}
		else{rebuildRocketMetal = metal;}
		var rocketWonderBar = (rebuildRocketLunarite+rebuildRocketTitanium+rebuildRocketMetal)/260000;
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
		if(uranium >= 6000000){
			var rebuildAntimatterUranium = 6000000;
		}
		else{rebuildAntimatterUranium = uranium;}
		if(lava >= 10000000){
			var rebuildAntimatterLava = 10000000;
		}
		else{rebuildAntimatterLava = lava;}
		if(oil >= 8000000){
			var rebuildAntimatterOil = 8000000;
		}
		else{rebuildAntimatterOil = oil;}
		if(methane >= 6000000){
			var rebuildAntimatterMethane = 6000000;
		}
		else{rebuildAntimatterMethane = methane;}
		var antimatterWonderBar = (rebuildAntimatterUranium+rebuildAntimatterLava+rebuildAntimatterOil+rebuildAntimatterMethane)/300000;
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
		if(meteorite >= 500000){
			var portalMeteorite = 500000;
		}
		else{portalMeteorite = meteorite;}
		if(helium >= 8000000){
			var portalHelium = 8000000;
		}
		else{portalHelium = helium;}
		if(silicon >= 6000000){
			var portalSilicon = 6000000;
		}
		else{portalSilicon = silicon;}
		var portalBar = (portalMeteorite+portalHelium+portalSilicon)/145000;
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
		if(plasma >= 500000){
			var stargatePlasma = 500000;
		}
		else{stargatePlasma = plasma;}
		if(silicon >= 920000000){
			var stargateSilicon = 920000000;
		}
		else{stargateSilicon = silicon;}
		if(meteorite >= 17000000){
			var stargateMeteorite = 17000000;
		}
		else{stargateMeteorite = meteorite;}
		var stargateBar = (stargatePlasma+stargateSilicon+stargateMeteorite)/9375000;
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

function achievePreciousWonder(){
	if(gem >= 10000 && silver >= 7500 && gold >= 5000){
		gem-= 10000;
		silver -= 7500;
		gold -= 5000;
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
	if(gem >= 30000 && silver >= 20000 && gold >= 10000){
		gem -= 30000;
		silver -= 20000;
		gold -= 10000;
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
	if(wood >= 10000 && charcoal >= 5000 && uranium >= 200){
		wood-= 10000;
		charcoal -= 5000;
		uranium -= 200;
		document.getElementById("energeticWonderButton").className = "hidden";
		document.getElementById("energeticProgress").className = "hidden";
		document.getElementById("energeticWonderNav").className = "";
		buttonsHidden.push("energeticProgress", "energeticWonderButton");
		resourcesUnlocked.push("energeticWonderNav");
        Game.statistics.add('wondersBuilt');
	}
}

function activateEnergeticWonder(){
	if(wood >= 30000 && charcoal >= 15000 && uranium >= 500){
		wood -= 30000;
		charcoal -= 15000;
		uranium -= 500;
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
	if(silicon >= 30000 && gold >= 18000 && gem >= 40000){
		silicon-= 30000;
		gold -= 18000;
		gem -= 40000;
		document.getElementById("techWonderButton").className = "hidden";
		document.getElementById("techProgress").className = "hidden";
		document.getElementById("techWonderNav").className = "";
		buttonsHidden.push("techProgress", "techWonderButton");
		resourcesUnlocked.push("techWonderNav");
        Game.statistics.add('wondersBuilt');
	}
}

function activateTechWonder(){
	if(silicon >= 50000 && gold >= 30000 && gem >= 60000){
		silicon -= 50000;
		gold -= 30000;
		gem -= 60000;
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
	if(meteorite >= 5000 && ice >= 600000 && silicon >= 1200000){
		meteorite-= 5000;
		ice -= 600000;
		silicon -= 1200000;
		document.getElementById("meteoriteWonderButton").className = "hidden";
		document.getElementById("meteoriteProgress").className = "hidden";
		document.getElementById("meteoriteWonderNav").className = "";
		buttonsHidden.push("meteoriteProgress", "meteoriteWonderButton");
		resourcesUnlocked.push("meteoriteWonderNav");
        Game.statistics.add('wondersBuilt');
	}
}

function activateMeteoriteWonder(){
	if(meteorite >= 10000 && ice >= 2000000 && silicon >= 4000000){
		meteorite -= 10000;
		ice -= 2000000;
		silicon -= 4000000;
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
	if(gold >= 6000000 && silicon >= 10000000 && ice >= 6000000){
		gold -= 6000000;
		silicon -= 10000000;
		ice -= 6000000;
		document.getElementById("rebuildCommsWonder").className = "hidden";
		document.getElementById("commsActivation").innerHTML = "Activated";
		document.getElementById("commsActivation").className = "green";
		document.getElementById("commsNav").className = "sideTab";
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
	}
}

function rebuildRocketWonder(){
	if(lunarite >= 8000000 && titanium >= 6000000 && metal >= 12000000){
		lunarite -= 8000000;
		titanium -= 6000000;
		metal -= 12000000;
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
		document.getElementById("interRocketNav").className = "sideTab";
		newUnlock("interstellar");
		Game.removeExcess(tabsUnlocked, "interstellarTab");
		
	}
}

function rebuildAntimatterWonder(){
	if(uranium >= 6000000 && lava >= 10000000 && oil >= 8000000 && methane >= 6000000){
		uranium -= 6000000;
		lava -= 10000000;
		oil -= 8000000;
		methane -= 6000000;
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
		document.getElementById("antimatterNav").className = "sideTab";
		newUnlock("interstellar");
		Game.removeExcess(tabsUnlocked, "interstellarTab");
		
	}
}

function activatePortal(){
	if(meteorite >= 500000 && helium >= 8000000 && silicon >= 6000000){
		meteorite -= 500000;
		helium -= 8000000;
		silicon -= 6000000;
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
	if(plasma >= 500000 && silicon >= 920000000 && meteorite >= 17000000){
		plasma -= 500000;
		silicon -= 920000000;
		meteorite -= 17000000;
		document.getElementById("rebuildStargate").className = "hidden";
		document.getElementById("stargateActivation").innerHTML = "Activated";
		document.getElementById("stargateActivation").className = "green";
		document.getElementById("travelNav").className = "sideTab";
		buttonsHidden.push("rebuildStargate");
		activated.push("stargate");
		Game.statistics.add('wondersActivated');
		if(document.getElementById("interstellarTab").className != ""){
			document.getElementById("interstellarTab").className = "";
			tabsUnlocked.push("interstellarTab");
			Game.notifySuccess("New Tab!", "You've unlocked the Interstellar Tab!");
		}
		newUnlock("interstellar");
	}
}
