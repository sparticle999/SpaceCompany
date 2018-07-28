Game.data.import = (function () {
    const didImportData = { };

    /**
     * Internal flag for developers, this will warn when reimporting some data twice. Has no functional side effects
     * @param {string} dataName The name of the data
     * @complexity O(1)
     */
    function setDidImport(dataName) {
        if (didImportData[dataName]) {
            console.warn(`Imported ${dataName} twice, this should be avoided because it can potentially be a huge performance cost`);
        }
        didImportData[dataName] = true;
    }

    /**
     * Merges data with the associated templates. Expects templates to be called `key` + `Template`. If no Templates are specified, will just return the entry. Will only check the first level of the objects
     * @example a template for the `storage` data would be named `storageTemplate` and would be applied to all object in `storage`
     * @param {object} data Arbitrary data
     * @returns A copy of the modified data (with all templates applied)
     * @complexity O(n * m) where n = number of templates and m = number of subobject affected by the template
     */
    function mergeTemplates(data) {
        // Get the templates to modify
        let templates = Object.keys(data)
            .filter(k => k.endsWith('Template'));
            //n

        // Get the non-template items
        let items = Object.keys(data)
            .filter(k => !k.endsWith('Template'));
            //n

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
                total[current] = $.extend({}, template, originalEntries[current])
                return total;
            }, {})

            return result;
        }, nonTemplates);
    }

    /**
     * Applies a transformation to all values inside an object
     * @param {object} target The object to transform
     * @callback {(object, string): void} transformer The anonymous function used to transform the data
     * @returns A copy of target with all templates applied
     * @complexity O(n) where n = keys in object
     */
    function mapObjects(target, transformer) {
        const keys = Object.keys(target);
        return keys.reduce((result, current) => {
            const transformation = transformer(target[current], current)
            result[current] = $.extend({}, target[current], transformation);
            return result;
        }, {});
    }

    /**
     * Imports all resource data
     */
    function importResourceData() {
        setDidImport('resource');

        /** Import the data and merge static templates **/
        const data = mergeTemplates(Game.data.resources);

        /** Merge dynamic templates **/

        data.storage = mapObjects(data.storage, (item, key) => {
            return {
                id: key,
                htmlId: "store_" + key,
            };
        })

        data.items = mapObjects(data.items, (item, key) => {
            return {
                id: key,
                resource: key,
                htmlId: 'res_' + key,
                capacity: item.baseCapacity,
            };
        });

        data.categories = mapObjects(data.categories, (item, key) => {
            return { id: key };
        });

        return data;
    }

    return {
        resources: importResourceData,
    }
}());
