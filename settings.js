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
            gainButtonsHidden: false,
            redDestroyButtons: false,
            theme: 'base',
            autoSaveInterval: 30 * 1000
        },
        reapplyTheme: true
    };

    instance.format = function(value, digit) {
        var format = this.entries.formatter || 'shortName';
        return Game.utils.formatters[format](value.toFixed(digit || 0));
    };

    instance.turnRedOnNegative = function(value, id) {
        var element = $('#' + id);
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
    };

    instance.turnRed = function(value, target, id) {
        var element = $('#' + id);
        if(element.length === 0) {
            console.error("Element not found: " + id);
            return;
        }

        if(value < target){
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
    };

    instance.turnRedOrGreen = function(value, target, id) {
        var element = $('#' + id);
        if(element.length === 0) {
            console.error("Element not found: " + id);
            return;
        }

        if(value == 0){
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

        if(value >= target) {
            element.addClass('green');
        } else {
            element.removeClass('green');
        }
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
        $('#gainButtonsHidden').prop('checked', this.entries.gainButtonsHidden);
        $('#redDestroyButtons').prop('checked', this.entries.redDestroyButtons);

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
            if(contains(researched, "unlockDestruction")){
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

        if(contains(researched, "unlockDestruction")){
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
        document.getElementById("companyName").innerHTML = companyName;
    }

    return instance;

}());
