Game.enlightenmentCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: 'Enlightenment',
        category: 'general'
    };

    return instance;

}());

Game.enlightenmentData = (function(){

	var instance = {};

	instance.ultrite = {
		name: 'Ultrite',
		desc: 'XXX',
        current: 0,
		category: 'general',
		order: 1,
		unlocked: false
	};

    instance.titan = {
        name: 'Titans',
        desc: 'XXX',
        category: 'general',
        order: 2,
        unlocked: false
    };

    instance.upgrades = {
        name: 'Upgrades',
        desc: 'XXX',
        category: 'general',
        order: 3,
        unlocked: false
    };

    return instance;

}());

Game.enlightenData = (function(){

    var instance = {};

    instance.enlighten = {
        name: "Enlighten",
        desc: "",
        cost: 0,
        category: "ultrite",
    };

    instance.titan = {
        name: "Resource Titans",
        desc: "Rather than Enlightening yourself for Ultrite gains, you may instead choose a resource titan to aid you on your future journeys. For each titan that you gain the favour of, you will recieve a 90% discount on all costs containing that resource.",
        cost: 0,
        category: "titan",
    };

    instance.machines = {
        name: "Machines Tab",
        desc: "This upgrade unlocks the Machines Tab, a control panel for your entire company, where you can change the number of machines that are active at a time, even within one tier of resource. (E.g. 5/7 Plasmatic Pits active).",
        cost: 6,
        category: "upgrades",
        onApply: function(){
            document.getElementById("machinesTab").className = "";
        },
        achieved: false,
    };

    instance.advRebirth = {
        name: "Advanced Rebirth Upgrades",
        desc: "The overlord grants you access to an increased rebirth potential, able to call upon further favours from the factions after your divine insurgence into this dimension.",
        cost: 17,
        category: "upgrades",
        onApply: function(){
            for(var id in Game.stargaze.upgradeEntries){
                var data = Game.stargaze.upgradeEntries[id];
                if(data.tier == "advanced"){
                    data.unlocked = true;
                }
            }
            Game.stargaze.rebirthNeedsUpdate === true;
        },
        achieved: false,
    };

    return instance;

}());