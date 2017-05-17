Game.utils = (function(){

    var instance = {};

    instance.pad = function(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };

    // Note: This has to use math.floor otherwise the value will be skewed for large time
    instance.splitDateTime = function(seconds) {
        // returns array of [y, d, h, m, s, z]
        var result = [0, 0, 0, 0, 0, 0];
        var milliSeconds = Math.floor(seconds * 1000);

        result[0] = Math.floor(milliSeconds / (365 * 24 * 60 * 60 * 1000));

        milliSeconds %= (365 * 24 * 60 * 60 * 1000);
        result[1] = Math.floor(milliSeconds / (24 * 60 * 60 * 1000));

        milliSeconds %= (24 * 60 * 60 * 1000);
        result[2] = Math.floor(milliSeconds / (60 * 60 * 1000));

        milliSeconds %= (60 * 60 * 1000);
        result[3] = Math.floor(milliSeconds / (60 * 1000));

        milliSeconds %= (60 * 1000);
        result[4] = Math.floor(milliSeconds / 1000);
        result[5] = milliSeconds;

        return result;
    };

    instance.getFullTimeDisplay = function(seconds, use24hourTime) {
        var timeSplit = this.splitDateTime(seconds);
        var hourMinutePart = this.getTimeDisplay(seconds, use24hourTime);

        if(timeSplit[1] > 0) {
            return timeSplit[1] + ' Days ' + hourMinutePart;
        }

        return hourMinutePart;
    };

    instance.getTimeDisplay = function(seconds, use24hourTime) {
        if (seconds === 0 || seconds === Number.POSITIVE_INFINITY) {
            return '~~';
        }

        var timeSplit = this.splitDateTime(seconds);
        var suffix = '';
        if (use24hourTime === false) {
            if (timeSplit[2] > 12) {
                timeSplit[2] -= 12;
                suffix = ' ' + StrLoc('pm');
            } else {
                suffix = ' ' + StrLoc('am');
            }
        }

        var hourResult = this.pad(timeSplit[2], 2) + ':';
        var minuteResult = this.pad(timeSplit[3], 2) + ':';
        var secondResult = this.pad(timeSplit[4], 2);
        return hourResult + minuteResult + secondResult + suffix;
    };

    return instance;
}());