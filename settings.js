var StrLoc = function(str) {
    return str;
};

String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var key = '{' + i.toString() + '}';
        if(formatted.indexOf(key) < 0) {
            throw new Error(StrLoc("Index {0} was not defined in string: {1}").format(i, formatted));
        }

        formatted = formatted.replace(key, arguments[i]);
    }

    return formatted;
};

Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};

$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').appendTo(document.body);
    var htmlText = text || this.val() || this.text();
    htmlText = $.fn.textWidth.fakeEl.text(htmlText).html(); //encode to Html
    htmlText = htmlText.replace(/\s/g, "&nbsp;"); //replace trailing and leading spaces
    $.fn.textWidth.fakeEl.html(htmlText).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};

Game.settings = (function(){

    var autoSaveMapping = {
        '30secs': 30 * 1000,
        '2mins': 2 * 60 * 1000,
        '10mins': 10 * 60 * 1000
    };

    var instance = {
        dataVersion: 1,
        entries: {
            formatter: 'shortName',
            boldEnabled: false,
            theme: 'base',
            autoSaveInterval: 30 * 1000
        },
        reapplyTheme: true
    };

    instance.formatEveryThirdPower = function(notations)
    {
        return function (value)
        {
            var base = 0;
            var notationValue = '';
            if (value >= 1000000)
            {
                value /= 1000;
                while(Math.round(value) >= 1000) {
                    value /= 1000;
                    base++;
                }

                if (base > notations.length) {
                    return StrLoc('Infinity');
                } else {
                    notationValue = notations[base];
                }
            }

            return ( Math.round(value * 1000) / 1000.0 ).toLocaleString() + notationValue;
        };
    };

    instance.formatScientificNotation = function(value)
    {
        if (value === 0 || (Math.abs(value) > 1 && Math.abs(value) < 100))
        {
            return Game.settings.formatRaw(value);
        }

        var sign = value > 0 ? '' : '-';
        value = Math.abs(value);
        var exp = ~~(Math.log(value)/Math.LN10);
        var num = Math.round((value/Math.pow(10, exp)) * 100) / 100;
        var output = num.toString();
        if (num === Math.round(num)) {
            output += '.00';
        } else if (num * 10 === Math.round(num * 10)) {
            output += '0';
        }

        return sign + output + '*10^' + exp;
    };

    instance.formatRounded = function(value)
    {
        return (Math.round(value * 1000) / 1000).toString();
    };

    instance.formatRaw = function(value) {
        if(value === undefined || value === null) {
            return "";
        }

        return value.toString();
    };

    instance.formatters = {
        'raw': instance.formatRaw,
        'rounded': instance.formatRaw,
        'name': instance.formatEveryThirdPower(['', StrLoc(' million'), StrLoc(' billion'), StrLoc(' trillion'), StrLoc(' quadrillion'),
            StrLoc(' quintillion'), StrLoc(' sextillion'), StrLoc(' septillion'), StrLoc(' octillion'),
            StrLoc(' nonillion'), StrLoc(' decillion')
        ]),
        'shortName': instance.formatEveryThirdPower(['', StrLoc('M'), StrLoc('B'), StrLoc('T'), StrLoc('Qa'), StrLoc('Qi'), StrLoc('Sx'),StrLoc('Sp'), StrLoc('Oc'), StrLoc('No'), StrLoc('De') ]),
        'shortName2': instance.formatEveryThirdPower(['', StrLoc('M'), StrLoc('G'), StrLoc('T'), StrLoc('P'), StrLoc('E'), StrLoc('Z'), StrLoc('Y')]),
        'scientific': instance.formatScientificNotation
    };

    instance.format = function(value, digit) {
        var format = this.entries.formatter || 'shortName';
        return this.formatters[format](value.toFixed(digit || 0));
    };

    instance.turnRed = function(value, target, id) {
        var element = $('#' + id);
        if(element.length === 0) {
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

    instance.initialize = function() {
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

    return instance;

}());