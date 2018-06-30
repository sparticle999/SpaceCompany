function registerLegacyBindings() {

	Game.ui.bindElement('uraniumStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Uranium)*storagePrice); });
	Game.ui.bindElement('uraniumStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Uranium)/2.5*storagePrice); });
	Game.ui.bindElement('oilStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Oil)*storagePrice); });
	Game.ui.bindElement('oilStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Oil)/2.5*storagePrice); });
	Game.ui.bindElement('metalStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Metal)*storagePrice); });
	Game.ui.bindElement('gemStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Gem)*storagePrice); });
	Game.ui.bindElement('gemStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Gem)/2.5*storagePrice); });
	Game.ui.bindElement('charcoalStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Charcoal)*storagePrice); });
	Game.ui.bindElement('charcoalStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Charcoal)/2.5*storagePrice); });
	Game.ui.bindElement('woodStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Wood)*storagePrice); });
	Game.ui.bindElement('woodStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Wood)/2.5*storagePrice); });
	Game.ui.bindElement('lunariteStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Lunarite)*storagePrice); });
	Game.ui.bindElement('lunariteStorageMetalCost', function(){ return Game.settings.format(getStorage(RESOURCE.Lunarite)*4*storagePrice); });
	Game.ui.bindElement('methaneStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Methane)*storagePrice); });
	Game.ui.bindElement('methaneStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Methane)/2.5*storagePrice); });
	Game.ui.bindElement('titaniumStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Titanium)*storagePrice); });
	Game.ui.bindElement('titaniumStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Titanium)/2.5*storagePrice); });
	Game.ui.bindElement('goldStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Gold)*storagePrice); });
	Game.ui.bindElement('goldStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Gold)/2.5*storagePrice); });
	Game.ui.bindElement('silverStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Silver)*storagePrice); });
	Game.ui.bindElement('silverStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Silver)/2.5*storagePrice); });
	Game.ui.bindElement('siliconStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Silicon)*storagePrice); });
	Game.ui.bindElement('siliconStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Silicon)/2.5*storagePrice); });
	Game.ui.bindElement('lavaStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Lava)*storagePrice); });
	Game.ui.bindElement('lavaStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Lava)/2.5*storagePrice); });
	Game.ui.bindElement('hydrogenStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Hydrogen)*storagePrice); });
	Game.ui.bindElement('hydrogenStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Hydrogen)/2.5*storagePrice); });
	Game.ui.bindElement('heliumStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Helium)*storagePrice); });
	Game.ui.bindElement('heliumStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Helium)/2.5*storagePrice); });
	Game.ui.bindElement('iceStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Ice)*storagePrice); });
	Game.ui.bindElement('iceStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Ice)/2.5*storagePrice); });
	Game.ui.bindElement('meteoriteStorageCost', function(){ return Game.settings.format(getStorage(RESOURCE.Meteorite)*storagePrice); });
	Game.ui.bindElement('meteoriteStorageLunariteCost', function(){ return Game.settings.format(getStorage(RESOURCE.Meteorite)*4*storagePrice); });

    Game.ui.bindElement('chemicalPlant', function(){ return Game.settings.format(chemicalPlant); });
    Game.ui.bindElement('chemicalPlantMetalCost', function(){ return Game.settings.format(chemicalPlantMetalCost); });
    Game.ui.bindElement('chemicalPlantGemCost', function(){ return Game.settings.format(chemicalPlantGemCost); });
    Game.ui.bindElement('chemicalPlantOilCost', function(){ return Game.settings.format(chemicalPlantOilCost); });
    Game.ui.bindElement('oxidisation', function(){ return Game.settings.format(oxidisation); });
    Game.ui.bindElement('oxidisationMetalCost', function(){ return Game.settings.format(oxidisationMetalCost); });
    Game.ui.bindElement('oxidisationGemCost', function(){ return Game.settings.format(oxidisationGemCost); });
    Game.ui.bindElement('oxidisationOilCost', function(){ return Game.settings.format(oxidisationOilCost); });
    Game.ui.bindElement('hydrazine', function(){ return Game.settings.format(hydrazine); });
    Game.ui.bindElement('hydrazineTitaniumCost', function(){ return Game.settings.format(hydrazineTitaniumCost); });
    Game.ui.bindElement('hydrazineSiliconCost', function(){ return Game.settings.format(hydrazineSiliconCost); });
    Game.ui.bindElement('hydrazineGoldCost', function(){ return Game.settings.format(hydrazineGoldCost); });

    Game.ui.bindElement('dyson', function(){ return Game.settings.format(dyson); });
    Game.ui.bindElement('dysonPieces', function(){ return Game.settings.format(dyson); });
    Game.ui.bindElement('dysonPieces2', function(){ return Game.settings.format(dyson); });
    Game.ui.bindElement('dysonPieces3', function(){ return Game.settings.format(dyson); });
    Game.ui.bindElement('dysonTitaniumCost', function(){ return Game.settings.format(dysonTitaniumCost); });
    Game.ui.bindElement('dysonGoldCost', function(){ return Game.settings.format(dysonGoldCost); });
    Game.ui.bindElement('dysonSiliconCost', function(){ return Game.settings.format(dysonSiliconCost); });
    Game.ui.bindElement('dysonMeteoriteCost', function(){ return Game.settings.format(dysonMeteoriteCost); });
    Game.ui.bindElement('dysonIceCost', function(){ return Game.settings.format(dysonIceCost); });
    Game.ui.bindElement('ring', function(){ return Game.settings.format(ring); });
    Game.ui.bindElement('swarm', function(){ return Game.settings.format(swarm); });
    Game.ui.bindElement('sphere', function(){ return Game.settings.format(sphere); });

    // Wonders - Floor 1
    Game.ui.bindElement('preciousGemCost', function() { return Game.settings.format(preciousGemCost); });
    Game.ui.bindElement('preciousSilverCost', function() { return Game.settings.format(preciousSilverCost); });
    Game.ui.bindElement('preciousGoldCost', function() { return Game.settings.format(preciousGoldCost); });
    Game.ui.bindElement('preciousActivateGemCost', function() { return Game.settings.format(preciousActivateGemCost); });
    Game.ui.bindElement('preciousActivateSilverCost', function() { return Game.settings.format(preciousActivateSilverCost); });
    Game.ui.bindElement('preciousActivateGoldCost', function() { return Game.settings.format(preciousActivateGoldCost); });
    Game.ui.bindElement('energeticWoodCost', function() { return Game.settings.format(energeticWoodCost); });
    Game.ui.bindElement('energeticCharcoalCost', function() { return Game.settings.format(energeticCharcoalCost); });
    Game.ui.bindElement('energeticUraniumCost', function() { return Game.settings.format(energeticUraniumCost); });
    Game.ui.bindElement('energeticActivateWoodCost', function() { return Game.settings.format(energeticActivateWoodCost); });
    Game.ui.bindElement('energeticActivateCharcoalCost', function() { return Game.settings.format(energeticActivateCharcoalCost); });
    Game.ui.bindElement('energeticActivateUraniumCost', function() { return Game.settings.format(energeticActivateUraniumCost); });
    Game.ui.bindElement('techSiliconCost', function() { return Game.settings.format(techSiliconCost); });
    Game.ui.bindElement('techGoldCost', function() { return Game.settings.format(techGoldCost); });
    Game.ui.bindElement('techGemCost', function() { return Game.settings.format(techGemCost); });
    Game.ui.bindElement('techActivateSiliconCost', function() { return Game.settings.format(techActivateSiliconCost); });
    Game.ui.bindElement('techActivateGoldCost', function() { return Game.settings.format(techActivateGoldCost); });
    Game.ui.bindElement('techActivateGemCost', function() { return Game.settings.format(techActivateGemCost); });
    Game.ui.bindElement('meteoriteMeteoriteCost', function() { return Game.settings.format(meteoriteMeteoriteCost); });
    Game.ui.bindElement('meteoriteIceCost', function() { return Game.settings.format(meteoriteIceCost); });
    Game.ui.bindElement('meteoriteSiliconCost', function() { return Game.settings.format(meteoriteSiliconCost); });
    Game.ui.bindElement('meteoriteActivateMeteoriteCost', function() { return Game.settings.format(meteoriteActivateMeteoriteCost); });
    Game.ui.bindElement('meteoriteActivateIceCost', function() { return Game.settings.format(meteoriteActivateIceCost); });
    Game.ui.bindElement('meteoriteActivateSiliconCost', function() { return Game.settings.format(meteoriteActivateSiliconCost); });

    // Wonders - Floor 2
    Game.ui.bindElement('commsWonderGoldCost', function() { return Game.settings.format(commsWonderGoldCost); });
    Game.ui.bindElement('commsWonderSiliconCost', function() { return Game.settings.format(commsWonderSiliconCost); });
    Game.ui.bindElement('commsWonderIceCost', function() { return Game.settings.format(commsWonderIceCost); });
    Game.ui.bindElement('rocketWonderLunariteCost', function() { return Game.settings.format(rocketWonderLunariteCost); });
    Game.ui.bindElement('rocketWonderTitaniumCost', function() { return Game.settings.format(rocketWonderTitaniumCost); });
    Game.ui.bindElement('rocketWonderMetalCost', function() { return Game.settings.format(rocketWonderMetalCost); });
    Game.ui.bindElement('antimatterWonderUraniumCost', function() { return Game.settings.format(antimatterWonderUraniumCost); });
    Game.ui.bindElement('antimatterWonderLavaCost', function() { return Game.settings.format(antimatterWonderLavaCost); });
    Game.ui.bindElement('antimatterWonderOilCost', function() { return Game.settings.format(antimatterWonderOilCost); });
    Game.ui.bindElement('antimatterWonderMethaneCost', function() { return Game.settings.format(antimatterWonderMethaneCost); });
    Game.ui.bindElement('portalMeteoriteCost', function() { return Game.settings.format(portalMeteoriteCost); });
    Game.ui.bindElement('portalHeliumCost', function() { return Game.settings.format(portalHeliumCost); });
    Game.ui.bindElement('portalSiliconCost', function() { return Game.settings.format(portalSiliconCost); });

    // Wonders - Floor 3
    Game.ui.bindElement('stargateWonderPlasmaCost', function() { return Game.settings.format(stargateWonderPlasmaCost); });
    Game.ui.bindElement('stargateWonderSiliconCost', function() { return Game.settings.format(stargateWonderSiliconCost); });
    Game.ui.bindElement('stargateWonderMeteoriteCost', function() { return Game.settings.format(stargateWonderMeteoriteCost); });
}

function legacyRefreshUI() {
    if(energyLow) {
        $('#energyLow').removeClass('hidden');
    } else {
        $('#energyLow').addClass('hidden');
    }

    if(sphere > Game.interstellar.stars.systemsConquered) {
        $('#buildSphereInfo').hide();
        $('#buildSphereButton').hide();
    } else {
        $('#buildSphereInfo').show();
        $('#buildSphereButton').show();
    }

    // $('#heaterToggled').text(heaterToggled === true ? "Off" : "On");
    // $('#plasmaticToggled').text(plasmaticToggled === true ? "Off" : "On");
    // $('#bathToggled').text(bathToggled === true ? "Off" : "On");
    // $('#charcoalToggled').text(charcoalToggled === true ? "Off" : "On");
    // $('#rocketFuelToggled').text(rocketFuelToggled === true ? "Off" : "On");
    // $('#meteoriteToggled').text(meteoriteToggled === true ? "Off" : "On");
    // $('#antimatterToggled').text(antimatterToggled === true ? "Off" : "On");
}
