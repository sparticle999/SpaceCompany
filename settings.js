Game.settings = (function(){

    var autoSaveMapping = {
        '30secs': 30 * 1000,
        '2mins': 2 * 60 * 1000,
        '10mins': 10 * 60 * 1000,
        'off': 10000000000000000000
    };

    var instance = {
        dataVersion: 1,
        entries: {
            formatter: 'shortName',
            boldEnabled: false,
            sidebarCompressed: false,
            notificationsEnabled: true,
            saveNotifsEnabled: true,
            gainButtonsHidden: false,
            redDestroyButtons: false,
            hideCompleted: false,
            theme: 'base',
            autoSaveInterval: 30 * 1000
        },
        reapplyTheme: true
    };

    // After a setting is changed, call: refreshElements() to force a all updateable elements to update.

    instance.getMask = function() {};

    ///////////////////////////////////////////////////
    //              FORMATTING FUNCTIONS             //
    // The UI will warn if it encounters an action   //
    // which isn't defined.                          //
    ///////////////////////////////////////////////////
    /**
     * Formats a value according to the action/key provided.
     * @param   {String} action  Internal descriptor of the formatting case
     * @param   {Object} object  The parent object of the method requesting formatting
     * @return  {String}         Returns the formatted string
     */
    instance.doFormat = function(action, object) {
        var key = object.id;
        action = action.toString().toLowerCase();
        ///////////////////////////
        // perSecond formatting. //
        ///////////////////////////
        if (action == 'persecond') {
            switch(key) {

                // energy
                case 'energy':
                    var input = object.perSecond;
                    // Fix rounding on large numbers
                    if (input > 250 || input < -250) {
                        input = (input*2)/2;
                        input = Game.settings.format(input).toString();
                    } else {
                        input = Game.settings.format(input, 2).toString();
                    }
                    // If the storage is full, don't colour persecond green or red
                    if (object.current >= object.capacity) { return input; }
                    // input is lower than 0, apply red and maybe bold
                    if (object.perSecond < 0) {
                        if (Game.settings.entries.boldEnabled) {input.bold();}
                        input.fontcolor('red');
                    // turn persecond green
                    } else {
                        input.fontcolor('green');
                    }
                    return input;

                // science
                case 'science':
                    // Do general formatting
                    var input = object.perSecond;
                    input = Game.settings.format(input, 1).toString();
                    // If the storage is full, don't colour persecond green or red
                    if (object.current >= object.capacity) { return input; }
                    // input is lower than 0, apply red and maybe bold
                    if (object.perSecond < 0) {
                        if (Game.settings.entries.boldEnabled) {input.bold();}
                        input.fontcolor('red');
                    // turn persecond green
                    } else {
                        input.fontcolor('green');
                    }
                    return input; 

                // rocketFuel
                case 'rocketFuel':
                    // Do general formatting
                    var input = object.perSecond;
                    input = Game.settings.format(input, 1).toString();
                    // If the storage is full, don't colour persecond green or red
                    if (object.current >= object.capacity) { return input; }
                    // input is lower than 0, apply red and maybe bold
                    if (object.perSecond < 0) {
                        if (Game.settings.entries.boldEnabled) {input.bold();}
                        input.fontcolor('red');
                    // turn persecond green
                    } else {
                        input.fontcolor('green');
                    }
                    return input;

                // Default
                default:
                    var input = object.perSecond;
                    // Do general formatting
                    input = Game.settings.format(input).toString();
                    // If the storage is full, don't colour persecond green or red
                    if (object.current >= object.capacity) { return input; }
                    // input is lower than 0, apply red and maybe bold
                    if (object.perSecond < 0) {
                        if (Game.settings.entries.boldEnabled) {input.bold();}
                        input.fontcolor('red');
                    // turn persecond green
                    } else {
                        input.fontcolor('green');
                    }
                    return input;
            }
        //////////////////////
        // Count formatting //
        //////////////////////
        } else if (action == 'count') {
            switch(key) {
                default:
                    if (typeof object.amountMax == 'undefined' || object.amountMax == 1 || object.amountMax > 1000) {
                        var ret = object.amountCurrent.toString().bold();
                    } else {
                        var ret = (object.amountCurrent+" / "+object.amountMax).bold();
                    }
                    return ret;               
            }
        ////////////////////////////
        // Current amount of item //
        ////////////////////////////
        } else if (action == 'current') {
            switch(key) {
                default:
                    var input = object.current;
                    input = Game.settings.format(input, 0).toString();
                    if (object.current >= object.capacity) {
                        input = input.fontcolor('green');
                    } else if (object.current < 1) {
                        if (Game.settings.entries.boldEnabled) {input.bold();}
                        input.fontcolor('red');
                    }
                    return input;
            }
        ////////////////////////////////////
        // Max storage amount on the menu //
        ////////////////////////////////////
        } else if (action == 'capacity') {
            switch(key) {
                default:
                    var input = object.capacity;
                    var result = [];
                    result.push(Game.settings.format(input, 0).toString());
                    // nextStorage
                    result.push(Game.settings.format(input*2, 0).toString());
                    return result;
            }
        /////////////////////////
        // Display of any cost //
        /////////////////////////
        } else if (action == 'cost') {
            switch(key) {
                default:
                    var cost = object.cost;
                    var input = [];
                    Object.keys(cost).forEach(c => input.push(Game.settings.format(cost[c], 0).toString()+" "+c));
                    if (input.length > 1) {
                        input = "Cost: "+input.slice(0, input.length-1).join(', ')+" and "+input[input.length-1];
                    } else {
                        input = "Cost: "+input[0];
                    }
                    return input;

                
            }
        ///////////////////////////////////////////
        // Display of any input, similar to cost //
        ///////////////////////////////////////////
        } else if (action == 'input') {
            switch(key) {
                default:
                
            }
        /////////////////////////////////////////
        // perClick gain number of gainButtons //
        /////////////////////////////////////////
        } else if (action == 'perclick') {
            switch(key) {
                default:
                    var input = object.perClick;
                    input = Game.settings.format(input, 0).toString();
                    return input;
            }
        }
    }




    instance.format = function(value, digit) {
        var format = this.entries.formatter || 'shortName';
        return Game.utils.formatters[format](value.toFixed(digit || 0));
    };

    instance.turnRedOnNegative = function(value, id) {
        // have the elementhandler take care of this.
/*
        var element = $('#'+id+'_display');
        if(element.length === 0) {
            console.error("Element not found: " + id);
            return;
        }

        if(value < 0){
            element.addClass('red');
            if(this.entries.boldEnabled === true){
                element.addClass('bold');
            } else {
                element.removeClass('bold');
            }

            return true;
        }
        else{
            element.removeClass('red');
            element.removeClass('bold');
            return false;
        }
*/
        return true;
    };

    instance.turnRed = function(value, target, id) {
        // var element = $('#' + id);
        // if(element.length === 0) {
        //     console.error("Element not found: " + id);
        //     return;
        // }

        // if(value < target){
        //     element.addClass('red');
        //     if(this.entries.boldEnabled === true){
        //         element.addClass('bold');
        //     } else {
        //         element.removeClass('bold');
        //     }
        // }
        // else{
        //     element.removeClass('red');
        //     element.removeClass('bold');
        // }
    };

    instance.turnRedOrGreen = function(value, target, id) {
        // have the elementhandler take care of this.
/*
        console.log(value)
        console.log(target)
        console.log(id)
        var element = $('#'+id+'_current');
        if(element.length === 0) {
            console.error("Element not found: " + id);
            return;
        }

        if(value === 0){
            element.addClass('red');
            if(this.entries.boldEnabled === true){
                element.addClass('bold');
            } else {
                element.removeClass('bold');
            }
        }
        else{
            element.removeClass('red');
            element.removeClass('bold');
        }

        if(value >= target && target >= 0) {
            element.addClass('green');
        } else {
            element.removeClass('green');
        }
*/
    };

    instance.save = function(data) {
        data.settings = {version: this.dataVersion, entries: {}};
        for(var id in this.entries) {
            data.statistics.entries[id] = this.entries[id];
        }
    };

    instance.load = function(data) {
        this.loadLegacy(data);

        if(data.statistics) {
            if(data.statistics.version && data.statistics.version === this.dataVersion) {
                for(var id in data.statistics.entries) {
                    this.entries[id] = data.statistics.entries[id];
                }
            }
        }

        $('#formatSelector').val(this.entries.formatter);
        $('#themeSelector').val(this.entries.theme);
        $('#boldEnabled').prop('checked', this.entries.boldEnabled);
        $('#sidebarCompressed').prop('checked', this.entries.sidebarCompressed);
        $('#notificationsEnabled').prop('checked', this.entries.notificationsEnabled);
        $('#saveNotifsEnabled').prop('checked', this.entries.saveNotifsEnabled);
        $('#gainButtonsHidden').prop('checked', this.entries.gainButtonsHidden);
        $('#redDestroyButtons').prop('checked', this.entries.redDestroyButtons);
        $('#hideCompleted').prop('checked', this.entries.hideCompleted);


        // (un)Compress the sidebar
        if (Game.settings.entries.sidebarCompressed) {
            Templates.uiFunctions.addStyle('sideTab', 'height', '30px');
        } else {
            Templates.uiFunctions.addStyle('sideTab', 'height', '60px');
        }
        // (un)Red the destroy buttons
        if (Game.settings.entries.redDestroyButtons) {
            Templates.uiFunctions.addStyle('destroy', 'backgroundColor', 'red');
        } else {
            Templates.uiFunctions.removeStyle('destroy', 'backgroundColor');
        }
        // (un)Hide the gain button
        if (Game.settings.entries.gainButtonsHidden) {
            Templates.uiFunctions.addClass('hidden', 'gainButton');
        } else {
            Templates.uiFunctions.removeClass('hidden', 'gainButton');
        }
        // (un)Hide completed tabs - This needs to be called again after a tab is actually completed
        if (Game.settings.entries.hideCompleted) {
            Templates.uiFunctions.addClass('hidden', 'completed');
        } else {
            Templates.uiFunctions.removeClass('hidden', 'completed');
        }

        
        for(var id in autoSaveMapping) {
            var element = $('#' + id);
            if(this.entries.autoSaveInterval === autoSaveMapping[id]) {
                element.val('on');
            } else {
                element.val('off');
            }
        }

        this.reapplyTheme = true;
    };

    // backwards compatibility with the old stats
    instance.loadLegacy = function(data) {
        if(data.currentTheme) { this.set('theme', data.currentTheme); }
    };

    instance.set = function(key, value) {
        this.entries[key] = value;
    };

    instance.initialise = function() {
        $('#formatSelector').change(function(){
            Game.settings.set('formatter', $(this).val());
        });

        $('#themeSelector').change(function(){
            Game.settings.set('theme', $(this).val());
            Game.settings.reapplyTheme = true;
        });

        $('#boldEnabled').change(function(){
            Game.settings.set('boldEnabled', $(this).is(':checked'));
        });

        $('#sidebarCompressed').change(function(){
            Game.settings.set('sidebarCompressed', $(this).is(':checked'));
            if(Game.settings.entries.sidebarCompressed === true){
                for(var i = 0; i < document.getElementsByClassName("sideTab").length; i ++){
                    document.getElementsByClassName("sideTab")[i].style.height = "30px";
                }
            }
            else{
                for(var i = 0; i < document.getElementsByClassName("sideTab").length; i ++){
                    document.getElementsByClassName("sideTab")[i].style.height = "60px";
                }
            }
        });

        $('#notificationsEnabled').change(function(){
            Game.settings.set('notificationsEnabled', $(this).is(':checked'));
        });

        $('#saveNotifsEnabled').change(function(){
            Game.settings.set('saveNotifsEnabled', $(this).is(':checked'));
        });

        $('#gainButtonsHidden').change(function(){
            Game.settings.set('gainButtonsHidden', $(this).is(':checked'));
            if(Game.settings.entries.gainButtonsHidden === true){
                for(var i = 0; i < document.getElementsByClassName("gainButton").length; i ++){
                    document.getElementsByClassName("gainButton")[i].className = "gainButton hidden";
                }
            }
            else{
                for(var i = 0; i < document.getElementsByClassName("gainButton").length; i ++){
                    document.getElementsByClassName("gainButton")[i].className = "gainButton";
                }
            }
        });

        $('#redDestroyButtons').change(function(){
            Game.settings.set('redDestroyButtons', $(this).is(':checked'));
            if (Game.tech.isPurchased('unlockDestruction')) {
                if(Game.settings.entries.redDestroyButtons === true){
                    for(var i = 0; i < document.getElementsByClassName("destroy").length; i ++){
                        document.getElementsByClassName("destroy")[i].className = "btn btn-danger destroy";
                    }
                }
                else{
                    for(var i = 0; i < document.getElementsByClassName("destroy").length; i ++){
                        document.getElementsByClassName("destroy")[i].className = "btn btn-default destroy";
                    }
                }
            }
        });

        if (Game.tech.isUnlocked('unlockDestruction')) {
            if(Game.settings.entries.redDestroyButtons === true){
                for(var i = 0; i < document.getElementsByClassName("destroy").length; i ++){
                    document.getElementsByClassName("destroy")[i].className = "btn btn-danger destroy";
                }
                
            }
            else{
                for(var i = 0; i < document.getElementsByClassName("destroy").length; i ++){
                    document.getElementsByClassName("destroy")[i].className = "btn btn-default destroy";
                }
            }
        }

        $('#hideCompleted').change(function(){
            Game.settings.set('hideCompleted', $(this).is(':checked'));
            if(Game.settings.entries.hideCompleted === true){
                for(var i = 0; i < document.getElementsByClassName("completed").length; i ++){
                    document.getElementsByClassName("completed")[i].className = "completed hidden";
                }
            }
            else{
                for(var i = 0; i < document.getElementsByClassName("completed").length; i ++){
                    document.getElementsByClassName("completed")[i].className = "completed";
                }
            }
        });

        for (var id in autoSaveMapping) {
            var element = $('#' + id);
            element.change({val: autoSaveMapping[id]}, function(args){
                Game.settings.set('autoSaveInterval', args.data.val);
            });
        }
    };

    instance.update = function(delta) {
        if(this.reapplyTheme === true) {
            this.reapplyTheme = false;
            this.updateTheme();
        }
    };

    instance.updateTheme = function() {
        var element = $('#theme_css');

        if(element.length === 0) {
            console.warn("Theme CSS Element does not exist!");
            return;
        }

        if(this.entries.theme === "base") {
            element.attr('href', 'lib/bootstrap.min.css');
        } else {
            element.attr('href', 'styles/' + this.entries.theme + '-bootstrap.min.css');
        }
    };

    instance.updateCompanyName = function(){
        document.getElementById("companyName").innerHTML = 
            companyName //Escape unsafe HTML characters in companyName to prevent XXS
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
    }

    return instance;

}());
