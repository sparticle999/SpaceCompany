// Variables in save function

var currentTheme = "base";

var handMined = 0; var tier1 = 0; var tier2 = 0; var tier3 = 0; var tier4 = 0; var tier5 = 0; var tier6 = 0;
var tabsUnlockedNum = 3; var resourcesUnlockedNum = 3; var techsResearchedNum = 0; var placesExploredNum = 0; var wondersBuiltNum = 0; var wondersActivatedNum = 0;

var researchUnlocked = false; var researched = []; var available = ["unlockStorage", "unlockBasicEnergy"]; var explored = [];
var tabsUnlocked = []; var resourcesUnlocked = []; var noBorder = []; var rocketLaunched = false; var buttonsHidden = [];
var activated = []; var techUnlocked = false;

var plasma = 0; var plasmaps = 0;
var heater = 0; var heaterSpaceMetalCost = 75000; var heaterGemCost = 68000; var heaterSiliconCost = 59000; var heaterToggled = true;
var energy = 0; var energyps = 0;
var charcoalEngine = 0; var charcoalEngineMetalCost = 50; var charcoalEngineGemCost = 25; var charcoalEngineOutput = 2;
var solarPanel = 0; var solarPanelMetalCost = 30; var solarPanelGemCost = 35; var solarPanelOutput = 1.5;
var methaneStation = 0; var methaneStationSpaceMetalCost = 110; var methaneStationTitaniumCost = 90;
var nuclearStation = 0; var nuclearStationSpaceMetalCost = 20000; var nuclearStationTitaniumCost = 10000;
var magmatic = 0; var magmaticSpaceMetalCost = 25000; var magmaticGemCost = 20000; var magmaticSilverCost = 15000;
var fusionReactor = 0; var fusionReactorSpaceMetalCost = 30000; var fusionReactorTitaniumCost = 20000; var fusionReactorSiliconCost = 15000;
var oil = 0; var oilStorage = 50; var oilNextStorage = 100; var oilps = 0;
var pump = 0; var pumpMetalCost = 60; var pumpGemCost = 20;
var pumpjack = 0; var pumpjackMetalCost = 250; var pumpjackGemCost = 80; var pumpjackOilCost = 50; var pumpjackOutput = 5;
var oilField = 0; var oilFieldSpaceMetalCost = 2400; var oilFieldTitaniumCost = 2700; var oilFieldSiliconCost = 3900;
var metal = 0; var metalStorage = 50; var metalNextStorage = 100; var metalps = 0;
var miner = 0; var minerMetalCost = 10; var minerWoodCost = 5;
var heavyDrill = 0; var heavyDrillMetalCost = 160; var heavyDrillGemCost = 60; var heavyDrillOilCost = 50; var heavyDrillOutput = 8;
var gigaDrill = 0; var gigaDrillSpaceMetalCost = 2800; var gigaDrillGemCost = 3400; var gigaDrillSiliconCost = 4100;
var gem = 0; var gemStorage = 50; var gemNextStorage = 100; var gemps = 0;
var gemMiner = 0; var gemMinerMetalCost = 15; var gemMinerGemCost = 10;
var advancedDrill = 0; var advancedDrillMetalCost = 120; var advancedDrillGemCost = 200; var advancedDrillOilCost = 60; var advancedDrillOutput = 4;
var diamondDrill = 0; var diamondDrillSpaceMetalCost = 2400; var diamondDrillGemCost = 8000; var diamondDrillSiliconCost = 4500;
var charcoal = 0; var charcoalStorage = 50; var charcoalNextStorage = 100; var charcoalps = 0; var charcoalToggled = true;
var woodburner = 0; var woodburnerMetalCost = 10; var woodburnerWoodCost = 5;
var furnace = 0; var furnaceMetalCost = 80; var furnaceWoodCost = 40; var furnaceOilCost = 100; var furnaceWoodInput = 6; var furnaceOutput = 4;
var kiln = 0; var kilnSpaceMetalCost = 3500; var kilnGemCost = 6200; var kilnSiliconCost = 3800;
var wood = 0; var woodStorage = 50; var woodNextStorage = 100; var woodps = 0;
var woodcutter = 0; var woodcutterMetalCost = 10; var woodcutterWoodCost = 5;
var laserCutter = 0; var laserCutterMetalCost = 50; var laserCutterGemCost = 90; var laserCutterOilCost = 40; var laserCutterOutput = 6;
var deforester = 0; var deforesterSpaceMetalCost = 3000; var deforesterTitaniumCost = 2700; var deforesterSiliconCost = 2500;
var science = 0; var scienceps = 0;
var lab = 0; var labMetalCost = 20; var labGemCost = 15; var labWoodCost = 10;
var labT2 = 0; var labT2MetalCost = 1000; var labT2GemCost = 200; var labT2WoodCost = 500;
var labT3 = 0; var labT3MetalCost = 17000; var labT3GemCost = 4700; var labT3WoodCost = 9600;
var rocket = 0; var rocketFuel = 0; var rocketFuelps = 0;
var chemicalPlant = 0; var chemicalPlantMetalCost = 1000; var chemicalPlantGemCost = 750; var chemicalPlantOilCost = 500; var chemicalPlantToggled = true;
var spaceMetal = 0; var spaceMetalStorage = 50; var spaceMetalNextStorage = 100; var spaceMetalps = 0;
var methane = 0; var methaneStorage = 50; var methaneNextStorage = 100; var methaneps = 0;
var titanium = 0; var titaniumStorage = 50; var titaniumNextStorage = 100; var titaniumps = 0;
var gold = 0; var goldStorage = 50; var goldNextStorage = 100; var goldps = 0;
var silver = 0; var silverStorage = 50; var silverNextStorage = 100; var silverps = 0;
var silicon = 0; var siliconStorage = 50; var siliconNextStorage = 100; var siliconps = 0;
var moonWorker = 0; var moonWorkerGemCost = 500;
var moonDrill = 0; var moonDrillMetalCost = 1000; var moonDrillGemCost = 600; var moonDrillOilCost = 400;
var moonQuarry = 0; var moonQuarrySpaceMetalCost = 8000; var moonQuarryGemCost = 5000; var moonQuarrySiliconCost = 3500;
var vacuum = 0; var vacuumSpaceMetalCost = 50; var vacuumGemCost = 500;
var suctionExcavator = 0; var suctionExcavatorSpaceMetalCost = 100; var suctionExcavatorGemCost = 800; var suctionExcavatorOilCost = 600;
var spaceCow = 0; var spaceCowSpaceMetalCost = 10000; var spaceCowTitaniumCost = 9000; var spaceCowSiliconCost = 4100;
var explorer = 0; var explorerGemCost = 1000;
var spaceMetalDrill = 0; var spaceMetalDrillSpaceMetalCost = 200; var spaceMetalDrillGemCost = 800; var spaceMetalDrillOilCost = 1000;
var pentaDrill = 0; var pentaDrillSpaceMetalCost = 14000; var pentaDrillGemCost = 11000; var pentaDrillSiliconCost = 5600;
var droid = 0; var droidSpaceMetalCost = 200; var droidMethaneCost = 50;
var destroyer = 0; var destroyerSpaceMetalCost = 500; var destroyerGemCost = 1500; var destroyerOilCost = 1000;
var deathStar = 0; var deathStarSpaceMetalCost = 17000; var deathStarSilverCost = 11500; var deathStarSiliconCost = 8200;
var scout = 0; var scoutSpaceMetalCost = 100; var scoutTitaniumCost = 20;
var spaceLaser = 0; var spaceLaserSpaceMetalCost = 350; var spaceLaserGemCost = 900; var spaceLaserOilCost = 1200;
var bertha = 0; var berthaSpaceMetalCost = 19500; var berthaTitaniumCost = 18200; var berthaSiliconCost = 11000;
var blowtorch = 0; var blowtorchSpaceMetalCost = 150; var blowtorchTitaniumCost = 30;
var scorcher = 0; var scorcherSpaceMetalCost = 500; var scorcherGemCost = 1200; var scorcherOilCost = 1600;
var annihilator = 0; var annihilatorSpaceMetalCost = 3000; var annihilatorGemCost = 8300; var annihilatorSilverCost = 2400;
var uranium = 0; var uraniumStorage = 50; var uraniumNextStorage = 100; var uraniumps = 0;
var grinder = 0; var grinderTitaniumCost = 2000; var grinderSpaceMetalCost = 4000; var grinderGoldCost = 2000;
var cubic = 0; var cubicUraniumCost = 80; var cubicSpaceMetalCost = 10000; var cubicOilCost = 10000;
var enricher = 0; var enricherSpaceMetalCost = 21700; var enricherTitaniumCost = 23000; var enricherSiliconCost = 13500;
var lava = 0; var lavaStorage = 50; var lavaNextStorage = 100; var lavaps = 0;
var crucible = 0; var crucibleGemCost = 8000; var crucibleSpaceMetalCost = 4000;
var extractor = 0; var extractorSpaceMetalCost = 16000; var extractorTitaniumCost = 12000; var extractorSiliconCost = 6000;
var extruder = 0; var extruderSpaceMetalCost = 69000; var extruderTitaniumCost = 57000; var extruderSiliconCost = 39000;
var hydrogen = 0; var hydrogenStorage = 50; var hydrogenNextStorage = 100; var hydrogenps = 0;
var collector = 0; var collectorSpaceMetalCost = 6000; var collectorTitaniumCost = 4800;
var magnet = 0; var magnetSpaceMetalCost = 10800; var magnetTitaniumCost = 9600; var magnetGoldCost = 6600;
var eCell = 0; var eCellSilverCost = 37200; var eCellGoldCost = 34200; var eCellSiliconCost = 25800;
var helium = 0; var heliumStorage = 50; var heliumNextStorage = 100; var heliumStorageCost = 100; var heliumps = 0;
var drone = 0; var droneSpaceMetalCost = 8400; var droneSiliconCost = 6000;
var tanker = 0; var tankerSpaceMetalCost = 12600; var tankerTitaniumCost = 10200; var tankerSiliconCost = 8400;
var compressor = 0; var compressorSpaceMetalCost = 63000; var compressorTitaniumCost = 43800; var compressorSiliconCost = 35400;
var ice = 0; var iceStorage = 50; var iceNextStorage = 100; var iceStorageCost = 100; var iceps = 0;
var icePick = 0; var icePickSpaceMetalCost = 17800; var icePickGemCost = 19300;
var iceDrill = 0; var iceDrillSpaceMetalCost = 23900; var iceDrillTitaniumCost = 21200; var iceDrillSiliconCost = 19600;
var freezer = 0; var freezerSpaceMetalCost = 117000; var freezerTitaniumCost = 86000; var freezerSiliconCost = 73000;
var meteorite = 0; var meteoriteStorage = 50; var meteoriteNextStorage = 100; var meteoriteStorageCost = 100; var meteoriteps = 0;
var dyson = 0; var dysonTitaniumCost = 300000; var dysonGoldCost = 100000; var dysonSiliconCost = 200000; var dysonMeteoriteCost = 1000; var dysonIceCost = 100000;
var sphere = 0;

