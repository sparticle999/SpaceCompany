// Variables in save function

var versionNumber = "Perhaps V1.0 Release?"; var companyName = "Space";

// unlocked & activated

var rocketLaunched = false; var resourcesUnlocked = []; var explored = [];
var activated = []; var techUnlocked = false; var meteoriteUnlocked = false;

// Rocket & Rocket Fuel
var rocket = 0; var rocketFuel = 0; var rocketFuelps = 0; var rocketFuelToggled = true;
var chemicalPlant = 0; var chemicalPlantMetalCost = 1000; var chemicalPlantGemCost = 750; var chemicalPlantOilCost = 500; var chemicalPlantOilInput = 20; var chemicalPlantCharcoalInput = 20; var chemicalPlantOutput = 0.2;
var oxidisation = 0; var oxidisationMetalCost = 12000; var oxidisationGemCost = 8300; var oxidisationOilCost = 6800; var oxidisationOilInput = 100; var oxidisationCharcoalInput = 100; var oxidisationOutput = 1.5;
var hydrazine = 0; var hydrazineTitaniumCost = 140000; var hydrazineSiliconCost = 96300; var hydrazineGoldCost = 78600; var hydrazineMethaneInput = 520; var hydrazineOutput = 20;

// Sol Centre
var autoResource = null;
var dyson = 0; var dysonTitaniumCost = 300000; var dysonGoldCost = 100000; var dysonSiliconCost = 200000; var dysonMeteoriteCost = 1000; var dysonIceCost = 100000;
var ring = 0; var ringOutput = 5000;
var swarm = 0; var swarmOutput = 25000;
var sphere = 0; var sphereOutput = 1000000;

// Antimatter
var antimatter = 0; var antimatterps = 0; var antimatterStorage = 100000; var antimatterToggled = true;

// Variables not being saved

var preciousGemBaseCost = 10000; var preciousSilverBaseCost = 7500; var preciousGoldBaseCost = 5000;
var preciousActivateGemBaseCost = 30000; var preciousActivateSilverBaseCost = 20000; var preciousActivateGoldBaseCost = 10000;
var energeticWoodBaseCost =  10000; var energeticCharcoalBaseCost = 5000; var energeticUraniumBaseCost = 200;
var energeticActivateWoodBaseCost = 30000; var energeticActivateCharcoalBaseCost = 15000; var energeticActivateUraniumBaseCost = 500;
var techSiliconBaseCost =  30000; var techGoldBaseCost = 18000; var techGemBaseCost = 40000;
var techActivateSiliconBaseCost = 50000; var techActivateGoldBaseCost = 30000; var techActivateGemBaseCost = 60000;
var meteoriteMeteoriteBaseCost = 5000; var meteoriteIceBaseCost = 600000; var meteoriteSiliconBaseCost = 1200000;
var meteoriteActivateMeteoriteBaseCost = 10000; var meteoriteActivateIceBaseCost = 2000000; var meteoriteActivateSiliconBaseCost = 4000000;

var commsWonderGoldBaseCost = 6000000; var commsWonderSiliconBaseCost = 10000000; var commsWonderIceBaseCost = 6000000;
var rocketWonderLunariteBaseCost = 8000000; var rocketWonderTitaniumBaseCost = 6000000; var rocketWonderMetalBaseCost = 12000000;
var antimatterWonderUraniumBaseCost = 6000000; var antimatterWonderLavaBaseCost = 10000000; var antimatterWonderOilBaseCost = 8000000; var antimatterWonderMethaneBaseCost = 6000000;
var portalMeteoriteBaseCost = 500000; var portalHeliumBaseCost = 8000000; var portalSiliconBaseCost = 6000000;

var stargateWonderPlasmaBaseCost = 500000; var stargateWonderSiliconBaseCost = 920000000; var stargateWonderMeteoriteBaseCost = 17000000;

