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

    instance.intro = {
        name: 'Introduction',
        para1: 'With your vast amounts of dark matter, you find you have fulfilled your company to great success. Watching your interstellar empire, commanded by you, yourself, you feel the Overlord\'s presence come upon you. This is to be the next stage in your long journey for galactic supremacy.',
        para2: '"You have come far in your many lives, my loyal subject, but I know you can do more. Do not worry, you have not failed me yet. I will start you in a new dimension, almost identical to this one, where you may start afresh."',
        para3: '"In this new dimension, you will travel further, and conquer more than ever before, as you will have my precious Ultrite, and my faithful resource titans by your side at each step."',
        para4: '"With this heightened power, I truly believe you are capable of greatness, spreading our empire over the galaxy. Go forth into this new dimension and come out stronger for it!"',
        para5: 'The Overlord\'s aura leaves you astounded, before promptly transporting you into a foreign world, devoid of industrialisation, yet familiar. You gaze up at the stars as you have done many times before, and set off to build a space company, bigger and better than ever before.',
        category: 'general',
        order: 1,
        unlocked: true
    }

	instance.ultrite = {
		name: 'Ultrite',
		desc: 'There are 5 ways of gaining Ultrite in this galaxy. Here, you can see how much Ultrite you have acquired and the earnings you will recieve upon reset (in brackets).',
        current: 0,
		category: 'general',
		order: 2,
		unlocked: true
	};

    instance.upgrades = {
        name: 'Upgrades',
        desc: 'Here, you can spend your well earned Ultrite on powerful upgrades, worthy of the overlord himself. These have the capability to completely change the course of your rebirths, and allow to you reach soaring heights, significantly further than before.',
        category: 'general',
        order: 3,
        unlocked: true
    };

    return instance;

}());

Game.enlightenData = (function(){

    var instance = {};

    instance.enlighten = {
        name: "Enlighten",
        desc: "Leaving your dimension leaves a lot of uncertainty. You will leave behind all that you have created, for a world familiar, yet different, as if waiting to be colonised, just for you. The galaxy lies just as it did here, unknowing of the power that will enter their dimension. The brave jump you must take to achieve true greatness is a calculated one, and only the ready will thrive. Are you ready?",
        cost: 0,
        category: "intro",
    };

    instance.titan = {
        name: "Resource Titans",
        desc: "Resource Titans are wonderous beings, who smile fortunately on those who idolise them. By sacrificing your life to a specific resource titan, they will grant you a permanent 90% reduction in all costs consisting of that resource. (Costs:100 metal -> Costs:10 metal). Sacrificing multiple times is smiled upon greatly, and multiplies this discount.",
        cost: 0,
        category: "intro",
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

Game.ultrite = (function () {

    var instance = {};

    instance.conquer = {
        name: "Conquered Stars",
        desc: "For each conquered star system, one ultrite will be rewarded upon enlightenment as a reward for spreading the Overlord's influence over the galaxy.",
    };

    instance.absorb = {
        name: "Sphere",
        desc: "By expanding your sphere of influence peacefully, an additional ultrite per star will be granted in efforts of maintaining a prosperous empire."
    };

    instance.rebirth = {
        name: "Rebirth Upgrades",
        desc: "For every rebirth upgrade you purchase with dark matter, one ultrite will be awarded on enlightenment.",
    };

    instance.planet = {
        name: "Overlord Statues",
        desc: "Smiliar to rebirth, for each triangluar number of Overlord Statues built on planets, you will recieve one Ultrite when you enlighten.",
    };

    instance.research = {
        name: "Overlord Appreciation Research",
        desc: "For every 25 research points of the overlord appreciation research, one Ultrite will be given to you.",
    };

    return instance;

}());