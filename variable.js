// Variables in save function

var versionNumber = "V0.5.0.3 Beta"; var companyName = "Space";
var researchUnlocked = false; var researched = []; var available = []; var explored = [];
var tabsUnlocked = []; var resourcesUnlocked = []; var noBorder = []; var rocketLaunched = false; var buttonsHidden = [];
var activated = []; var techUnlocked = false; var meteoriteUnlocked = false;
var globalEnergyLock = false;
var heater = 0; var heaterToggled = true;
var plasmatic = 0; var plasmaticToggled = true;
var bath = 0; var bathToggled = true;
var battery = 0; var batteryMetalCost = 50000; var batteryGemCost = 50000; var batteryLunariteCost = 30000;
var batteryT2 = 0; var batteryT2MetalCost = 550000; var batteryT2GemCost = 550000; var batteryT2LunariteCost = 330000;
var batteryT3 = 0; var batteryT3MetalCost = 5500000; var batteryT3GemCost = 5500000; var batteryT3LunariteCost = 3300000;
var batteryT4 = 0; var batteryT4MetalCost = 55000000; var batteryT4GemCost = 55000000; var batteryT4LunariteCost = 33000000;
var PSU = 0; var PSUSilverCost = 770000; var PSUGoldCost = 770000; var PSUUraniumCost = 550000;
var PSUT2 = 0; var PSUT2SilverCost = 9300000; var PSUT2GoldCost = 9300000; var PSUT2UraniumCost = 6800000;
var charcoalEngine = 0;
var solarPanel = 0;
var methaneStation = 0;
var nuclearStation = 0;
var magmatic = 0;
var fusionReactor = 0;
var pump = 0;
var pumpjack = 0;
var oilField = 0;
var oilRig = 0;
var miner = 0;
var heavyDrill = 0;
var gigaDrill = 0;
var quantumDrill = 0;
var gemMiner = 0;
var advancedDrill = 0;
var diamondDrill = 0;
var carbyneDrill = 0;
var charcoalToggled = true;
var woodburner = 0;
var furnace = 0;
var kiln = 0;
var fryer = 0;
var woodcutter = 0;
var laserCutter = 0;
var deforester = 0;
var infuser = 0;
var moonWorker = 0;
var moonDrill = 0;
var moonQuarry = 0;
var planetExcavator = 0;
var vacuum = 0;
var suctionExcavator = 0;
var spaceCow = 0;
var vent = 0;
var explorer = 0;
var lunariteDrill = 0;
var pentaDrill = 0;
var titanDrill = 0;
var droid = 0;
var destroyer = 0;
var deathStar = 0;
var actuator = 0;
var scout = 0;
var spaceLaser = 0;
var bertha = 0;
var cannon = 0;
var blowtorch = 0;
var scorcher = 0;
var annihilator = 0;
var desert = 0;
var grinder = 0;
var cubic = 0;
var enricher = 0;
var recycler = 0;
var crucible = 0;
var extractor = 0;
var extruder = 0;
var veluptuator = 0;
var collector = 0;
var magnet = 0;
var eCell = 0;
var hindenburg = 0;
var drone = 0;
var tanker = 0;
var compressor = 0;
var skimmer = 0;
var icePick = 0;
var iceDrill = 0;
var freezer = 0;
var mrFreeze = 0;
var meteoriteToggled = true;
var printer = 0;
var web = 0;
var smasher = 0; var smasherOutput = 72;
var nebulous = 0; var nebulousOutput = 135;

/********************
** Tier 5 Machines **
********************/

var planetNuke = 0;
var condensator = 0;
var fossilator = 0;
var multiDrill = 0;
var diamondChamber = 0;
var microPollutor = 0;
var forest = 0;
var cloner = 0;
var interCow = 0;
var club = 0;
var philosopher = 0;
var werewolf = 0;
var tardis = 0;
var harvester = 0;
var cage = 0;
var overexchange = 0;

var lab = 0;
var labT2 = 0;
var labT3 = 0;
var labT4 = 0;
var labT5 = 0;
var rocket = 0; var rocketFuelToggled = true;
var chemicalPlant = 0;
var oxidisation = 0;
var hydrazine = 0;

var dyson = 0; var dysonTitaniumCost = 300000; var dysonGoldCost = 100000; var dysonSiliconCost = 200000; var dysonMeteoriteCost = 1000; var dysonIceCost = 100000;
var ring = 0; var swarm = 0; var sphere = 0;

var antimatter = 0; var antimatterps = 0; var antimatterStorage = 100000; var antimatterToggled = true;

// Variables not being saved

var preciousGemCost = 10000; var preciousSilverCost = 7500; var preciousGoldCost = 5000;
var preciousActivateGemCost = 30000; var preciousActivateSilverCost = 20000; var preciousActivateGoldCost = 10000;
var energeticWoodCost =  10000; var energeticCharcoalCost = 5000; var energeticUraniumCost = 200;
var energeticActivateWoodCost = 30000; var energeticActivateCharcoalCost = 15000; var energeticActivateUraniumCost = 500;
var techSiliconCost =  30000; var techGoldCost = 18000; var techGemCost = 40000;
var techActivateSiliconCost = 50000; var techActivateGoldCost = 30000; var techActivateGemCost = 60000;
var meteoriteMeteoriteCost =  5000; var meteoriteIceCost = 600000; var meteoriteSiliconCost = 1200000;
var meteoriteActivateMeteoriteCost = 10000; var meteoriteActivateIceCost = 2000000; var meteoriteActivateSiliconCost = 4000000;
var timer = 0; var timer2 = 0; var statsTimer = 0; var saveTimer = 10; var secondsLeft = 0; var saved = false; var loaded = false;
var emcAmount = "Max";

var energyLow = false;
var resources = ["uranium", "lava", "oil", "metal", "gem", "charcoal", "wood", "lunarite", "methane", "titanium", "gold", "silver", "silicon", "hydrogen", "helium", "ice", "meteorite"]
var uraniumEmcVal = 37; var lavaEmcVal = 42;
var oilEmcVal = 3; var metalEmcVal = 1; var gemEmcVal = 3; var charcoalEmcVal = 2; var woodEmcVal = 1;
var lunariteEmcVal = 15; var methaneEmcVal = 12; var titaniumEmcVal = 17; var goldEmcVal = 14; var silverEmcVal = 16; var siliconEmcVal = 23;
var hydrogenEmcVal = 33; var heliumEmcVal = 39; var iceEmcVal = 44; var meteoriteEmcVal = 3;

var windowLoaded = false;

// Rebirth Vars

var dmBoost = 0;
var gainNum = 1; var labT1Multi = 1; var T1Price = 1; var chemicalBoost = 1; var rocketPrice = 1; var floor1Price = 1; var floor23Price = 1; var storagePrice = 1;
