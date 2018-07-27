Game.data.import = (function () {
    function mergeTemplates(data) {
        // Get the templates to modify
        let templates = Object.keys(data)
            .filter(k => k.endsWith('Template'));

        // Get the non-template items
        let items = Object.keys(data)
            .filter(k => !k.endsWith('Template'));

        // Copy over all non-templates to the result
        let nonTemplates = items.reduce((result, current) => {
            result[current] = data[current];
            return result;
        }, {});

        // Apply the template to target categories
        return templates.reduce((result, current) => {
            let target = current.replace('Template', '');
            let targetKeys = Object.keys(result[target]);
            let template = data[current];
            let originalEntries = result[target];

            result[target] = targetKeys.reduce((total, current) => {
                total[current] = $.extend({}, originalEntries[current], template)
                return total;
            }, {})

            return result;
        }, nonTemplates);
    }

    function mapObjects(target, transformer) {
        const keys = Object.keys(target);
        return keys.reduce((result, current) => {
            result[current] = transformer(target[current], current);
            return result;
        }, {});
    }

    function importResourceData() {
        function applyStorage(self) {
            if (typeof self.resource === "undefined") {
                return;
            }
            var res = Game.resources.getResourceData(self.resource);
            res.capacity *= 2;
            res.displayNeedsUpdate = true;
            self.displayNeedsUpdate = true;
        }

        /** Import the data and merge static templates **/
        const data = mergeTemplates(Game.data.resources);

        /** Merge dynamic templates **/

        data.storage = mapObjects(data.storage, (item, key) => {
            return $.extend({}, item, {
                id: key,
                htmlId: "store_" + key,
                apply: function (self) {
                    if (typeof self.resource === 'undefined') {
                        return;
                    }
                    var res = Game.resources.getResourceData(self.resource);
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    self.displayNeedsUpdate = true;
                },
            });
        })

        data.items = mapObjects(data.items, (item, key) => {
            return $.extend({}, item, {
                id: key,
                resource: key,
                htmlId: 'res_' + key,
                capacity: item.baseCapacity,
            });
        });

        data.categories = mapObjects(data.categories, (item, key) => {
            return $.extend({}, item, { id: key });
        });

        return data;
    }

    return {
        resources: importResourceData,
    }
}());
