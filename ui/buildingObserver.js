(function(){

    var nextObserverId = 0;

    var observers = {};

    var coloringMaxCapacity = 'green';
    var coloringZeroOrNegative = 'red';

    var costObserverArray = {};

    function BuildingObserver(data) {
        this.type = data.type || BUILDING_OBSERVER_TYPE.CURRENT_VALUE;
        this.building = data.bld;
        this.htmlId = data.htmlId;
        this.enableColoring = data.coloring || true;
        this.value = data.value || null;
        this.id = nextObserverId++;
        observers[this.id] = this;
    }

    // ---------------------------------------------------------------------------
    // basic functions
    // ---------------------------------------------------------------------------
    BuildingObserver.prototype.initialize = function() {

    };

    BuildingObserver.prototype.update = function(delta) {
        var element = $('#' + this.htmlId);
        if(element.length === 0) {
            return;
        }

        var buildingData = Game.buildings.getBuildingData(this.building);
        if(!buildingData) {
            return;
        }

        if(!costObserverArray[this.building]) {
            costObserverArray[this.building] = [];
        }

        switch (this.type) {
            case BUILDING_OBSERVER_TYPE.CURRENT_VALUE: {
                element.text(Game.settings.format(buildingData.current));
                break;
            }

            case BUILDING_OBSERVER_TYPE.COST: {
                if(buildingData.costDisplayNeedsUpdate !== true) {
                    break;
                }

                var html = Game.ui.utils.buildCostDisplay(costObserverArray[this.building], buildingData.htmlId, buildingData.currentCost);
                element.empty();
                element.append($(html));

                buildingData.costDisplayNeedsUpdate = false;
                break;
            }

            case BUILDING_OBSERVER_TYPE.MAXIMUM: {
                break;
            }

            case BUILDING_OBSERVER_TYPE.RESOURCE_PRODUCTION: {
                // Produces 1 Metal per second.
                break;
            }

            /*case RESOURCE_OBSERVER_TYPE.CURRENT_VALUE: {
                element.text(Game.settings.format(resourceData.current));

                if(this.enableColoring) {
                    this.colorElementZero(element, resourceData.current);
                    this.colorElementMax(element, resourceData.current, resourceData.capacity);
                }

                break;
            }

            case RESOURCE_OBSERVER_TYPE.SPECIFIC_VALUE: {
                if(this.percentage === true) {
                    element.text(Game.settings.format(resourceData.current * this.value || 0));
                } else {
                    element.text(Game.settings.format(this.value || 0));
                }

                if(this.enableColoring) {
                    this.colorElementZero(element, this.value);
                    this.colorElementTarget(element, resourceData.current, this.value || 0);
                }

                break;
            }

            case RESOURCE_OBSERVER_TYPE.CAPACITY: {
                element.text(Game.settings.format(resourceData.capacity));

                if(this.enableColoring) {
                    this.colorElementZero(element, resourceData.capacity);
                }

                break;
            }

            case RESOURCE_OBSERVER_TYPE.PER_SECOND: {
                element.text(Game.settings.format(resourceData.perSecond));

                if(this.enableColoring) {
                    this.colorElementZero(element, resourceData.perSecond);
                }

                break;
            }

            case RESOURCE_OBSERVER_TYPE.LEGACY_VALUE: {
                var value = window[this.resource];
                element.text(Game.settings.format(value));

                if(this.enableColoring) {
                    this.colorElementZero(element, value);
                }

                break;
            }

            case RESOURCE_OBSERVER_TYPE.LEGACY_TARGET_VALUE: {
                var value = window[this.resource];

                element.text(Game.settings.format(this.value));

                if(this.enableColoring) {
                    this.colorElementTarget(element, value, this.value || 0);
                }

                break;
            }*/
        }
    };

    BuildingObserver.prototype.colorElementZero = function (element, value) {
        if(value <= 0) {
            element.addClass(coloringZeroOrNegative);
        } else {
            element.removeClass(coloringZeroOrNegative);
        }
    };

    BuildingObserver.prototype.colorElementMax = function(element, value, maxValue) {
        if(!isNaN(maxValue) && maxValue !== null && value === maxValue) {
            element.addClass(coloringMaxCapacity);
        } else {
            element.removeClass(coloringMaxCapacity);
        }
    };

    BuildingObserver.prototype.colorElementTarget = function (element, value, maxValue) {
        if(value <= maxValue) {
            element.addClass(coloringZeroOrNegative);
        } else {
            element.removeClass(coloringZeroOrNegative);
        }
    };

    BuildingObserver.prototype.delete = function() {
        delete observers[this.id];
    };

    // ---------------------------------------------------------------------------
    // registration
    // ---------------------------------------------------------------------------
    Game.ui.createBuildingObserver = function(data) {
        return new BuildingObserver(data);
    };

    var instance = {};

    instance.initialize = function() {
    };

    instance.update = function(delta) {
        for(var id in observers) {
            var observer = observers[id];
            observer.update(delta);
        }
    };

    Game.uiComponents.push(instance);

}());