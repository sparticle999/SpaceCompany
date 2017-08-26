Game.achievements = (function() {
    'use strict';

    var instance = {};

    instance.dataVersion = 4;

    instance.nextId = 0;

    instance.rank = 1;
    instance.xp = 0;

    instance.entries = {};
    instance.achievementCount = 0;
    instance.achievementCountIncludingTiers = 0;

    instance.initialise = function() {
        for (var id in Game.achievementsData) {
            var data = Game.achievementsData[id];
            if (data.id_v4 !== undefined)
            {
                this.entries[data.id_v4] = $.extend({}, data, {
                    id: data.id_v4,
                    category: data.categoryInstance.title,
                    iconPath: Game.constants.iconPath,
                    iconExtension: Game.constants.iconExtension,
                    unlocked: -1,
                    progressDisplay: -1,
                    displayNeedsUpdate: true
                });
                if (data.brackets === undefined) {
                    this.entries[data.id_v4].brackets = data.categoryInstance.brackets;
                }
                
                this.achievementCount++;
                this.achievementCountIncludingTiers += this.entries[data.id_v4].brackets.length;
            }
        }
        
        console.debug("Loaded " + this.achievementCount + " (" + this.achievementCountIncludingTiers +") Achievements");
    };

    instance.getAchievementTitle = function(data, for_tooltip) {
        if(data.unlocked === data.brackets.length - 1) {
            var title = data.title.replace('%s', Game.settings.format(data.brackets[data.unlocked]));
            if(for_tooltip === true) {
                title += " (Completed)";
            }
            return title;
        } else {
            var title = data.title.replace('%s', Game.settings.format(data.brackets[data.unlocked+1]));
            if(for_tooltip === true) {
                title += ' (' + data.progressDisplay + '%)';
            }
            return title;
        }
    };

    instance.update = function(delta) {
        for(var id in this.entries) {
            var data = this.entries[id];
            var bracket = data.brackets[data.unlocked + 1];

            if(data.unlocked < data.brackets.length - 1 && data.evaluator(bracket)) {
                Game.notifySuccess("Achievement Reached", this.getAchievementTitle(data, false));

                this.unlock(id, data.unlocked + 1);

                newUnlock('more');
            } else if(data.unlocked < data.brackets.length - 1) {
                var progressDisplay = Math.floor(100 * data.progressEvaluator(bracket));
                this.updateProgress(id, progressDisplay);
            }
        }
    };

    instance.unlock = function(id, tier) {
        if(this.entries[id].unlocked < tier) {
            this.entries[id].unlocked = tier;
            this.entries[id].displayNeedsUpdate = true;
        }
    };

    instance.updateProgress = function(id, progress) {
        if(this.entries[id].progressDisplay != progress) {
            this.entries[id].progressDisplay = progress;
            this.entries[id].displayNeedsUpdate = true;
        }
    };

    instance.save = function(data) {
        data.achievements = {version: this.dataVersion, entries: {}};
        for(var id in this.entries) {
            if(this.entries[id].unlocked >= 0) {
                data.achievements.entries[id] = this.entries[id].unlocked;
            }
        }
    };

    instance.load = function(data) {
        if(data.achievements) {
            if(data.achievements.version && data.achievements.version === this.dataVersion) {
                for(var id in data.achievements.entries) {
                    if(this.entries[id]){
                        this.unlock(id, data.achievements.entries[id]);
                    }
                }
            }
        }
    };

    return instance;
}());
