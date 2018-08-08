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
    if (!contains(Object.keys(Obj[id].items), id+'T1')) {
        console.log("Couldn't find the building '"+id+"T1'."); return false;
    }
    var gainNum = Obj[id].gainNum;
    var transaction = Obj[id].items[id+'T1'].resourcePerSecond
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
    );
};