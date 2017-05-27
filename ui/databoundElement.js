(function(){

    var elementRegister = {};

    function DataBoundElement(id, valueLambda) {
        this.id = id;
        this.element = null;
        this.valueLambda = valueLambda;
        this.value = null;
    }

    // ---------------------------------------------------------------------------
    // basic functions
    // ---------------------------------------------------------------------------
    DataBoundElement.prototype.update = function(delta) {
        if(this.element === null) {
            this.element = $('#' + this.id);
            if(this.element.length === 0){
                console.error("Could not find bound element: " + this.id);
                this.element = null;
                return;
            }
        }

        var newValue = this.valueLambda();
        if(this.value !== null && this.value === newValue) {
            // No change
            return;
        }

        this.element.text(newValue);
        this.value = newValue;
    };

    Game.ui.bindElement = function(id, valueLambda) {
        if(elementRegister[id]) {
            console.error("Element " + id + " is already bound!");
            return;
        }

        var element = new DataBoundElement(id, valueLambda);
        elementRegister[id] = element;
        return element;
    };

    Game.ui.updateBoundElements = function(delta) {
        for(var key in elementRegister) {
            elementRegister[key].update(delta)
        }
    };

}());