var preciousGemCost = preciousGemBaseCost; var preciousSilverCost = preciousSilverBaseCost; var preciousGoldCost = preciousGoldBaseCost;
var preciousActivateGemCost = preciousActivateGemBaseCost; var preciousActivateSilverCost = preciousActivateSilverBaseCost; var preciousActivateGoldCost = preciousActivateGoldBaseCost;
var energeticWoodCost = energeticWoodBaseCost; var energeticCharcoalCost = energeticCharcoalBaseCost; var energeticUraniumCost = energeticUraniumBaseCost;
var energeticActivateWoodCost = energeticActivateWoodBaseCost; var energeticActivateCharcoalCost = energeticActivateCharcoalBaseCost; var energeticActivateUraniumCost = energeticActivateUraniumBaseCost;
var techSiliconCost = techSiliconBaseCost; var techGoldCost = techGoldBaseCost; var techGemCost = techGemBaseCost;
var techActivateSiliconCost = techActivateSiliconBaseCost; var techActivateGoldCost = techActivateGoldBaseCost; var techActivateGemCost = techActivateGemBaseCost;
var meteoriteMeteoriteCost = meteoriteMeteoriteBaseCost; var meteoriteIceCost = meteoriteIceBaseCost; var meteoriteSiliconCost = meteoriteSiliconBaseCost;
var meteoriteActivateMeteoriteCost = meteoriteActivateMeteoriteBaseCost; var meteoriteActivateIceCost = meteoriteActivateIceBaseCost; var meteoriteActivateSiliconCost = meteoriteActivateSiliconBaseCost;

var commsWonderGoldCost = commsWonderGoldBaseCost; var commsWonderSiliconCost = commsWonderSiliconBaseCost; var commsWonderIceCost = commsWonderIceBaseCost;
var rocketWonderLunariteCost = rocketWonderLunariteBaseCost; var rocketWonderTitaniumCost = rocketWonderTitaniumBaseCost; var rocketWonderMetalCost = rocketWonderMetalBaseCost;
var antimatterWonderUraniumCost = antimatterWonderUraniumBaseCost; var antimatterWonderLavaCost = antimatterWonderLavaBaseCost; var antimatterWonderOilCost = antimatterWonderOilBaseCost; var antimatterWonderMethaneCost = antimatterWonderMethaneBaseCost;
var portalMeteoriteCost = portalMeteoriteBaseCost; var portalHeliumCost = portalHeliumBaseCost; var portalSiliconCost = portalSiliconBaseCost;

var stargateWonderPlasmaCost = stargateWonderPlasmaBaseCost; var stargateWonderSiliconCost = stargateWonderSiliconBaseCost; var stargateWonderMeteoriteCost = stargateWonderMeteoriteBaseCost;

var timer = 0; var timer2 = 0; var statsTimer = 0; var saveTimer = 10; var secondsLeft = 0; var saved = false; var loaded = false;
var emcAmount = "Max";

var energyLow = false;
var resources = ["uranium", "lava", "oil", "metal", "gem", "charcoal", "wood", "lunarite", "methane", "titanium", "gold", "silver", "silicon", "hydrogen", "helium", "ice", "meteorite"]
var uraniumEmcVal = 37; var lavaEmcVal = 42;
var oilEmcVal = 3; var metalEmcVal = 1; var gemEmcVal = 3; var charcoalEmcVal = 2; var woodEmcVal = 1;
var lunariteEmcVal = 15; var methaneEmcVal = 12; var titaniumEmcVal = 17; var goldEmcVal = 14; var silverEmcVal = 16; var siliconEmcVal = 23;
var hydrogenEmcVal = 33; var heliumEmcVal = 39; var iceEmcVal = 44; var meteoriteEmcVal = 3;

var windowLoaded = false;

// Rebirth Variables

var dmBoost = 0;
var gainNum = 1; var labT1Multi = 1; var labT2PlusMulti = 1; var T1Price = 1; var chemicalBoost = 1; var rocketPrice = 1; var floor1Price = 1; var floor23Price = 1; var storagePrice = 1;