// Variables not being saved

var autoSaveTime = 2; var pageLoaded = false;

var preciousGemCost = 10000; var preciousSilverCost = 7500; var preciousGoldCost = 5000;
var preciousActivateGemCost = 30000; var preciousActivateSilverCost = 20000; var preciousActivateGoldCost = 10000;
var energeticWoodCost =  10000; var energeticCharcoalCost = 5000; var energeticUraniumCost = 200;
var energeticActivateWoodCost = 30000; var energeticActivateCharcoalCost = 15000; var energeticActivateUraniumCost = 500;
var techSiliconCost =  30000; var techGoldCost = 18000; var techGemCost = 40000;
var techActivateSiliconCost = 50000; var techActivateGoldCost = 30000; var techActivateGemCost = 60000;
var timer = 0; var timer2 = 0; var energyTimer = 0; var statsTimer = 0; var saveTimer = 10; var secondsLeft = 0; var saved = false; var loaded = false;
var emcAmount = 1;

var energyLow = false;
var resources = ["uranium", "lava", "oil", "metal", "gem", "charcoal", "wood", "spaceMetal", "methane", "titanium", "gold", "silver", "silicon", "hydrogen", "helium", "ice", "meteorite"]
var uraniumEmcVal = 37; var lavaEmcVal = 42;
var oilEmcVal = 3; var metalEmcVal = 1; var gemEmcVal = 3; var charcoalEmcVal = 2; var woodEmcVal = 1;
var spaceMetalEmcVal = 15; var methaneEmcVal = 12; var titaniumEmcVal = 17; var goldEmcVal = 14; var silverEmcVal = 16; var siliconEmcVal = 23;
var hydrogenEmcVal = 33; var heliumEmcVal = 39; var iceEmcVal = 44; var meteoriteEmcVal = 3;