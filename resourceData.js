Game.resourceCategoryData = (function(){

    var instance = {};

    instance.earth = {
        class: 'collapseEarth',
        title: 'Earth Resources',
        category: 'earth'
    };
    instance.innerPlanetary = {
        class: 'collapseInnerPlanetary',
        title: 'Inner Planetary Resources',
        category: 'innerPlanetary'
    };
    instance.earth = {
        class: 'collapseOuterPlanetary',
        title: 'Outer Planetary Resources',
        category: 'outerPlanetary'
    };

    return instance;

}());

Game.resourceData = (function(){

    var instance = {};


    /*********************
     * Energy Resources  *
     *********************/

    instance.energy = {
        name: 'Energy',
        desc: 'Energy is created by power sources such as steam engines, solar power and advances even to fusion power and nuclear energy. The maximum you can hold to start with is 100,000 Energy, but batteries are unlockable which can increase this.',
        icon: 'energyIcon',
        category: 'energy',
        baseCapacity: 50000,
        unlocked: true,
    };

    instance.plasma = {
        name: 'Plasma',
        desc: 'Plasma is the 4th state of matter and is used by Tier 4 machines and large space structures as an extreme power source for your company.',
        icon: 'plasmaIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.uranium = {
        name: 'Uranium',
        desc: 'Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.',
        icon: 'uraniumIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.lava = {
        name: 'Lava',
        desc: 'Hard to handle and only found in volcanoes, Lava is one of the hardest resources to get.',
        icon: 'lavaIcon',
        category: 'energy',
        baseCapacity: 50,
        unlocked: false,
    };

    /********************
     * Earth Resources  *
     ********************/

    instance.oil = {
        name: 'Oil',
        desc: 'Oil is pumped up from the ground and is used to build Tier 2 resource gatherers.',
        icon: 'oilIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.metal = {
        name: 'Metal',
        desc: 'Metal is one of the primary resources. It is used for many things, including storage upgrades, machinery and most things in space.',
        icon: 'metalIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true,
    };

    instance.gem = {
        name: 'Gem',
        desc: 'Gems are one of the primary resources. They are used for advanced machines and for powerful tools and components. They are more useful in later game.',
        icon: 'gemIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: true,
    };

    instance.charcoal = {
        name: 'Charcoal',
        desc: 'Charcoal is a secondary tier resource and is used by Engines to produce power for your company. 1 Charcoal is created by burning wood',
        icon: 'charcoalIcon',
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
        unlocked: false,
    };

    instance.silicon = {
        name: 'Silicon',
        desc: 'Silicon is useful for automatic mining systems of the third tier. These will be very useful in building your first wonder. Despite being a high tier resource, it is found mainly on Earth by heating sand.',
        icon: 'siliconIcon',
        category: 'earth',
        baseCapacity: 50,
        unlocked: false,
    };


    /******************************
     * Inner Planetary Resources  *
     ******************************/
    
    instance.spaceMetal = {
        name: 'Space Metal',
        desc: 'Space Metal is found on the Moon and is a rare type of resource not found on Earth. It is much stronger than regular metal but is a lot harder to get.',
        icon: 'spaceMetalIcon',
        category: 'innerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.methane = {
        name: 'Methane',
        desc: 'Methane is a gas found in abundance on Venus. It can be used to power your company much more effectively than solid fuel.',
        icon: 'methaneIcon',
        category: 'innerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.titanium = {
        name: 'Titanium',
        desc: 'Titanium is a metal found mostly on Mars. It is used for building strong machines and methane power plants.',
        icon: 'titaniumIcon',
        category: 'innerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.gold = {
        name: 'Gold',
        desc: 'Gold is a metal found inside asteroids. It is used to build some Wonders and for complex machinery.',
        icon: 'goldIcon',
        category: 'innerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.silver = {
        name: 'Silver',
        desc: 'Silver is another metal most commonly found in the asteroid belt.',
        icon: 'silverIcon',
        category: 'innerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    /******************************
     * Outer Planetary Resources  *
     ******************************/

    instance.hydrogen = {
        name: 'Hydrogen',
        desc: 'Hydrogen is extremely common on gas giants such as Jupiter and Saturn.',
        icon: 'hydrogenIcon',
        category: 'outerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.helium = {
        name: 'Helium',
        desc: 'Helium is the second most common element on gas giants such as Jupiter and Saturn.',
        icon: 'heliumIcon',
        category: 'outerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.ice = {
        name: 'Ice',
        desc: 'Ice, although it can be collected on Earth, is not nearly as profitable as flying to Pluto and back with space craft full of the stuff. It is mainly used for super-cooling technology necessary for Tier 4 machines.',
        icon: 'iceIcon',
        category: 'outerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    instance.meteorite = {
        name: 'Meteorite',
        desc: 'Creating Meteorite is only possible from purer forms of energy than those created with earth technology. Therefore, Plasma is necessary to make the strong resource.',
        icon: 'meteoriteIcon',
        category: 'outerPlanetary',
        baseCapacity: 50,
        unlocked: false,
    };

    return instance;
}());