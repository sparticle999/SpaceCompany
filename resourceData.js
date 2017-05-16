Game.resourceCategoryData = (function(){

    var instance = {};

    instance.earth = {
        class: 'collapseEarth',
        title: 'Earth Resources',
        category: 'earth'
    };

    return instance;

}());

Game.resourceData = (function(){

    var instance = {};

    instance.metal = {
        name: 'Metal',
        desc: 'Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.',
        icon: 'metalIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true,
    };

    instance.gem = {
        name: 'Gems',
        desc: 'Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
        icon: 'gemIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true,
    };

    instance.wood = {
        name: 'Wood',
        desc: 'Wood is one of the primary resources. It is used more often in early game for tools and buildings.',
        icon: 'woodIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true,
    };

    return instance;
}());