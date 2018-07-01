// globally accessible convenience wrapper for Game.resources.getResource()
function getResource(id) {
	return Game.resources.getResource(id);
}

// globally accessible convenience wrapper for Game.resources.getStorage()
function getStorage(id) {
	return Game.resources.getStorage(id);
}

// globally accessible convenience wrapper for Game.resources.getProduction()
function getProduction(id) {
	return Game.resources.getProduction(id);
}

function getResourceAfterTick(id, delta) {
	return getResource(id) + getProduction(id) * delta;
}

function checkStorages(){
	if(!Game.activeNotifications.storage || Game.activeNotifications.storage.state == "closed"){

		if (Game.constants.enableStorageNotifications === false){
			return;
		}

		var resourcesFull = 0;
		for (var id in Game.resources.entries){

			if(Game.resources.getResourceData(id).current >= Game.resources.getResourceData(id).capacity){
				resourcesFull += 1;
			}
		}
		if(resourcesFull >= Game.statistics.get("resourcesUnlocked")){
			Game.notifyStorage();
		}
	}
}

function gainResources(delta) {
	for (var id in RESOURCE) {
		Game.resources.addResource(RESOURCE[id], getProduction(RESOURCE[id]) * delta);
	}
	antimatter += antimatterps * delta;
}

function addManualResource(id) {
    // Known resource?
    var Obj = Game.resources.entries;
    if (!contains(Object.keys(Obj), id)) { return false; }
    // Resource doesn't allow manual gain, or is hidden.
    if (!Obj[id].manualgain ||Obj[id].hidden) { return false; }
    // Resource has full storage
    var current = Obj[id].current;
    var capacity = Obj[id].capacity;
    if (current >= capacity) {return false;}
    // Find the input for this resource.
    if (!contains(Object.keys(Obj[id].buildings), id+'T1')) {
        console.log("Couldn't find the building '"+id+"T1'.") ; return false;
    }
    var gainNum = Obj[id].gainNum;
    var transaction = Obj[id].buildings[id+'T1'].resourcePerSecond
    // Can we afford the cost?
    var affordable = Object.keys(transaction).every(
        res => transaction[res] > 0 || Obj[res].current+(transaction[res]*gainNum) >= 0
    )
    if (!affordable) {return false;}
    // Add & remove all the resources in resourcePerSecond
    // This will still take all the costs, even if storage overflows
    Object.keys(transaction).forEach(
        res => (transaction[res] > 0) ? 
        		Game.resources.addResource(res, gainNum, true) : 
        		Game.resources.takeResource(res, Math.abs(transaction[res]*gainNum))
    )
};


// Gain Buttons - REPLACED BY addManualResource(id), taking the T1 input as cost
/*
function gainResource(resource){
	if(resource === RESOURCE.Plasma){
		if(getResource(RESOURCE.Energy) >= 1000 * gainNum && getResource(RESOURCE.Hydrogen) >= 10 * gainNum && getResource(RESOURCE.Plasma) < getMaxPlasma()){
			Game.resources.addResource(RESOURCE.Plasma, gainNum);
			Game.resources.takeResource(RESOURCE.Energy, 1000 * gainNum);
			Game.resources.takeResource(RESOURCE.Hydrogen, 10 * gainNum);
		}
	} else if(resource === RESOURCE.Charcoal){
		if(getResource(RESOURCE.Charcoal) < getStorage(RESOURCE.Charcoal) && getResource(RESOURCE.Wood) >= 2 * gainNum){
			Game.resources.addResource(RESOURCE.Charcoal, gainNum);
			Game.resources.takeResource(RESOURCE.Wood, 2 * gainNum);
		}
	} else if(resource === RESOURCE.Meteorite){
		if(getResource(RESOURCE.Meteorite) < getStorage(RESOURCE.Meteorite)){
			if(getResource(RESOURCE.Plasma) >= 3 * gainNum){
				Game.resources.addResource(RESOURCE.Meteorite, gainNum);
				Game.resources.takeResource(RESOURCE.Plasma, 3 * gainNum);
			}
		}
	} else {
		if(getResource(resource) < getStorage(resource)){
			Game.resources.addResource(resource, gainNum);
		}
	}
}
*/
function toggleCharcoal(){
	charcoalToggled = !charcoalToggled;
}

function toggleHeater(){
	heaterToggled = !heaterToggled;
}

function togglePlasmatic(){
	plasmaticToggled = !plasmaticToggled;
}

function toggleBath(){
	bathToggled = !bathToggled;
}

function toggleRocketFuel(){
	rocketFuelToggled = !rocketFuelToggled;
}

function toggleMeteorite(){
	meteoriteToggled = !meteoriteToggled;
}

function toggleAntimatter(){
	antimatterToggled = !antimatterToggled;
}