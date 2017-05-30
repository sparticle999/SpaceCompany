COST_TYPE = {
    FIXED: 0,
    PERCENT: 1
};

TECH_TYPE = {
    UPGRADE: 0,
    UNLOCK: 1
};

BUILDING_TYPE = {
    PRODUCER: 0
};

RESOURCE_OBSERVER_TYPE = {
    CURRENT_VALUE: 0,
    SPECIFIC_VALUE: 1,
    CAPACITY: 2,
    PER_SECOND: 3,
    LEGACY_VALUE: 4,
    LEGACY_TARGET_VALUE: 5,
};

BUILDING_OBSERVER_TYPE = {
    CURRENT_VALUE: 0,
    MAXIMUM: 1,
    COST: 2,
    RESOURCE_PRODUCTION: 3,
};

SPACESHIP_PART = {
    SPACE_DOCK: 0,
    STRUCTURE: 1,
    ENGINE_ROOM: 1,
    SICK_BAY: 2,
    BRIDGE: 3
};

Game.constants = (function(){

    var instance = {};
    instance.iconPath = "Icons/";
    instance.iconExtension = "png";

    instance.achievementMax = 1000;
    instance.achievementIconsPerRow = 4;
    instance.achievementResourceBrackets = [500, 5000, 50000, 500000, 5000000];
    instance.achievementProducerBrackets = [10, 50, 100, 500, 1000];
    instance.achievementBracketColors = ["#9d9d9d", "#1eff00", "#0070dd", "#a335ee", "#ff8000"];

    instance.achievementCategoryResources = "Resources";
    instance.achievementCategoryProducers = "Producers";

    instance.statisticCategoryGeneral = "General";
    instance.statisticCategoryUnlockable = "Unlockables";
    instance.statisticCategoryTiming = "Timing";

    instance.maxTier = 6;

    instance.enableStorageNotifications = false;
    instance.enableDataDrivenResources = true;
    instance.enableMachineTab = false;

    return instance;
}());
