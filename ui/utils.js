Game.ui.utils = (function() {

    var instance = {};

    instance.buildCostDisplay = function(observerArray, htmlId, costData) {
        for(var i = 0; i < observerArray.length; i++) {
            observerArray[i].delete();
        }

        // Empty but keep the reference
        observerArray.length = 0;

        var segments = [];
        for(var id in costData) {
            var resourceData = Game.resources.getResourceData(id);
            if(!resourceData) {
                console.error("Unknown Resource in cost: " + id);
                continue;
            }

            segments.push({i: id, h: htmlId + '_' + id + '_c', n: resourceData.name, c: costData[id]});
        }

        var resultHtml = '<span>Cost: </span>';
        for(var i = 0; i < segments.length; i++) {
            var segmentData = segments[i];
            resultHtml = resultHtml + '<span id="' + segmentData.h + '">ERR</span> ';
            resultHtml = resultHtml + '<span> ' + segmentData.n + '</span>';
            if(i < segments.length - 1) {
                resultHtml = resultHtml + '<span>, </span>';
            }

            var observer = Game.ui.createResourceObserver({htmlId: segmentData.h, value: segmentData.c, res: segmentData.i, type: RESOURCE_OBSERVER_TYPE.SPECIFIC_VALUE});
            observerArray.push(observer);
        }

        return resultHtml;
    };

    return instance;

}());