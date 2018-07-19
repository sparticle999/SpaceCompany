// unlocked & activated

var rocketLaunched = false;

// Rocket & Rocket Fuel
var rocket = 0; var rocketFuel = 0; var rocketFuelps = 0; var rocketFuelToggled = true;
var chemicalPlant = 0; var chemicalPlantMetalCost = 1000; var chemicalPlantGemCost = 750; var chemicalPlantOilCost = 500; var chemicalPlantOilInput = 20; var chemicalPlantCharcoalInput = 20; var chemicalPlantOutput = 0.2;
var oxidisation = 0; var oxidisationMetalCost = 12000; var oxidisationGemCost = 8300; var oxidisationOilCost = 6800; var oxidisationOilInput = 100; var oxidisationCharcoalInput = 100; var oxidisationOutput = 1.5;
var hydrazine = 0; var hydrazineTitaniumCost = 140000; var hydrazineSiliconCost = 96300; var hydrazineGoldCost = 78600; var hydrazineMethaneInput = 520; var hydrazineOutput = 20;

// Sol Centre
var autoResource = null;

// Antimatter
var antimatter = 0; var antimatterps = 0; var antimatterStorage = 100000; var antimatterToggled = true;

// Variables not being saved

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
