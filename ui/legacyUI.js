function registerLegacyBindings() {
    Game.ui.bindElement('PSU', function(){ return Game.settings.format(PSU); });
    Game.ui.bindElement('PSUSilverCost', function(){ return Game.settings.format(PSUSilverCost); });
    Game.ui.bindElement('PSUGoldCost', function(){ return Game.settings.format(PSUGoldCost); });
    Game.ui.bindElement('PSUUraniumCost', function(){ return Game.settings.format(PSUUraniumCost); });
    Game.ui.bindElement('PSUT2', function(){ return Game.settings.format(PSUT2); });
    Game.ui.bindElement('PSUT2SilverCost', function(){ return Game.settings.format(PSUT2SilverCost); });
    Game.ui.bindElement('PSUT2GoldCost', function(){ return Game.settings.format(PSUT2GoldCost); });
    Game.ui.bindElement('PSUT2UraniumCost', function(){ return Game.settings.format(PSUT2UraniumCost); });
    Game.ui.bindElement('battery', function(){ return Game.settings.format(battery); });
    Game.ui.bindElement('batteryMetalCost', function(){ return Game.settings.format(batteryMetalCost); });
    Game.ui.bindElement('batteryGemCost', function(){ return Game.settings.format(batteryGemCost); });
    Game.ui.bindElement('batteryLunariteCost', function(){ return Game.settings.format(batteryLunariteCost); });
    Game.ui.bindElement('batteryT2', function(){ return Game.settings.format(batteryT2); });
    Game.ui.bindElement('batteryT2MetalCost', function(){ return Game.settings.format(batteryT2MetalCost); });
    Game.ui.bindElement('batteryT2GemCost', function(){ return Game.settings.format(batteryT2GemCost); });
    Game.ui.bindElement('batteryT2LunariteCost', function(){ return Game.settings.format(batteryT2LunariteCost); });
    Game.ui.bindElement('batteryT3', function(){ return Game.settings.format(batteryT3); });
    Game.ui.bindElement('batteryT3MetalCost', function(){ return Game.settings.format(batteryT3MetalCost); });
    Game.ui.bindElement('batteryT3GemCost', function(){ return Game.settings.format(batteryT3GemCost); });
    Game.ui.bindElement('batteryT3LunariteCost', function(){ return Game.settings.format(batteryT3LunariteCost); });
	Game.ui.bindElement('batteryT4', function(){ return Game.settings.format(batteryT4); });
    Game.ui.bindElement('batteryT4MetalCost', function(){ return Game.settings.format(batteryT4MetalCost); });
    Game.ui.bindElement('batteryT4GemCost', function(){ return Game.settings.format(batteryT4GemCost); });
    Game.ui.bindElement('batteryT4LunariteCost', function(){ return Game.settings.format(batteryT4LunariteCost); });
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
}

function legacyRefreshUI() {
    if(energyLow) {
        $('#energyLow').removeClass('hidden');
    } else {
        $('#energyLow').addClass('hidden');
    }

    if(sphere > 0) {
        $('#buildSphereInfo').hide();
        $('#buildSphereButton').hide();
    }

    $('#heaterToggled').text(heaterToggled === true ? "Off" : "On");
    $('#plasmaticToggled').text(plasmaticToggled === true ? "Off" : "On");
    $('#bathToggled').text(bathToggled === true ? "Off" : "On");
    $('#charcoalToggled').text(charcoalToggled === true ? "Off" : "On");
    $('#rocketFuelToggled').text(rocketFuelToggled === true ? "Off" : "On");
    $('#meteoriteToggled').text(meteoriteToggled === true ? "Off" : "On");
    $('#antimatterToggled').text(antimatterToggled === true ? "Off" : "On");
}
