var Game = (function() {
    'use strict';

    var instance = {
        ui: {},
        lastUpdateTime: 0,
        intervals: {},
        uiComponents: [],
        logoAnimating: false,
        timeSinceAutoSave: 0,
        activeNotifications: {},
        lastFixedUpdate: new Date().getTime()
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
        var delta = (currentTime - instance.lastFixedUpdate) / 1000;

        refreshPerSec(delta);
        gainResources(delta);

        Game.lastFixedUpdate = currentTime;
    };

    instance.fastUpdate = function(self, delta) {
        refreshWonderBars();
        checkRedCost();

        updateEfficiencyDisplay();

        legacyRefreshUI();

        self.ui.updateBoundElements(delta);

        self.resources.update(delta);
        self.buildings.update(delta);
        self.tech.update(delta);
        self.settings.update(delta);
        self.spaceship.update(delta);

        self.updateAutoSave(delta);

        if(delta > 1) {
            console.log("You have been away for " + Game.utils.getTimeDisplay(delta));
        }
    };

    instance.slowUpdate = function(self, delta) {
        refreshConversionDisplay();

        checkStorages();

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
        var decompressed = LZString.decompressFromBase64(text);
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
        var data = {};

        this.achievements.save(data);
        this.statistics.save(data);
        this.resources.save(data);
        this.buildings.save(data);
        this.tech.save(data);
        this.settings.save(data);
        this.spaceship.save(data);

        data = legacySave(data);

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
            this.tech.load(data);
            this.settings.load(data);
            this.spaceship.load(data);

            legacyLoad(data);
        }

        refreshResources();
        refreshResearches();
        refreshTabs();

        if(Game.constants.enableMachineTab === true){
            $('#machineTopTab').show();
        }

        console.log("Load Successful");
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

        registerLegacyBindings();
        self.ui.updateAutoDataBindings();

        // Initialize first
        self.achievements.initialize();
        self.statistics.initialize();
        self.resources.initialize();
        self.buildings.initialize();
        self.tech.initialize();
        self.settings.initialize();
        self.spaceship.initialize();

        for(var i = 0; i < self.uiComponents.length; i++) {
            self.uiComponents[i].initialize();
        }

        // Now load
        self.load();

        // Then start the main loops
        self.createInterval("Fast Update", self.fastUpdate, 100);
        self.createInterval("Slow Update", self.slowUpdate, 1000);
        self.createInterval("UI Update", self.uiUpdate, 10);

        // Do this in a setInterval so it gets called even when the window is inactive
        window.setInterval(function(){ Game.fixedUpdate(); },100);

        console.debug("Load Complete");
    };

    instance.loadAnimation = function(self, delta) {
        if (self.logoAnimating === true) {
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
        this.activeNotifications.info = new PNotify({
            title: title,
            text: message,
            type: 'info',
            animation: 'fade',
            animate_speed: 'fast',
            addclass: "stack-bottomright",
            stack: this.noticeStack
        });
    };

    instance.notifySuccess = function(title, message) {
        this.activeNotifications.success = new PNotify({
            title: title,
            text: message,
            type: 'success',
            animation: 'fade',
            animate_speed: 'fast',
            addclass: "stack-bottomright",
            stack: this.noticeStack
        });
    };

    instance.notifyStorage = function() {
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
    };

    instance.updateAutoSave = function(delta) {
        this.timeSinceAutoSave += delta;

        var element = $('#autoSaveTimer');
        var timeSinceSaveInMS = this.timeSinceAutoSave * 1000;
        var timeLeft = Game.settings.entries.autoSaveInterval - timeSinceSaveInMS;

        if (timeLeft <= 15000) {
            element.show();
            element.text("Autosaving in " + (timeLeft / 1000).toFixed(0) + " seconds");
        } else {
            element.hide();
        }

        if(timeLeft <= 0) {
            this.save();
            this.timeSinceAutoSave = 0;
        }
    };

    instance.start = function() {
        PNotify.prototype.options.styling = "bootstrap3";
        PNotify.prototype.options.delay = 3500;

        console.debug("Loading Game");
      
        this.createInterval("Loading Animation", this.loadAnimation, 10);
        this.createInterval("Loading", this.loadDelay, 1000);

        this.update_frame(0);
    };

    return instance;
}());

window.onload = function(){
    Game.start();
};
