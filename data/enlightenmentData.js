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
        order: 1,
        unlocked: false
    };

    instance.upgrades = {
        name: 'Upgrades',
        desc: 'XXX',
        category: 'general',
        order: 1,
        unlocked: false
    };

    return instance;

}());