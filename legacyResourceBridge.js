Game.legacyResourceBridge = (function(){

    var instance = {};

    instance.update = function(delta) {
        if(Game.constants.enableLegacyResourceBridge === false) {
            return;
        }

        Game.resources.setPerSecondProduction('uranium', uraniumps);
        Game.resources.setPerSecondProduction('oil', oilps);
        Game.resources.setPerSecondProduction('metal', metalps);
        Game.resources.setPerSecondProduction('gem', gemps);
        Game.resources.setPerSecondProduction('charcoal', charcoalps);
        Game.resources.setPerSecondProduction('wood', woodps);
        Game.resources.setPerSecondProduction('spaceMetal', spaceMetalps);
        Game.resources.setPerSecondProduction('methane', methaneps);
        Game.resources.setPerSecondProduction('titanium', titaniumps);
        Game.resources.setPerSecondProduction('gold', goldps);
        Game.resources.setPerSecondProduction('silver', silverps);
        Game.resources.setPerSecondProduction('silicon', siliconps);
        Game.resources.setPerSecondProduction('lava', lavaps);
        Game.resources.setPerSecondProduction('hydrogen', hydrogenps);
        Game.resources.setPerSecondProduction('helium', heliumps);
        Game.resources.setPerSecondProduction('ice', iceps);
        Game.resources.setPerSecondProduction('plasma', plasmaps);
        Game.resources.setPerSecondProduction('meteorite', meteoriteps);
        Game.resources.setPerSecondProduction('rocketFuel', rocketFuelps);
        Game.resources.setPerSecondProduction('science', scienceps);
        Game.resources.setPerSecondProduction('energy', energyps);

        Game.resources.setCapacity('uranium', uraniumStorage);
        Game.resources.setCapacity('oil', oilStorage);
        Game.resources.setCapacity('metal', metalStorage);
        Game.resources.setCapacity('gem', gemStorage);
        Game.resources.setCapacity('charcoal', charcoalStorage);
        Game.resources.setCapacity('wood', woodStorage);
        Game.resources.setCapacity('spaceMetal', spaceMetalStorage);
        Game.resources.setCapacity('methane', methaneStorage);
        Game.resources.setCapacity('titanium', titaniumStorage);
        Game.resources.setCapacity('gold', goldStorage);
        Game.resources.setCapacity('silver', silverStorage);
        Game.resources.setCapacity('silicon', siliconStorage);
        Game.resources.setCapacity('lava', lavaStorage);
        Game.resources.setCapacity('hydrogen', hydrogenStorage);
        Game.resources.setCapacity('helium', heliumStorage);
        Game.resources.setCapacity('ice', iceStorage);
        Game.resources.setCapacity('plasma', plasmaStorage);
        Game.resources.setCapacity('meteorite', meteoriteStorage);
        Game.resources.setCapacity('energy', getMaxEnergy());

        if($.inArray('oilNav', resourcesUnlocked) >= 0) { Game.resources.unlock('oil'); }
        if($.inArray('charcoalNav', resourcesUnlocked) >= 0) { Game.resources.unlock('charcoal'); }
        if($.inArray('siliconNav', resourcesUnlocked) >= 0) { Game.resources.unlock('silicon'); }
        if($.inArray('spaceMetalNav', resourcesUnlocked) >= 0) { Game.resources.unlock('spaceMetal'); }
        if($.inArray('methaneNav', resourcesUnlocked) >= 0) { Game.resources.unlock('methane'); }
        if($.inArray('titaniumNav', resourcesUnlocked) >= 0) { Game.resources.unlock('titanium'); }
        if($.inArray('goldNav', resourcesUnlocked) >= 0) { Game.resources.unlock('gold'); }
        if($.inArray('silverNav', resourcesUnlocked) >= 0) { Game.resources.unlock('silver'); }
        if($.inArray('hydrogenNav', resourcesUnlocked) >= 0) { Game.resources.unlock('hydrogen'); }
        if($.inArray('heliumNav', resourcesUnlocked) >= 0) { Game.resources.unlock('helium'); }
        if($.inArray('iceNav', resourcesUnlocked) >= 0) { Game.resources.unlock('ice'); }
        if($.inArray('meteoriteNav', resourcesUnlocked) >= 0) { Game.resources.unlock('meteorite'); }
        if($.inArray('plasmaNav', resourcesUnlocked) >= 0) { Game.resources.unlock('plasma'); }
        if($.inArray('lavaNav', resourcesUnlocked) >= 0) { Game.resources.unlock('lava'); }
        if($.inArray('uraniumNav', resourcesUnlocked) >= 0) { Game.resources.unlock('uranium'); }
        if($.inArray('energyNav', resourcesUnlocked) >= 0) { Game.resources.unlock('energy'); }

        if(researchUnlocked) { Game.resources.unlock('science'); }
    };

    instance.initialize = function() {

    };

    return instance;
}());