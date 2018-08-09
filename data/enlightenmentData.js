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
        name: "Titan",
        desc: "",
        cost: 0,
        category: "titan",
    };

    instance.machines = {
        name: "Machines Tab",
        desc: "unlocks the Machines Tab, a control panel for your entire company, where you can change the number of machines that are active at a time, even within one tier of resource. (E.g. 5/7 Plasmatic Pits active).",
        cost: 6,
        category: "upgrades",
        onApply: function(){
            document.getElementById("machinesTab").className = "";
        },
        achieved: false,
    };

    return instance;

}());