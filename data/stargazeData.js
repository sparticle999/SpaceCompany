Game.stargazeCategoryData = (function () {

    var instance = {};

    instance.general = {
        title: 'General',
        category: 'general'
    };

    instance.faction = {
        title: 'Factions',
        category: 'faction',
        hidden: 'hidden',
    };

    return instance;

}());

Game.stargazeData = (function(){

	var instance = {};

	instance.intro = {
		name: "Introduction",
		para1: '"So here we are, at what seems like the end of your journey, but what you don\'t realise... is that this is just the beginning. Gazing up at the stars, you wonder what you could do with all of your newfound wealth and your empire in the solar system.',
		para2: 'Suddenly, the Overlord reaches out to you and says: "You have come far in your time, and I feel that your life is slowing to an end after a long life of empire building. However, you have not met the expectations I thought you would."',
		para3: '"Despite disapointing me and not achieving as much greatness as I would have liked, because of your loyalty and your dedication to me, I am prepared to give you another chance at Rebirth."',
		para4: '"You will have many chances to impress me, as I will give you the ability of redemption when you feel the time has come and sacrifice is nessecary. Your empire will grow even greater than before every time you rebirth, and as long as your alliegence lies with me, I will show you the way to galactic domination."',
		para5: '"You will start over, a new life, but in exchange for your soul, I will reward your next self with the knowledge you have gained during your time in this universe and some of the most valuble material in this side of the multiverse: Dark Matter."',
		category: "general",
		hidden: "",
	};

	instance.darkMatter = {
		name: "Dark Matter",
		desc: "Here, you can see how much Dark Matter you have acquired and exactly where it has come from. You will be able to find out how it is acquired and can spend it on DM specific upgrades.",
		current: 0,
		category: "general",
		hidden: "",
	};

	instance.carnelian = {
		name: "Carnelian Resistance",
		category: "faction",
		hidden: "hidden",
	};

	instance.prasnian = {
		name: "Prasnian Empire",
		category: "faction",
		hidden: "hidden",
	};

	instance.hyacinite = {
		name: "Hyacinite Congregation",
		category: "faction",
		hidden: "hidden",
	};

	instance.kitrinos = {
		name: "Kitrinos Corporation",
		category: "faction",
		hidden: "hidden",
	};

	instance.moviton = {
		name: "Moviton Syndicate",
		category: "faction",
		hidden: "hidden",
	};

	instance.overlord = {
		name: "Overlord Cult",
		category: "faction",
		hidden: "hidden",
	};


	return instance;

}());

Game.prestigeData = (function(){

	var instance = {};

	instance.unlockStargaze = {
		name: "Rebirth Upgrades",
		desc: "Taking this step is a huge leap in not just this life, but every single rebirth you ever have. Once activated, you will never feel this powerless again.",
		cost: 1,
		category: "intro",
		achieved: false
	};

	return instance;

}());