Game.resourcesUI = (function(){

	var instance = {};

	instance.initialise = function() {
		for (var id in RESOURCE) {
			if ($('#' + RESOURCE[id]).length > 0) {
				Game.ui.bindElement(RESOURCE[id], this.createResourceDelegate(RESOURCE[id]));
			}
			if ($('#' + RESOURCE[id] + 'ps').length > 0) {
				Game.ui.bindElement(RESOURCE[id] + 'ps', this.createProductionDelegate(RESOURCE[id]));
			}
			if ($('#' + RESOURCE[id] + 'Storage').length > 0) {
				Game.ui.bindElement(RESOURCE[id] + 'Storage', this.createStorageDelegate(RESOURCE[id]));
			}
			if ($('#' + RESOURCE[id] + 'NextStorage').length > 0) {
				Game.ui.bindElement(RESOURCE[id] + 'NextStorage', this.createNextStorageDelegate(RESOURCE[id]));
			}

			var storageData = Game.resources.getStorageData(RESOURCE[id]);
			if (storageData !== null) {
				for (var costResource in storageData.cost) {
					Game.ui.bindElement(storageData.htmlIdCosts[costResource], this.createStorageCostDelegate(RESOURCE[id], costResource));
				}
			}
		}

		for (id in BUILDING) {
			if ($('#' + BUILDING[id]).length > 0) {
				Game.ui.bindElement(BUILDING[id], this.createBuildingDelegate(BUILDING[id]));
			}

			var buildingData = Game.buildings.getBuildingData(BUILDING[id]);
			if (buildingData !== null) {
				for (costResource in buildingData.cost) {
					Game.ui.bindElement(buildingData.htmlIdCosts[costResource], this.createBuildingCostDelegate(BUILDING[id], costResource));
				}
			}
		}

		// the auto bindings need to be updated after this is done
		Game.ui.updateAutoDataBindings();
	};

	instance.update = function(delta) {
		for (var id in RESOURCE) {
			var current = getResource(RESOURCE[id]);
			var capacity = getStorage(RESOURCE[id]);
			var production = getProduction(RESOURCE[id]);

			Game.settings.turnRedOrGreen(current, capacity, RESOURCE[id]);
			Game.settings.turnRedOnNegative(production, RESOURCE[id] + 'ps');

			var storageData = Game.resources.getStorageData(RESOURCE[id]);
			if (storageData !== null) {
				for (var costResource in storageData.cost) {
					Game.settings.turnRed(getResource(costResource), storageData.cost[costResource], storageData.htmlIdCosts[costResource]);
				}
			}
		}

		for (id in BUILDING) {
			var buildingData = Game.buildings.getBuildingData(BUILDING[id]);
			if (buildingData !== null) {
				for (costResource in buildingData.cost) {
					Game.settings.turnRed(getResource(costResource), buildingData.cost[costResource], buildingData.htmlIdCosts[costResource]);
				}
			}
		}
	};

	instance.createResourceDelegate = function(id) {
		var func;
		if (id === RESOURCE.Science) {
			func = (function() {
				var current = getResource(id);
				if (current < 100) {
					return Game.settings.format(current, 1);
				}
				else {
					return Game.settings.format(current);
				}
			});
		}
		else if (id === RESOURCE.RocketFuel) {
			func = (function() {
				var current = getResource(id);
				if (current < 100) {
					return Game.settings.format(current, 1);
				} else {
					return Game.settings.format(current);
				}
			});
		}
		else {
			func = (function() {
				return Game.settings.format(getResource(id));
			});
		}
		return func;
	};

	instance.createProductionDelegate = function(id) {
		var func;
		if (id === RESOURCE.Energy) {
			func = (function() {
				var production = getProduction(id);
				if (production >= 0) {
					if (production > 250) {
						return Game.settings.format(production);
					}
					else {
						return Game.settings.format(production * 2) / 2;
					}
				}
				else {
					if (production < -250) {
						return Math.round(production);
					}
					else {
						return Math.round(production * 2) / 2;
					}
				}
			});
		}
		else if (id === RESOURCE.Science) {
			func = (function() {
				return Game.settings.format(getProduction(id), 1);
			});
		}
		else if (id === RESOURCE.RocketFuel) {
			func = (function() {
				return Game.settings.format(getProduction(id), 1);
			});
		}
		else {
			func = (function() {
				return Game.settings.format(getProduction(id));
			});
		}

		return func;
	};

	instance.createStorageDelegate = function(id) {
		return (function() {
			return Game.settings.format(getStorage(id));
		});
	};

	instance.createNextStorageDelegate = function(id) {
		return (function() {
			return Game.settings.format(getStorage(id) * 2);
		});
	};

	instance.createStorageCostDelegate = function(id, costResource) {
		return (function() {
			return Game.settings.format(Game.resources.getStorageData(id).cost[costResource]);
		});
	};

	instance.createBuildingDelegate = function(id) {
		return (function() {
			return Game.settings.format(getBuildingNum(id));
		});
	};

	instance.createBuildingCostDelegate = function(id, costResource) {
		return (function() {
			return Game.settings.format(Game.buildings.getBuildingData(id).cost[costResource]);
		});
	};

	Game.uiComponents.push(instance);

	return instance;

}());