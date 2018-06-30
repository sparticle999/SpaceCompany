function getCost(basePrice, amount, multiplier) {
	if(!multiplier) {
		multiplier = 1.1;
	}
	return Math.floor(basePrice * Math.pow(multiplier, amount));
}

function updateResourceEfficiencyDisplay() {
	var tech = Game.tech.getTechData('efficiencyResearch');

	if(science > tech.cost['science'] || tech.current > 0) {
		tech.unlocked = true;
	}

	if(tech.unlocked === false) {
		tech.getBodyElement().class = 'hidden';
		return;
	} else {
		tech.getBodyElement().class = '';
	}

	var cost = getCost(tech.cost['science'], tech.current);
	Game.settings.turnRed(science, cost, tech.htmlIdCost);

	tech.getTitleElement().text(tech.name + " #" + (tech.current));
	tech.getCostElement().text(Game.settings.format(cost));
}

function updateEnergyEfficiencyDisplay() {
	var tech = Game.tech.getTechData('energyEfficiencyResearch');

	if(tech.current >= tech.maxLevel) {
		tech.getButtonElement().class = '';
	}

	if(science > tech.cost['science'] || tech.current > 0) {
		tech.unlocked = true;
	}

	if(tech.unlocked === false) {
		tech.getBodyElement().className = 'hidden';
		return;
	} else {
		tech.getBodyElement().className= '';
	}

	var cost = getCost(tech.cost['science'], tech.current);
	Game.settings.turnRed(science, cost, tech.htmlIdCost);

	if(tech.current === tech.maxLevel) {
		tech.getTitleElement().text(tech.name + " " + tech.maxLevel + " (MAX)");
		tech.getCostElement().text("N/A");
	} else {
		tech.getTitleElement().text(tech.name + " " + (tech.current) + " / " + tech.maxLevel);
		tech.getCostElement().text(Game.settings.format(cost));
	}
}

function updateScienceEfficiencyDisplay() {
	var tech = Game.tech.getTechData('scienceEfficiencyResearch');

	if(science > tech.cost['science'] || tech.current > 0) {
		tech.unlocked = true;
	}

	if(tech.unlocked === false) {
		tech.getBodyElement().className = 'hidden';
		return;
	} else {
		tech.getBodyElement().className = '';
	}

	var cost = getCost(tech.cost['science'], tech.current);
	Game.settings.turnRed(science, cost, tech.htmlIdCost);

	tech.getTitleElement().text(tech.name + " #" + (tech.current));
	tech.getCostElement().text(Game.settings.format(cost));
}

function updateBatteryEfficiencyDisplay() {
	var tech = Game.tech.getTechData('batteryEfficiencyResearch');

	if(science > tech.cost['science'] || tech.current > 0) {
		tech.unlocked = true;
	}

	if(tech.unlocked === false) {
		tech.getBodyElement().className = 'hidden';
		return;
	} else {
		tech.getBodyElement().className = '';
	}

	var cost = getCost(tech.cost['science'], tech.current);
	Game.settings.turnRed(science, cost, tech.htmlIdCost);

	if(tech.current === tech.maxLevel) {
		tech.getTitleElement().text(tech.name + " " + tech.maxLevel + " (MAX)");
		tech.getCostElement().text("N/A");
	} else {
		tech.getTitleElement().text(tech.name + " " + (tech.current) + " / " + tech.maxLevel);
		tech.getCostElement().text(Game.settings.format(cost));
	}
}
