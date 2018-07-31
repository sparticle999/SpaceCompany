var Game = (function() {
    'use strict';

    var instance = {
        ui: {},
        lastUpdateTime: 0,
        intervals: {},
        uiComponents: [],
        logoAnimating: true,
        timeSinceAutoSave: 0,
        activeNotifications: {},
        lastFixedUpdate: new Date().getTime(),
        versionNumber: "V0.5.1",
        companyName: "Space"
    };

    instance.update_frame = function(time) {
        Game.update(time - Game.lastUpdateTime);
        Game.lastUpdateTime = time;

        // This ensures that we wait for the browser to "catch up" to drawing and other events
        window.requestAnimationFrame(Game.update_frame);
    };

    instance.update = function(delta) {
        for (var name in this.intervals) {
            var data = this.intervals[name];
            data.e += delta;
            if (data.e > data.d) {
                data.c(this, data.e / 1000);
                data.e = 0;
            }
        }
    };

    instance.createInterval = function(name, callback, delay) {
        this.intervals[name] = {c: callback, d: delay, e: 0}
    };

    instance.deleteInterval = function(name) {
        delete this.intervals[name];
    };

    instance.fixedUpdate = function() {
        var currentTime = new Date().getTime();
        var delta = (currentTime - this.lastFixedUpdate) / 1000;
        this.lastFixedUpdate = currentTime;

        refreshPerSec(delta);
        gainResources(delta);
        fixStorageRounding();
    };

    instance.fastUpdate = function(self, delta) {
        Game.tech.updateEfficiencies();
        var tabs = ["resources", "tech", "solar", "wonder", "solCenter", "interstellar", "stargaze"];
        for(var i = 0; i < tabs.length; i++){
            if(document.getElementById(tabs[i]+"Tab")==null||typeof self[tabs[i]+"UI"].update == 'undefined'){
                continue;
            }
            if(document.getElementById(tabs[i] + "Tab").className == "active"){
                self[tabs[i]+"UI"].update(delta);
            }
        }

        //self.ui.updateBoundElements(delta);
        self.resources.update(delta);
        Game.resources.updateResourcesPerSecond();
        self.buildings.update(delta);
        self.tech.update(delta);
        self.solar.update(delta);
        self.wonder.update(delta);
        self.solCenter.update(delta);
        self.interstellar.update(delta);
        self.stargaze.update(delta);
        self.settings.update(delta);

        self.updateAutoSave(delta);

        if(delta > 1) {
            console.log("You have been away for " + Game.utils.getTimeDisplay(delta));
        }
    };

    instance.slowUpdate = function(self, delta) {
        refreshConversionDisplay();
        refreshTimeUntilLimit();

        self.buildings.updatePerSecondProduction = true;

        self.resources.checkStorages();
        self.solCenter.autoEmc();

        self.updateTime(delta);

        self.achievements.update(delta);
        self.statistics.update(delta);
    };

    instance.uiUpdate = function(self, delta) {
        for(var i = 0; i < self.uiComponents.length; i++) {
            self.uiComponents[i].update(delta);
        }
    };

    instance.updateTime = function(delta) {
        Game.statistics.add('sessionTime', delta);
        Game.statistics.add('timePlayed', delta);
    };

    instance.import = function() {
        var text = $('#impexpField').val();
        if (!text.trim()) return console.warn("No save to import provided.");
        if(text.length % 4 !== 0) {
            console.log("String is not valid base64 encoded: " + text.length + ' (' + text.length % 4 + ')');
            return;
        }

        var decompressed = LZString.decompressFromBase64(text);
        if(!decompressed) {
            console.log("Import Game failed, could not decompress!");
            return;
        }

        localStorage.setItem("save", decompressed);

        console.log("Imported Saved Game");

        window.location.reload();
    };

    instance.export = function() {
        var data = this.save();

        var string = JSON.stringify(data);
        var compressed = LZString.compressToBase64(string);

        console.log('Compressing Save');
        console.log('Compressed from ' + string.length + ' to ' + compressed.length + ' characters');
        $('#impexpField').val(compressed);
    };

    instance.save = function() {
        var data = {
            companyName: this.companyName,
            lastFixedUpdate: this.lastFixedUpdate
        };

        this.achievements.save(data);
        this.statistics.save(data);
        this.resources.save(data);
        this.buildings.save(data);
        this.tech.save(data);
        this.solar.save(data);
        this.wonder.save(data);
        this.solCenter.save(data);
        this.settings.save(data);
        this.interstellar.save(data);
        this.stargaze.save(data);
        this.updates.save(data);

        localStorage.setItem("save",JSON.stringify(data));
        Game.notifyInfo('Game Saved', 'Your save data has been stored in localStorage on your computer');
        console.log('Game Saved');

        return data;
    };

    instance.load = function() {
        var data = JSON.parse(localStorage.getItem("save"));

        if(data && data !== null) {
            this.achievements.load(data);
            this.statistics.load(data);
            this.resources.load(data);
            this.buildings.load(data);
            this.stargaze.load(data);
            this.tech.load(data);
            this.solar.load(data);
            this.wonder.load(data);
            this.solCenter.load(data);
            this.interstellar.load(data); 
            this.updates.load(data);

            this.settings.load(data);

            if(data != null && data.lastFixedUpdate && !isNaN(data.lastFixedUpdate)) {
                this.handleOfflineGains((new Date().getTime() - data.lastFixedUpdate) / 1000);
            }
        }

        console.log("Data Loaded");
    };

    instance.updateUI = function(self){
        Game.settings.updateCompanyName();

        if(Game.constants.enableMachineTab === true){
            $('#machineTopTab').show();
        }

        $('#versionLabel').text(Game.versionNumber);

        self.interstellar.redundantChecking();
    }


    /**
     * Combines two objects based on an attribute
     * @param  {Object} from An Object with specific data, eg Game.resources
     * @param  {string} cat  The category we'll base the link on
     * @param  {Object} to   The target Object for linking
     * @param  {string} con  The container to collect the linked Object in
     * Runthrough: Game.resources.entries, 'category', Game.resourceCategoryData, 'items'
     */
     instance.combineGameObjects = function(from, cat, to, con) {
        // Obj keys: [metal, energy] -> metal
        Object.keys(from).map(function(item) {
            // if Game.resources.entries.metal doesn't contain 'category', then complain
            if (!contains(Object.keys(from[item]), cat)) {
                console.log("Object 'from'->"+item+" doesn't contain attribute: "+cat);
                return false;
            }
            // value = Game.resources.entries.metal.category = earth
            var value = from[item][cat];
            // if 'con' is set
            if (con) {
                // If earth not in Game.resourceCategoryData, create Game.resourceCategoryData.earth
                if (!(value in to)) {to[value] = {};}
                // If 'items' not in to.earth, create to.earth.items
                if (!(con in to[value])) {to[value][con] = {};}
                // if 'metal' not in to.earth.items, create to.earth.items.metal
                if (!(item in to[value][con])) {to[value][con][item] = {};}
                // set Game.resourceCategoryData.earth.items.metal to Game.resources.entries.metal
                to[value][con][item] = from[item]    
            } else {
                if (!(value in to)) {to[value] = {};}
                if (!(item in to[value])) {to[value][item] = {};}
                to[value][item] = from[item]        
            }
        })
    }

    /**
     * Creates a hierarchical Object with data per page -> category -> subcategory
     */
     instance.combineAllGameObjects = function() {
        Game.pages = {};
        // link Game.resourceDataCategories page to Game.pages
        // This creates the Game.pages.resources.earth
        this.combineGameObjects(Game.resourceCategoryData, 'page', Game.pages, '');
        // link Game.resources.entries category to Game.resourceCategoryData
        this.combineGameObjects(Game.resources.entries, 'category', Game.resourceCategoryData, 'items');
        // link Game.resources.storageUpgrades resource to Game.resources.entries
        this.combineGameObjects(Game.resources.storageUpgrades.entries, 'resource', Game.resources.entries, 'storUpgrades')
        // link Game.buildings.entries to Game.resources.entries
        this.combineGameObjects(Game.buildings.entries, 'resource', Game.resources.entries, 'items');
        // link Game.resources.entries to buildings.storageEntries
        this.combineGameObjects(Game.buildings.storageEntries, 'resource', Game.resources.entries, 'storBuildings');

        // Link Game.techCategoryData page to Game.pages
        this.combineGameObjects(Game.techCategoryData, 'page', Game.pages)
        // Link Game.techData catgory to Game.techCatgoryData.technology items
        this.combineGameObjects(Game.techData, 'category', Game.techCategoryData.research.items, 'items')

        // Link Game.solarCategoryData page to Game.pages
        this.combineGameObjects(Game.solarCategoryData, 'page', Game.pages);
        this.combineGameObjects(Game.solarDestinationData, 'category', Game.solarCategoryData, 'items');
        this.combineGameObjects(Game.solarData, 'id', Game.solarDestinationData, 'items')
        // Link Game.solar.entries category to Game.resourceCategoryData
        //this.combineGameObjects(Game.solarDestinationData, 'category', Game.solarCategoryData, 'items');
        // Link it again, a level deeper and link on id
        //this.combineGameObjects(Game.solar.entries, 'id', Game.solarDestinationData, 'items');


        // Link Game.machinescategoryData page to Game.pages
        this.combineGameObjects(Game.machinesCategoryData, 'page', Game.pages, '');
        this.combineGameObjects(Game.machinesData, 'category', Game.machinesCategoryData, 'items');
        // Link Game.resources.entries category to Game.machinesCategoryData
        this.combineGameObjects(Game.resources.entries, 'category', Game.machinesData, 'items');
    }

    instance.handleOfflineGains = function(offlineTime) {
        if(offlineTime <= 0) {
            return;
        }

        refreshPerSec(1);
        gainResources(offlineTime);
        fixStorageRounding();

        this.notifyOffline(offlineTime);
    };

    instance.deleteSave = function() {
        var deleteSave = prompt("Are you sure you want to delete this save? It is irreversible! If so, type 'DELETE' into the box.");

        if(deleteSave === "DELETE") {
            localStorage.removeItem("save");

            alert("Deleted Save");
            window.location.reload();
        }
        else {
            alert("Deletion Cancelled");
        }
    };

    instance.loadDelay = function (self, delta) {
        document.getElementById("loadScreen").className = "hidden";
        document.getElementById("game").className = "container";

        self.deleteInterval("Loading");

        // Initialise data first
        self.achievements.initialise();
        self.statistics.initialise();
        self.resources.initialise();
        self.buildings.initialise();
        self.tech.initialise();
        self.solar.initialise();
        self.wonder.initialise();
        self.solCenter.initialise();
        self.interstellar.initialise();
        self.stargaze.initialise();
        // Create the collector Object; page -> categories -> items
        self.combineAllGameObjects()
        // Initialise UI
        self.resourcesUI = new Templates.createPage('resources', 'Resources BETA', Game.pages.resources);
        self.resourcesUI.initialise();
        self.techUI = new Templates.createPage('tech', 'Research BETA', Game.pages.tech);
        self.techUI.initialise();
        self.solarUI = new Templates.createPage('solar', 'Solar System BETA', Game.pages.solar);
        self.solarUI.initialise();
        // self.solCenter = new Templates.createPage('solCenter', 'Sol Center', Game.pages.solCenter);
        // self.solCenter.initialise();
        self.interstellarUI.initialise();
        self.stargazeUI.initialise();
        self.machinesUI = new Templates.machinesUI('machines', '', 'Machines BETA', Game.pages.machines);
        self.machinesUI.initialise();
        // All pages are created, now do the bindings
        Templates.uiFunctions.linkEvents();
        // Refresh all actions

        //Game.ui.updateAutoDataBindings();
        
        console.log("%c", "background: green;padding: 5px", "test from start");
        console.log("%c", "background: green;padding: 5px", "add all techData tabAlerts")
        console.log("%c", "background: green;padding: 5px", "all tech upgrades")
        console.log("%c", "background: green;padding: 5px", "combine construct and destroy +/-")
        console.log("%c", "background: green;padding: 5px", "stats")
        console.log("%c", "background: green;padding: 5px", "efficiencyBoosts")
        console.log("%c", "background: green;padding: 5px", "science format 1dp until 100")
        // Now load
        self.load();

        self.settings.initialise();

        for(var i = 0; i < self.uiComponents.length; i++) {
            self.uiComponents[i].initialise();
        }

        self.updateUI(self);

        // Display what has changed since last time
        self.updates.initialise();
        self.addCredits(self.donatorData);

        // Then start the main loops
        self.createInterval("Fast Update", self.fastUpdate, 100);
        self.createInterval("Slow Update", self.slowUpdate, 1000);
        self.createInterval("UI Update", self.uiUpdate, 100);

        // Do this in a setInterval so it gets called even when the window is inactive
        window.setInterval(function(){ Game.fixedUpdate(); },100);

        console.log("Initialisation Complete");
        //Templates.uiFunctions.refreshElements('all', 'all');
        Templates.uiFunctions.unlock('metalT1');
        Templates.uiFunctions.unlock('woodT1');
        Templates.uiFunctions.unlock('gemT1');
        document.getElementById('resourcesTab_link').click();

    };

    instance.addCredits = function(data){
        var lists = ["patreon", "discordMod", "contributor"];
        for(var i = 0; i < lists.length; i++){
            for(var j = 0; j < data[lists[i]].length; j++){
                $("#" + lists[i]).append("<li>" + data[lists[i]][j] + "</li>");
            }
        }
    };

    instance.loadAnimation = function(self, delta) {
        if (self.logoAnimating === false) {
            return;
        }

        var logoElement = $('#loadLogo');
        var opacity = logoElement.css('opacity');
        if(opacity >= 0.9) {
            logoElement.fadeTo(1000, .25, function() { Game.logoAnimating = false; });
            self.logoAnimating = true;
        } else if (opacity <= 0.3) {
            logoElement.fadeTo(1000, .95, function() { Game.logoAnimating = false; });
            self.logoAnimating = true;
        }
    };

    instance.noticeStack = {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25};

    instance.notifyInfo = function(title, message) {
        if(title == "Game Saved" && Game.settings.entries.saveNotifsEnabled == false){
            return;
        }
        if(Game.settings.entries.notificationsEnabled === true){
            this.activeNotifications.info = new PNotify({
                title: title,
                text: message,
                type: 'info',
                animation: 'fade',
                animate_speed: 'fast',
                addclass: "stack-bottomright",
                stack: this.noticeStack
            });
        }
    };

    instance.notifySuccess = function(title, message) {
        if(Game.settings.entries.notificationsEnabled === true){
            this.activeNotifications.success = new PNotify({
                title: title,
                text: message,
                type: 'success',
                animation: 'fade',
                animate_speed: 'fast',
                addclass: "stack-bottomright",
                stack: this.noticeStack
            });
        }
    };

    instance.notifyStorage = function() {
        if(Game.settings.entries.notificationsEnabled === true){
            this.activeNotifications.storage = new PNotify({
                title: "Storage Full!",
                text: 'You will no longer collect resources when they are full.',
                type: 'warning',
                animation: 'fade',
                animate_speed: 'fast',
                addclass: "stack-bottomright",
                stack: this.noticeStack
            });

            this.activeNotifications.storage.get().click(function() {
                Game.activeNotifications.storage.remove();
                Game.activeNotifications.storage = undefined;
            });
        }
    };

    instance.notifyOffline = function(time) {
        this.activeNotifications.success = new PNotify({
            title: "Offline Gains",
            text: "You've been offline for " + Game.utils.getFullTimeDisplay(time, true),
            type: 'info',
            animation: 'fade',
            animate_speed: 'fast',
            addclass: "stack-bottomright",
            stack: this.noticeStack
        });
    };

    instance.removeExcess = function(array, id){
        var check = false;
        for(var i = array.length; i > 0 ; i--){
            if(array[i] === id){
                if(check === false){
                    check = true;
                }
                else{
                    check = true;
                    array.splice(i, 1);
                }
            }
        }
    }

    instance.updateAutoSave = function(delta) {
        this.timeSinceAutoSave += delta;

        var element = $('#autoSaveTimer');
        var timeSinceSaveInMS = this.timeSinceAutoSave * 1000;
        var timeLeft = Game.settings.entries.autoSaveInterval - timeSinceSaveInMS;

        if (timeLeft <= 15000) {
            element.show();
            if(timeLeft <= 5000){
                element.text("Autosaving in " + (timeLeft / 1000).toFixed(1) + " seconds");
            }
            else{
                element.text("Autosaving in " + (timeLeft / 1000).toFixed(0) + " seconds");
            }
        } else {
            element.hide();
        }

        if(timeLeft < 100) {
            this.save();
            this.timeSinceAutoSave = 1;
        }
    };

    instance.start = function() {
        PNotify.prototype.options.styling = "bootstrap3";
        PNotify.prototype.options.delay = 3500;

        $('[data-toggle="tooltip"]').tooltip();

        console.debug("Loading Game");
        
        this.createInterval("Loading Animation", this.loadAnimation, 10);
        this.createInterval("Loading", this.loadDelay, 1000);

        this.update_frame(0);
    };

    return instance;
}());
// Load event moved to gameTabUI
