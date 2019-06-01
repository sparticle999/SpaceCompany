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
            fps: 10,
            boldEnabled: false,
            sidebarCompressed: false,
            notificationsEnabled: true,
            saveNotifsEnabled: true,
            gainButtonsHidden: false,
            redDestroyButtons: false,
            theme: 'base',
            autoSaveInterval: 30 * 1000
        },
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
                        input.fontcolor('00b200');
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
                        input.fontcolor('00b200');
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
                        input.fontcolor('00b200');
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
                        input.fontcolor('00b200');
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
                case 'science':
                    var input = object.current;
                    if(object.current < 100){
                        input = Game.settings.format(input, 1).toString();
                    } else {
                        input = Game.settings.format(input, 0).toString();
                    }
                    if (object.current >= object.capacity) {
                        input = input.fontcolor('00b200');
                    } else if (object.current < 1) {
                        if (Game.settings.entries.boldEnabled) {input.bold();}
                        input.fontcolor('red');
                    }
                    return input;
                case 'rocketFuel':
                    var input = object.current;
                    if(object.current < 100){
                        input = Game.settings.format(input, 1).toString();
                    } else {
                        input = Game.settings.format(input, 0).toString();
                    }
                    if (object.current >= object.capacity) {
                        input = input.fontcolor('00b200');
                    } else if (object.current < 1) {
                        if (Game.settings.entries.boldEnabled) {input.bold();}
                        input.fontcolor('red');
                    }
                    return input;
                default:
                    var input = object.current;
                    input = Game.settings.format(input, 0).toString();
                    if (object.current >= object.capacity) {
                        input = input.fontcolor('00b200');
                    } else if (object.current < 1) {
                        if (Game.settings.entries.boldEnabled) {input.bold();}
                        input.fontcolor('red');
                    }
                    return input;
            }
        ////////////////////////////
        // Active amount of item //
        ////////////////////////////
        } else if (action == 'active') {
            switch(key) {
                default:
                    var input = object.active;
                    input = Game.settings.format(input, 0).toString();
                    if (object.active >= object.capacity) {
                        input = input.fontcolor('00b200');
                    } else if (object.active < 1) {
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
                    var result = '<dl style="margin-bottom:0px;"><table><tr><td><dt>Cost:</dt>';
                    Object.keys(cost).forEach (function(c) {
                        if(c == "segment"){
                            if(Game.solCenter.entries.dyson.items.segment.current >= cost[c]){
                                var time = "Done!".bold()
                            } else {
                                var time = "~~";
                            }
                            result += "<dd>&#8227; Dyson Segments: "+Game.settings.format(cost[c], 0).toString()+" ( "+time+" )</dd>"
                        } else {
                            if (cost[c] > Game.resources.entries[c].capacity && c != "science" && c != "rocketFuel") {
                                var time = "Insufficient storage".bold();
                            } else {
                                var time = Math.max((cost[c]-Game.resources.entries[c].current)/Game.resources.entries[c].perSecond, 0);
                                time = ((cost[c] > Game.resources.entries[c].current) ? Game.utils.getTimeDisplay(time, true) : "Done!".bold());
                            }
                            result += "<dd>&#8227; "+Game.resources.entries[c].name+": "+Game.settings.format(cost[c], 0).toString()+" ( "+time+" )</dd>"                            
                        }
                    });
                    result += '</td><td style="position:absolute;margin-left:100px">';
                    if ('storage' in object) {
                        var storage = object.storage;
                        var capacity = '';
                        Object.keys(storage).forEach (function(c) {
                        capacity += "<dd>&#8227; "+Game.resources.entries[c].name+":&nbsp;&nbsp;"+Game.settings.format(storage[c], 0).toString()+"</dd>";
                        capacity = '<dl><dt>Storage:</dt>'+capacity;
                        result += capacity;
                    });

                    }
                    if ('resourcePerSecond' in object) {
                        var ps = object.resourcePerSecond;
                        var input = '';
                        var output = '';
                        Object.keys(ps).forEach (function(c) {
                            if (ps[c] > 0) {
                                output += "<dd>&#8227; "+Game.resources.entries[c].name+":&nbsp;&nbsp;"+Game.settings.format(ps[c], 2).toString()+"</dd>";
                            } else {
                                var txt = Game.settings.format(Math.abs(ps[c]), 0).toString();
                                if (Math.abs(ps[c]) > Game.resources.entries[c].perSecond) {
                                    if (Game.settings.entries.boldEnabled) {txt = txt.bold();}
                                    txt = txt.fontcolor('red');
                                } else {txt = txt.fontcolor('00b200');}
                                input += "<dd>&#8227; "+Game.resources.entries[c].name+":&nbsp;&nbsp;"+txt+"</dd>";
                            }
                        });
                        if (output == "") {output += "<dd>&#8227; None</dd>"}
                        if (input == "") {input += "<dd>&#8227; None</dd>"}
                        output = '<dl><dt>Output:</dt>'+output;
                        input = '<dl><dt>Input:</dt>'+input;
                        result += input+output;
                    }
                    
                    return result + '</td></tr></table></dl>';
            }

        /////////////////////////////////////////
        // perClick gain number of gainButtons //
        /////////////////////////////////////////
        } else if (action == 'gainNum') {
            switch(key) {
                default:
                    var input = object.gainNum;
                    input = Game.settings.format(input, 0).toString();
                    return input;
            }

        /////////////////////////////////////
        // Progress Bar Percent of Wonders //
        /////////////////////////////////////
        } else if (action == 'progress') {
            switch(key) {
                default:
                    var input = Game.wonder.getProgress(object.id);
                    input = Game.settings.format(input, 1).toString();
                    return input;
            }
        }
    }

    instance.format = function(value, digit) {
        var format = this.entries.formatter || 'shortName';
        return Game.utils.formatters[format](value.toFixed(digit || 0));
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
        if(Game.settings.entries.fps){
            var slider = document.getElementById("fpsSlider");
            var output = document.getElementById("fpsVal");
            slider.value = Game.settings.entries.fps;
            slider.setAttribute("value", Game.settings.entries.fps);
            output.innerHTML = slider.value/2;
            this.fps = slider.value/2;
            slider.oninput()
        }

        // Bold enabled
        document.getElementById('boldEnabled').checked = Game.settings.entries.boldEnabled;

        // (un)Compress the sidebar
        if (Game.settings.entries.sidebarCompressed) {
            Templates.uiFunctions.addStyle('sideTab', 'height', '30px');
        } else {
            Templates.uiFunctions.addStyle('sideTab', 'height', '60px');
        }
        document.getElementById('sidebarCompressed').checked = Game.settings.entries.sidebarCompressed;

        // Notifications Enabled
        document.getElementById('notificationsEnabled').checked = Game.settings.entries.notificationsEnabled;

        // (un)Hide the gain button
        if (Game.settings.entries.gainButtonsHidden) {
            Templates.uiFunctions.addClass('hidden', 'gainButton');
        } else {
            Templates.uiFunctions.removeClass('hidden', 'gainButton');
        }
        document.getElementById('gainButtonsHidden').checked = Game.settings.entries.gainButtonsHidden;

        // (un)Red the destroy buttons
        if (Game.settings.entries.redDestroyButtons) {
            Templates.uiFunctions.addStyle('destroy', 'backgroundColor', 'red');
        } else {
            Templates.uiFunctions.removeStyle('destroy', 'backgroundColor');
        }
        document.getElementById('redDestroyButtons').checked = Game.settings.entries.redDestroyButtons;
        
        for(var id in autoSaveMapping) {
            var element = $('#' + id);
            if(this.entries.autoSaveInterval === autoSaveMapping[id]) {
                element.val('on');
            } else {
                element.val('off');
            }
        }

        this.updateTheme();
    };

    // backwards compatibility with the old stats
    instance.loadLegacy = function(data) {
        if(data.currentTheme) { this.set('theme', data.currentTheme); }
    };

    instance.set = function(key, value) {
        this.entries[key] = value;
    };

    instance.initialise = function() {
        for (var id in autoSaveMapping) {
            var element = $('#' + id);
            element.change({val: autoSaveMapping[id]}, function(args){
                Game.settings.set('autoSaveInterval', args.data.val);
            });
        }

        $('#themeSelector').change(function(){
            Game.settings.set('theme', $(this).val());
            Game.settings.updateTheme();
        });

        $('#formatSelector').change(function(){
            Game.settings.set('formatter', $(this).val());
        });

        var slider = document.getElementById("fpsSlider");
        var output = document.getElementById("fpsVal");
        output.innerHTML = slider.value;
        this.fps = parseInt(slider.value);

        slider.oninput = function() {
          output.innerHTML = this.value;
          Game.settings.entries.fps = parseInt(this.value);
        }

        $('#boldEnabled').change(function(){
            Game.settings.set('boldEnabled', $(this).is(':checked'));
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
            }else{
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
        }
    };

    instance.update = function(delta) {
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
            Game.companyName //Escape unsafe HTML characters in companyName to prevent XXS
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
    }

    return instance;

}());
