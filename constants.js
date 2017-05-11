Game.constants = (function(){

    var instance = {};
    instance.iconPath = "Icons/";
    instance.iconExtension = "png";

    instance.achievementMax = 1000;
    instance.achievementIconsPerRow = 5;
    instance.achievementResourceBrackets = [10, 100, 1000, 10000, 100000];
    instance.achievementProducerBrackets = [1, 10, 100, 500, 1000];
    instance.achievementBracketColors = ["#9d9d9d", "#1eff00", "#0070dd", "#a335ee", "#ff8000"];

    instance.achievementCategoryResources = "Resources";
    instance.achievementCategoryProducers = "Producers";

    return instance;
}());