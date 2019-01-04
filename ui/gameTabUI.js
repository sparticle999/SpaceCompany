'use strict';
if (typeof Templates == "undefined") { var Templates = {}; }
if (!('objectConstructor' in Templates)) { Templates.objectConstructor = {}; }
Templates.objectConstructor.UiFunctions = function() {
    // Internal storage of links between menu items & panes
    var topDownDom = {};
    var downTopDom = {};
    var menuTopDownDom = {};
    var pageTopDownDom = {};

    /////////////////////////
    // NEEDS SAVING EXPORT //
    //vvvvvvvvvvvvvvvvvvvvv//
    // Storage of hidden and unhidden elements
    var unhidden = [];
    var hidden = [];
    // Storage of collapsed and noncollapsed elements
    var collapsed = [];
    var noncollapsed = [];

    //^^^^^^^^^^^^^^^^^^^^^//
    // NEEDS SAVING EXPORT //
    /////////////////////////

    var registeredElements = {};

    ///////////////////////////
    // General Use Functions //
    ///////////////////////////

    /**
     * Removes a value from an array
     * @param  {Array}     array  An array of values
     * @param  {anything}  value  The value to be removed from the array
     * @return {Array}            The changed array
     */
    function removeElement(array, value) {
        return array.filter(val => val !== value);
    }
    /**
     * Adds a value to an array if the array doesn't have it already
     * @param  {Array}     array    An array of values
     * @param  {anything}  element  The value to be added to the array
     * @return {Array}              The changed array
     */
    function addElement(array, element) {
        if (!contains(array, element)) {array.push(element);}
        return array;
    }
    /**
     * Counts how many times an array contains a certain value
     * @param  {Array}     array  An array of values
     * @param  {anything}  value  The value to be counted
     * @return {Integer}          A number of the times the value is encountered
     */
    function countElement(array, value) {
        return array.filter(item => item == value).length;
    }
    /**
     * Check which stylesheets can be read by the styleExists function.
     * Execute this function before even trying to read stylesheets.
     * @return {Array}          The filtered list containing readable sheets.
     */
    function styleSheetReadable(sheet) {
        try {
            if (!sheet.cssRules) { return false; }
        } catch(e) {
            if (e.name !== 'SecurityError') { console.warn(e); }
            return false;
        }
        return true;
    }
    /**
     * Checks if a classname exists in the stylesheets.
     * @param  {String}  cssClass  The css classname to look for.
     * @return {Boolean}           True on found.
     */
    function styleExists(cssSheets, cssClass) {
        for (var i = 0; i < cssSheets.length; i++) {
             var rules = cssSheets[i].cssRules;
             for (var j = 0; j < rules.length; j++) {
                 if (rules[j].cssText.split("{")[0].indexOf(cssClass) > -1 ) { return true; }
            }
        }
        return false;
    }
    /**
     * Attaches HTML strings to an element
     * @param   {string}  tag   A string representing the parent ID of the HTML
     * @param   {string}  HTML  The HTML code that needs to be added under ID
     * @return  {boolean}       True on success
     */
    this.attachHTML = function(page, tag, HTML) {
        var node = document.getElementById(tag)
        if (!node) {
            console.warn(page+" - Could not add this tag to the game: "+tag);
            //console.warn(HTML);
            return false;
        }
        // Insert the node before the end of tag
        node.insertAdjacentHTML('beforeend', HTML);
        return true;
    }
    /**
     * Creates the top-down menu DOM through registerElement
     * @param  {String}  nav     Page navigation DOM id
     * @param  {String}  header  Menu header DOM id
     * @param  {String}  item    Menu item DOM id
     */
    function createMenuTopDownDom(nav, header, item) {
        if (!(nav in menuTopDownDom)) {menuTopDownDom[nav] = {};}
        if (!(header in menuTopDownDom[nav])) {menuTopDownDom[nav][header] = [];}
        menuTopDownDom[nav][header].push(item);
    }
    /**
     * Creates the top-down page DOM through registerElement
     * @param  {String}  nav        Page navigation DOM id
     * @param  {String}  pane       Pane header DOM id
     * @param  {String}  container  Pane item DOM id
     */
    function createPageTopDownDom(nav, pane, container) {
        if (!(nav in pageTopDownDom)) {pageTopDownDom[nav] = {};}
        if (!(pane in pageTopDownDom[nav])) {pageTopDownDom[nav][pane] = [];}
        pageTopDownDom[nav][pane].push(container);
    }
    /**
     * Holy brackets Batman! - Creates the DOM lookups from the two
     * composed objects: menuTopDownDom & pageTopDownDom
     */
    function combineMenuAndPage() {
        Object.keys(menuTopDownDom).forEach(function(nav) {
            var menu = menuTopDownDom[nav];
            var page = pageTopDownDom[nav];
            Object.keys(menu).forEach(function(header) {
                menu[header].forEach(function(item) {
                    var pane = item+'c';
                    if(page){
                        page[pane].forEach(function(container) {
                            createTopDownDOM(nav, header, item, pane, container);
                            createDownTopDOM(nav, header, item, pane, container);
    })  }  })  })  })   }
    /**
     * Creates an Object for each important element on the DOM.
     * and a path from each element to the bottom most element.
     * @param  {String}   navigation  DOM id of the page navigation element.
     * @param  {String}   header      DOM id of a menu header on this page.
     * @param  {String}   item        DOM id of a menu item under this header.
     * @param  {String}   pane        DOM id of the content pane linked to the menu item.
     * @param  {String}   container   DOM id of an item on the content pane.
     * @return {Boolean}              True on success, false on failure.
     */
    function createTopDownDOM(navigation, header, item, pane, container) {
        var arr = [navigation, header, item, pane, container];
        for (var i = 0; i < (arr.length-1); i++) {
            if (!(arr[i] in topDownDom)) {topDownDom[arr[i]] = [];}
            topDownDom[arr[i]] = addElement(topDownDom[arr[i]], arr[i+1]);
        }
    }
    /**
     * Creats a down-top array from a container to the navigation it's on.
     * @param  {String}   navigation  DOM id of the navigation item containing the menu.
     * @param  {String}   header      DOM id of the menu header belonging to the menu item.
     * @param  {String}   item        DOM id of the menu item belonging to the content pane.
     * @param  {String}   pane        DOM id of the pane containing the container.
     * @param  {String}   container   DOM id of an item container on a page.
     * @return {Boolean}              True on success, false on failure.
     */
    function createDownTopDOM(navigation, header, item, pane, container) {
        if (!contains(downTopDom, container)) {downTopDom[container] = [];}
        var arr = [pane, item, header, navigation];
        for (var i = 0; i < arr.length; i++) {
            downTopDom[container] = addElement(downTopDom[container], arr[i])
        }
    }
    /**
     * Expands or collapses elements in an animated way
     * @param  {nodeList}  children  An array of ids to affect
     * @param  {boolean}   expand    Will expand if true, collapse is false
     */
    function AnimateToggle(children, expand) {
        const delay = 30; //delay in ms
        if (expand) {
            for (var i = 0; i < children.length; i++) {
                var node = document.getElementById(children[i]);
                setTimeout((function(node) {node.style.display = ''}), i*delay, node);
                node.classList.toggle('collapsed');
                collapsed = removeElement(collapsed, children[i]);
                noncollapsed = addElement(noncollapsed, children[i]);
                node.setAttribute('aria-expanded', expand);
            }
        } else {
            for (var i = children.length-1; i >= 0; i--) {
                var node = document.getElementById(children[i]);
                setTimeout((function(node) {node.style.display = 'none'}), (children.length-i)*delay, node);
                node.classList.toggle('collapsed');
                collapsed = addElement(collapsed, children[i]);
                noncollapsed = removeElement(noncollapsed, children[i]);
                node.setAttribute('aria-expanded', expand);
            }
        }
    }

    //////////////////////////////
    // General UI functionality //
    //////////////////////////////

    /**
     * Hides a single element (adds class: hidden).
     * @param  {String}   DOMid  The *id* of the DOM element to hide.
     * @return {boolean}         True on success.
     */
    this.hide = function(itemId, page) {
        var node = document.querySelector('.'+itemId+'_Container');
        if ((node == 'undefined')) {
            console.warn("Trying to hide the element with id='"+(page||"pageUnknown")+"_"+itemId+"_Container', but couldn't find it.")
            return false;
        }
        if (!node.classList.contains("hidden")) {
            node.classList.add("hidden");
            unhidden = removeElement(unhidden, node.id);
            hidden = addElement(hidden, node.id);
        } else {
            console.warn("Trying to hide the element with id='"+(page||"pageUnknown")+"_"+itemId+"_Container', but it's already hidden!")
            return false;
        }
        return true;
    }

    /**
     * Hides a single element (adds class: hidden).
     * @param  {String}   DOMid  The *id* of the DOM nav element to hide.
     * @return {boolean}         True on success.
     */
    this.hideId = function(itemId, page) {
        var node = document.querySelector('#'+itemId);
        if ((node == 'undefined')) {
            console.warn("Trying to hide the element with id='"+(page||"pageUnknown")+"_"+itemId+"_ne', but couldn't find it.")
            return false;
        }
        if (!node.classList.contains("hidden")) {
            node.classList.add("hidden");
            unhidden = removeElement(unhidden, node.id);
            hidden = addElement(hidden, node.id);
        } else {
            console.warn("Trying to hide the element with id='"+(page||"pageUnknown")+"_"+itemId+"_ne', but it's already hidden!")
            return false;
        }
        return true;
    }

    /**
     * Hides a category and all nav elements inside it (adds class: hidden).
     * @param  {String}   DOMid  The *id* of the DOM element to hide.
     * @return {boolean}         True on success.
     */
    this.hideCategory = function(itemId, page) {
        var node = document.querySelector('#'+page+'_'+itemId+'_collapse');
        if ((node == 'undefined')) {
            console.warn("Trying to hide the category with id='"+page+"_"+itemId+"_collapse', but couldn't find it.")
            return false;
        }
        if (!node.classList.contains("hidden")) {
            node.classList.add("hidden");
            unhidden = removeElement(unhidden, node.id);
            hidden = addElement(hidden, node.id);
            // Hiding each nav inside the category
            topDownDom[node.id].forEach(i => Templates.uiFunctions.hideId(i, page));
        } else {
            console.warn("Trying to hide the category with id='"+page+"_"+itemId+"_collapse', but it's already hidden!")
            return false;
        }
        return true;
    }

    /**
     * Hides all elements with a given className.
     * @param  {string}   className  The class to hide.
     * @return {boolean}             True on success.
     */
    this.hideClass = function(className) {
        var nodes = document.querySelectorAll('.'+className);
        if (nodes == 'undefined') {
            console.warn("Trying to hide all classes with "+className+", but couldn't find any.")
            return false;
        }
        nodes.forEach(function(node) {
            if (!node.classList.contains("hidden")) {
                node.classList.add("hidden");
                unhidden = removeElement(unhidden, node.id);
                hidden = addElement(hidden, node.id);
            }   
        })
        return true;
    }
    /**
     * Removes a class from an element containing another class
     * @param  {String}   remove  The classname to hide if found. Defaults to 'hidden'
     * @param  {String}   from    The class to match against
     * @return {Boolean}          True on success.
     */
    this.removeClass = function(remove, from) {
        if (typeof remove == 'undefined') {remove == 'hidden';}
        remove = remove.toLowerCase();
        var nodes = document.querySelectorAll('.'+from);
        if (nodes == 'undefined') {
            console.warn("Trying to remove '"+remove+"' from all elements with the class: '"+from+"', but couldn't find any.")
            return false;
        }
        nodes.forEach(function(node) {
            if (node.classList.contains(remove)) {
                node.classList.remove(remove);
                if (remove == 'hidden') {
                    unhidden = removeElement(unhidden, node.id);
                    hidden = addElement(hidden, node.id);                   
                }
            }   
        })
        return true;
    }
    /**
     * Shows a single element (removes class: hidden).
     * Don't use this to unhide machines, use unlock instead.
     * @param  {String}   itemId  The *DOM id* of the element to unhide.
     * @return {boolean}          True on success.
     */
    this.show = function(DOMid) {
        var node = document.getElementById(DOMid);
        if (node == 'undefined' || node == null) {
            console.warn("Trying to show the element with id='"+DOMid+"', but couldn't find it.")
            return false;
        }
        if (node.classList.contains("hidden")) {
            // If this is a menu item, remove it from hidden, add it to noncollapsed
            if (DOMid.endsWith("_ne")) {
                noncollapsed = addElement(noncollapsed, DOMid);
            // If this is a menu header, uncollapse the entire menu
            } else if (DOMid.endsWith("_collapse")) {
                var node = document.getElementById(DOMid);
                var expand = node.classList.contains('collapsed');
                if (expand) {this.toggleHeader(DOMid);}
            } else {
                unhidden = addElement(unhidden, node.id);
            }
            node.classList.remove("hidden");
            hidden = removeElement(hidden, node.id);
        }
        return true;
    }
    /**
     * Shows all elements with a given className.
     * @param  {string}   className  The class to show.
     * @return {boolean}             True on success.
     */
    this.showClass = function(className) {
        var nodes = document.querySelectorAll('.'+className);
        if (nodes == 'undefined') {
            console.warn("Trying to show all classes with "+className+", but couldn't find any.")
            return false;
        }
        nodes.forEach(function(node) {
            if (node.classList.contains("hidden")) {
                node.classList.remove("hidden");
                hidden = removeElement(hidden, node.id);
                unhidden = addElement(unhidden, node.id);
            }   
        })
        return true;
    }
    /**
     * Adds a class to an element containing another class
     * @param  {String}   add  The classname to add if found. Defaults to 'IfYouSeeThisYouMessedUp'
     * @param  {String}   to   The class to match against
     * @return {Boolean}       True on success.
     */
    this.addClass = function(add, to) {
        if (typeof add == 'undefined') {add == 'IfYouSeeThisYouMessedUp';}
        add = add.toLowerCase();
        var nodes = document.querySelectorAll('.'+to);
        if (nodes == 'undefined') {
            console.warn("Trying to add '"+add+"' to all elements with the class: '"+to+"', but couldn't find any.")
            return false;
        }
        nodes.forEach(function(node) {
            if (!node.classList.contains(add)) {
                node.classList.add(add);
                if (add == 'hidden') {
                    hidden = removeElement(hidden, node.id);
                    unhidden = addElement(unhidden, node.id);                   
                }
            }   
        })
        return true;
    }
    /**
     * Sets a text to all elements containing a class
     * @param  {String}   setText  The text (or formatted html) to add.
     * @param  {String}   target   The class to match against
     * @return {Boolean}           True on success.
     */
    this.setClassText = function(setText, target) {
        if (typeof setText == 'undefined') {
            console.warn("The text set to be added to '"+target+"' is undefined.")
            return false;
        }
        var nodes = document.querySelectorAll('.'+target);
        if (nodes == 'undefined') {
            console.warn("Trying to add '"+add+"' to all elements with the class: '"+to+"', but couldn't find any.")
            return false;
        }
        nodes.forEach(function(node) { node.innerHTML = setText; })
        return true;
    }

    /**
     * Sets a style to all elements containing a class
     * @param  {String}   setText  The text (or formatted html) to add.
     * @param  {String}   target   The class to match against
     * @return {Boolean}           True on success.
     */
    this.setClassStyle = function(value, property, target) {
        if (typeof value == 'undefined') {
            console.warn("The text set to be added to '"+target+"' is undefined.")
            return false;
        }
        if (typeof property == 'undefined') {
            console.warn("The text set to be added to '"+target+"' is undefined.")
            return false;
        }
        var nodes = document.querySelectorAll('.'+target);
        if (nodes == 'undefined') {
            console.warn("Trying to add '"+add+"' to all elements with the class: '"+to+"', but couldn't find any.")
            return false;
        }
        nodes.forEach(function(node) { node.style[property] = value; })
        return true;
    }
    /**
     * Unhides the entire path leading up the DOM from itemId.
     * @param  {String}   itemId     An internal id of an item (metalT1, moon).
     * @param  {Boolean}  propagate  If false, the elements up the DOM tree won't be unlocked
     * @return {Boolean}             True on success, false on failure.
     */
    this.unlock = function(itemId, propagate) {
        if (typeof propagate === 'undefined') {propagate = true;}
        // Look up all elements containing this item's container element.
        var nodes = document.querySelectorAll('.'+itemId+'_Container');
        if (typeof nodes == 'undefined') {
            console.warn("Trying to unlock "+itemId+"_Container, but can't find any element with this class.");
            return false;
        }
        // Loop through the nodes and process each node's id.
        nodes.forEach(function(node) {
            // loop through the downTopDom array and unhide all elements
            Templates.uiFunctions.show(node.id)
            if (propagate) {downTopDom[node.id].forEach(i => Templates.uiFunctions.show(i));}
            // Setting the internal vars is done by the show-function.
        })
        return true;
    }
    /**
     * Sets a style on an element containing a certain class
     * @param  {String}   cl     The classname to add a style to
     * @param  {String}   style  The style name
     * @param  {String}   value  The value for the style.
     * @return {Boolean}         True on success.
     */
    this.addStyle = function(cl, style, value) {
        if (typeof style == 'undefined' || typeof value == 'undefined') {return false;}
        var nodes = document.querySelectorAll('.'+cl);
        if (nodes == 'undefined') {
            console.warn("Trying to add 'style."+style+"='"+value+"'' to all elements with the class: '"+cl+"', but couldn't find any.");
            return false;
        }
        nodes.forEach(node => node.style[style] = value);
        return true;
    }
    /**
     * Removes a style on an element containing a certain class
     * @param  {String}   cl     The classname to remove a style from
     * @param  {String}   style  The style name
     * @return {Boolean}         True on success.
     */
    this.removeStyle = function(cl, style) {
        if (typeof style == 'undefined') {return false;}
        var nodes = document.querySelectorAll('.'+cl);
        if (nodes == 'undefined') {
            console.warn("Trying to remove 'style."+style+"' from all elements with the class: '"+cl+"', but couldn't find any.");
            return false;
        }
        nodes.forEach(node => node.style.removeProperty(style));
        return true;
    }

    ////////////////
    // Menu Stuff //
    ////////////////

    /**
     * Toggles a menu to open or closed
     * @param  {String} DOMid The id of the node that was clicked
     */
    this.toggleHeader = function(DOMid) {
        //console.log(DOMid);
        // BUG only unhide/rehide unlocked menu items
        var node = document.getElementById(DOMid);
        var expand = node.classList.contains('collapsed');
        var todo = topDownDom[DOMid];
        // If we need to expand, match topDownDom entries with collapsed, otherwise noncollapsed
        if (expand) { var whitelist = collapsed; } else { var whitelist = noncollapsed; }
        // Filter todo against the whitelist.
        todo = todo.filter( i =>contains(whitelist, i) )
        // Send the list to the animator.
        AnimateToggle(todo, expand);
        node.classList.toggle('collapsed');
        // Adjust aria-expanded
        node.setAttribute('aria-expanded', expand);
    }
    /**
     * Whenever the player clicks a regular menu item, this function runs.
     * It's called by the eventHandler
     * @param  {DOMid}  DOMid  The DOM id of the clicked menu item.
     */
    this.clickItem = function(DOMid) {
        // Remove the glyph if it's visible
        var node = document.getElementById(DOMid+'Glyph');
        if (node) {
            node.classList.add('hidden');
        }
        document.getElementById(Game.lastNav).classList.remove('info');
        document.getElementById(DOMid).classList.add('info');
        // Record the last clicked menu item
        Game.lastNav = DOMid;
    }
    /**
     * Whenever the player clicks a page tab, this function runs.
     * It's called by the eventHandler
     * @param  {DOMid}  DOMid  The DOM id of the clicked nav item
     */
    this.clickNav = function(DOMid) {
        var node = document.getElementById(DOMid+'Glyph');
        if (node) {node.classList.add('hidden');}
        // Store the click
        Game.lastTab = DOMid;
        // remove the active class from all Navs
        Object.keys(topDownDom).forEach(
            id => document.getElementById(id).classList.remove("active")
        )
        // Make the clicked tab active
        node.classList.add("active");
    }

    var test = false;
    //////////////////////
    // Page Interaction //
    //////////////////////
    this.refreshElements = function(action, resource) {
        // if(!test){
        //     test = true;
        //     console.error(registeredElements)
        // }
        var refreshActions = [];
        // If an action is provided, only perform that one.
        if (typeof action !== 'undefined' && (action in registeredElements)) {
            refreshActions.push(action);
        // Otherwise, perform all actions.
        } else {
            refreshActions = Object.keys(registeredElements);
        }
        if (typeof resource === 'undefined') {resource = 'all'}
        // Loop through all registeredElements with refreshActions
        // and execute those which are requested
        // but only if the current page is open
        refreshActions.forEach(function(act) {
            Object.keys(registeredElements[act]).forEach(function(res) {
                if ((res.toLowerCase() === resource.toLowerCase() || resource == 'all')) {
                    var obj = registeredElements[act][res].object;
                    if(act == "current" || act == "persecond" || act == "cost" || act == "progress"){
                        // if(act == "current" && obj.page == undefined){
                        //     console.error(obj.id)
                        // }
                        if(obj.page == "resources" || obj.id == "science" || obj.id == "rocketFuel"){
                            if(obj.unlocked && obj.page + "Tab" == Game.lastTab || Game.lastNav == "solCenterTab_solCtr_emc_ne"){
                                if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                            }
                        }
                        else if(obj.category == "buildings"){
                            if(obj.resource == "science"){
                                if("techTab_res_science_ne" == Game.lastNav){
                                    if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                                }
                            } else if(obj.resource == "rocketFuel"){
                                if("solarTab_res_rocketFuel_ne" == Game.lastNav){
                                    if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                                }
                            } else if(obj.resource == "rocket"){
                                if("solarTab_res_rocket_ne" == Game.lastNav){
                                    if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                                }
                            } else {
                                if("resourcesTab_res_" + obj.resource + "_ne" == Game.lastNav || "machinesTab" == Game.lastTab){
                                    if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                                }
                            }
                        } else if(obj.category == "technology"){
                            if("techTab_technologies_ne" == Game.lastNav){
                                if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                            }
                        } else if(obj.category == "storageBuildings"){
                            if("resourcesTab_res_" + obj.resource + "_ne" == Game.lastNav){
                                if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                            }
                        } else if(obj.category == "inner" || obj.category == "outer"){
                            if("solarTab_solar_" + obj.id + "_ne" == Game.lastNav){
                                if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                            }
                        } else if(obj.page == "wonder"){
                            if("wonderTab_won_"+ obj.nav + "_ne" == Game.lastNav){
                                if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                            }
                        } else if(obj.category == "alienTechnology"){
                            if("solCenterTab_solCtr_" + obj.id + "_ne" == Game.lastNav || "solCenterTab_solCtr_" + obj.nav + "_ne" == Game.lastNav){
                                if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                            }
                        }
                    } else if(act == "ui_emc"){
                        if("solCenterTab_solCtr_emc_ne" == Game.lastNav){
                            if (act in obj) { obj[act].update();}
                        }
                    } else {
                        //console.error(act, obj.id);
                        if ('ui_'+act in obj) { obj['ui_'+act].update(); }
                    }
                }          
            })
        })
    };

    /**
     * Called from gameUI.js
     * Adds methods to the given object to update the UI
     * @param  {Object}   object  The object passed in gameUI.js, (eg Game.buildings.entries.metalT1)
     * @param  {String}   action  A piece of information this object contains and will need updating
     * @return {Boolean}          True on success, false on failure.
     */
    this.registerElement = function(object, action) {
        if (typeof object.htmlId == 'undefined' || 
            typeof object[action] == 'undefined' || 
            typeof object.id == 'undefined') {
            console.warn("An invalid object, or object with undefined id/htmlId/action was trying to get registered to perform: "+action+".")
            console.warn(object, object.htmlId, object.id, object[action]);
            return false;
        }
        action = action.toLowerCase();
        // Store the link between action and object
        if (!(action in registeredElements)) {registeredElements[action] = {};}
        var id = object.id;
        if (!(id in registeredElements[action])) {registeredElements[action][id] = {};}
        registeredElements[action][id].object = object;
        return true;
    };
    /**
     * Creates an event listener. An event can be: https://developer.mozilla.org/en-US/docs/Web/Events
     * @param {DOMnode}   target    The DOM node that's the target of the event
     * @param {String}    event     The event to listen for.
     * @param {Function}  callback  The function which should run when this event is received.
     */
    this.addUIEventListener = function(target, event, callback) {
        if (!target) { return false; }
        if (target.addEventListener) {
            target.addEventListener(event, callback, false);
        } else if (target.attachEvent) {
            target.attachEvent("on"+event, callback);
        } else {
            target['on'+event] = callback;
        }
        return true;
    };

    /**
     * This functions examines the entire game's DOM object and
     * creates eventlisteners. It also collects data needed for the UI to work.
     */
    this.linkEvents = function() {
        var allIds = [];
        function getCase(text, key) {
            return text.match(new RegExp(key)) || {};
        }
        Object.keys(Game.pages).forEach(function(page) {
            // Loop through all the ids of the menu and register its events
            var parentNode = document.getElementById(page+'Tab_pane');
            var nodes = parentNode.querySelectorAll('[id]');
            var funct = ""; var node = ""; var nav = page+'Tab';
            var unmatched = []; var header = ''; var item = ''; var pane = '';
            // sort the node ids alphabetically
            nodes.forEach((node) => {
                // Loop vars
                var match = []; var id = node.id; allIds.push(id);
                // Check for the hidden class and add the element to the hidden array
                if (node.classList.contains("hidden")) {hidden = addElement(hidden, id);}

                switch (id) {

                //////////////////
                // Click events //
                //////////////////

                // These are regex matches. (.*) matches any consecutive pattern of a-z, A-Z, 0-9
                // Don't use special characters in names (eg: [](),;:_!)

                // Match the menu headers - #resourcesTab_energy_collapse
                case (match = getCase(id, "^(.*)Tab_(.*)_collapse$")).input:
                    funct = new Function("Templates.uiFunctions.toggleHeader('"+id+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    header = id;
                    break;
                // Match the menu items - #resourcesTab_energy_ne
                case (match = getCase(id, "^(.*)Tab_(.*)_ne$")).input:
                    funct = new Function("Templates.uiFunctions.clickItem('"+id+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    // if the node isn't hidden, add it to noncollapsed.
                    if (node.classList.contains("hidden") && node.classList.contains("collapsed")) {
                        //collapsed = addElement(collapsed, id);
                    } else {
                        //noncollapsed = addElement(noncollapsed, id);
                    }
                    item = id;
                    createMenuTopDownDom(page+"Tab", header, item);
                    break;
                // Match (resources)Tab_(energy)_nec - The top of a content pane
                case (match = getCase(id, "^(.*)Tab_(.*)_nec$")).input:
                    pane = id;
                    break;
                case (match = getCase(id, "^(.*)_(.*)_Container$")).input:
                    createPageTopDownDom(page+"Tab", pane, id);
                    break;
                // Match (resources)_(resbld)_(energyT1)_buy_(1)
                case (match = getCase(id, "^(.*)_(.*)_(.*)_buy_(.*)$")).input:
                    if (match[1]=='solCenter' && match[2]=='solCtr') {
                        if(match[4] == "tech"){
                            funct = new Function("Game.solCenter.research('"+match[3]+"')");
                        } else if(match[3] == "nanoswarm"){
                            funct = new Function("Game.solCenter.buyMachine('"+match[3]+"', "+parseInt(match[4])+")");
                        } else {
                            funct = new Function("Game.solCenter.buyDyson('"+match[3]+"', "+parseInt(match[4])+")");
                        }
                    } else if (match[1]=='tech' && match[2]=='tec') {
                        funct = new Function("Game.tech.buyTech('"+match[3]+"', "+parseInt(match[4])+")");
                    } else if (match[1]=='resources' && match[2]=='sto') {
                        funct = new Function("Game.buildings.buyStorageBuilding('"+match[3]+"', "+parseInt(match[4])+")");
                    } else {
                        funct = new Function("Game.buildings.buyBuildings('"+match[3]+"', "+parseInt(match[4])+")");
                    }
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (resources)_(resbld)_(energyT1)_destroy_(1)
                case (match = getCase(id, "^(.*)_(.*)_(.*)_destroy_(.*)$")).input:
                    funct = new Function("Game.buildings.destroyBuildings('"+match[3]+"', "+parseInt(match[4])+")");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (resources)_(res)_(plasma)_gain
                case (match = getCase(id, "^(.*)_(.*)_(.*)_gain$")).input:
                    funct = new Function("addManualResource('"+match[3]+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (resources)_(res)_(plasma)_toggle
                case (match = getCase(id, "^(.*)_(.*)_(.*)_toggle$")).input:
                    funct = new Function("Game.resources.toggle('"+match[3]+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (resources)_(plasma)_StorageUpgrade
                case (match = getCase(id, "^(.*)_(.*)_StorageUpgrade$")).input:
                    funct = new Function("Game.resources.upgradeStorage('"+match[2]+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (solar)_loc_(moon)_explore
                case (match = getCase(id, "^(.*)_loc_(.*)_explore")).input:
                    funct = new Function("Game.solar.explore('"+match[2]+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (wonder)_wonnav_(precious)_buildWonder
                case (match = getCase(id, "^(.*)_wonnav_(.*)_buildWonder")).input:
                    funct = new Function("Game.wonder.build('"+match[2]+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (wonder)_wonnav_(precious)_activateWonder
                case (match = getCase(id, "^(.*)_wonnav_(.*)_activateWonder")).input:
                    funct = new Function("Game.wonder.activate('"+match[2]+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (solCenter)_convert_(metal)
                case (match = getCase(id, "^(.*)_convert_(.*)")).input:
                    funct = new Function("Game.solCenter.convert('"+match[2]+"','"+Game.settings.entries.notificationsEnabled+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match (machines)_(energyT1)(_de)activate_(1)
                case (match = getCase(id, "^(.*)_(.*)_activate_(.*)")).input:
                    funct = new Function("Game.resources.setRelativeActive('"+match[2]+"','"+parseInt(match[3])+"')");
                    Templates.uiFunctions.addUIEventListener(node, "click", funct);
                    break;
                // Match

                ////////////
                // Unused //
                ////////////

                // Match (resources)Tab_nav
                case (match = getCase(id, "^(.*)Tab_nav$")).input:
                    break;
                // Match (resources)Tab_(energy)_netc
                case (match = getCase(id, "^(.*)Tab_(.*)_netc$")).input:
                    break;
                // Match (resources)Tab_content
                case (match = getCase(id, "^(.*)Tab_content$")).input:
                    break;
                // Match (resources)_(plasma)_SelectStorage_limit
                case (match = getCase(id, "^(.*)_(.*)_SelectStorage_limit$")).input:
                    break;
                // Match (resources)_(plasma)_SelectStorage_time
                case (match = getCase(id, "^(.*)_(.*)_SelectStorage_time$")).input:
                    break;
                // Match (resources)_(plasma)_gainCost
                case (match = getCase(id, "^(.*)_(.*)_gainCost$")).input:
                    break;
                // Match (resources)_(plasma)_gainCost
                case (match = getCase(id, "^(.*)_(.*)Hidden$")).input:
                    break;
                // Match changeEmcAmount [It's handled onmousedown="" as rightclicks are hard to distinguish in this]
                case (match = getCase(id, "changeEmcAmount")).input:
                    break;
                // Match (solCenter)_autoEmc_(metal)_checkbox
                case (match = getCase(id, "^(.*)_autoEmc_(.*)_checkbox$")).input:
                    break;
                // Match (solCenter)_(solCtr)_(metal)_changeResource
                case (match = getCase(id, "^(.*)_(.*)_(.*)_changeResource$")).input:
                    break;

                default:
                    unmatched.push(id);
                }
            });
            // Match the navigation menu - solarTab
            node = document.getElementById(page+"Tab")
            funct = new Function("Templates.uiFunctions.clickNav('"+page+"Tab')");
            Templates.uiFunctions.addUIEventListener(node, "click", funct);
            if (unmatched.length > 0) {
                console.warn("There are unhandled ids in "+page+":");
                console.warn(unmatched);
            }
        })
        // Finished checking all ids, combine the collected menu DOM & page DOM
        combineMenuAndPage();
        // Perform a sanity check on the ids to make sure there are no doubles.
        var handled = [];
        allIds.forEach(function(v) {
            var count = countElement(allIds, v);
            if (count > 1 && !contains(handled, v)) {
                handled.push(v);
                console.warn('The id="'+v+'" is used '+count+' times in the webpage.');
                console.warn('Either the templates need fixing, or more than one internal item has the same id.')
            }
        })
    }




    this.getMenuTopDownDom = function() {
        console.log(menuTopDownDom);
    }
    this.getPageTopDownDom = function() {
        console.log(pageTopDownDom);
    }

    this.getTopDownDom = function() {
        console.log(topDownDom);
    }
    this.getDownTopDom = function() {
        console.log(downTopDom);
    }
    this.getRegisteredElements = function() {
        console.log(registeredElements);
    }
    // WARNING: very slow execution.  Only use for debugging.
    this.getCustomClasses = function() {
        // Check all classes and detect the informational ones
        var tmpArray = []; var rejected = []; var cl = "";
        var readable = []; var sheets = document.styleSheets;
        for (var i = 0; i < sheets.length; i++) {
            if (styleSheetReadable(sheets[i])) {
                readable.push(sheets[i]);
            }
        }
        var nodes = document.querySelectorAll('[class]');
        nodes.forEach(function(node) {
            for (var i = 0; i < node.classList.length; i++) {
                cl = node.classList.item(i);
                if (!contains(rejected, cl)) {
                    if (styleExists(readable, cl)) {
                        rejected = addElement(rejected, cl);
                    } else {
                        tmpArray = addElement(tmpArray, cl);
                    }
                }
            }
        })
        console.log("Found the following custom classes:");
        console.log(tmpArray);
    }

    //////////////////////////////////////////////////////////
    // After loading, run over the collapsed, noncollapsed, //
    // hidden, unhidden arrays and apply their changes.     //
    // Also click on Game.lastTab and Game.lastNav         //
    //////////////////////////////////////////////////////////
    console.log("%c", "background:green;padding:5px;", "UI: this ^");

};
Templates.uiFunctions = new Templates.objectConstructor.UiFunctions();
Templates.uiFunctions.addUIEventListener(window, "load", function() {Game.start()});








(function(){

    var tabTemplate = Handlebars.compile(
        ['<li role="presentation" id="{{htmlId}}" class="{{active}}">',
            '<a href="#{{htmlId}}_pane" id="{{htmlId}}_link" class="{{hidden}}" onclick="Game.lastTab=`{{htmlId}}`"aria-controls="{{id}}" role="tab" data-toggle="tab">',
            '<div id="{{id}}TabGlyph" class="glyphicon glyphicon-exclamation-sign hidden"></div>',
            '{{title}}</a></li>'].join('\n'));

    var contentTemplate = Handlebars.compile(
        ['<div role="tabpanel" class="tab-pane fade {{active}} in" id="{{htmlId}}_pane">',
            '<div class="container" style="width:380px; padding:0; float:left;">',
            '<table class="table table-hover text-primary no-select pointer" ><tbody id="{{htmlId}}_nav"></tbody></table>',
            '</div>',
            '<div class="tab-content" id="{{htmlId}}_content"></div>',
        '</div>'].join('\n'));

    var categoryTemplate = Handlebars.compile(
        ['<tr id="{{htmlId}}_{{id}}_collapse" style="border:none;">',
            '<td colspan="4" style="border:{{border}}">',
            '<span>{{title}}</span> <span class="caret"></span>',
            '</td>',
            '</tr>'].join('\n'));

    var navEntryTemplate = Handlebars.compile(
        ['<tr id="{{htmlId}}_{{id}}_ne" href="#{{htmlId}}_{{id}}_nec" class="collapse_{{htmlId}}_{{category}}" onclick="Game.lastNav=`{{htmlId}}_{{id}}_ne`;" aria-controls="{{htmlId}}_{{id}}_nec" role="tab" data-toggle="tab" style="height:60px;" aria-expanded="true">',
         '</tr>'].join('\n'));

    var navEntryContentTemplate = Handlebars.compile(
        ['<div id="{{htmlId}}_{{id}}_nec" class="tab-pane fade in" style="margin-left:10px; width:100px; float:left;">',
            '<div class="container" style="max-width:800px;">',
            '<table class="table"><tbody id="{{htmlId}}_{{id}}_netc"></tbody></table>',
            '</div>',
            '</div>'].join('\n'));

    var tabRoot = $('#tabList');
    var tabContentRoot = $('#tabContent');

    var tabRegister = {};

    function GameTab(data) {
        if (tabRegister[data.id]) {
            console.error("Duplicate Tab Registered: " + data.id);
        }

        this.categories = {};
        this.categoryEntries = {};

        this.onActivate = null;
        this.onNavActivate = null;

        this.data = data;
        this.data.htmlId = data.id + "Tab";

        tabRegister[data.id] = this;
    }

    // ---------------------------------------------------------------------------
    // basic functions
    // ---------------------------------------------------------------------------
    GameTab.prototype.initialise = function() {
        console.log("initialising:")
        var html = tabTemplate(this.data);
        if(this.data.id == "resources"){
            if(this.data.append == true){
                tabRoot.append($(html));
            } else{
                tabRoot.prepend($(html));
            }
        }
        else{
            
            if(this.data.prepend == true){
                tabRoot.prepend($(html));
            } else{
                tabRoot.append($(html));
            }
        }

        var contentHtml = contentTemplate(this.data);
        tabContentRoot.append($(contentHtml));

        var link = $('#' + this.data.htmlId + '_link');
        link.click({id: this.data.id}, function(args) { tabRegister[args.data.id].activate(); });
    };

    GameTab.prototype.show = function() {
        $('#' + this.data.htmlId).show();
    };

    GameTab.prototype.hide = function() {
        $('#' + this.data.htmlId).hide();
    };

    GameTab.prototype.showCategory = function(id) {
        $('#' + this.data.htmlId + '_' + id + '_collapse').show();
    };

    GameTab.prototype.hideCategory = function(id) {
        $('#' + this.data.htmlId + '_' + id + '_collapse').hide();
    };

    GameTab.prototype.activate = function() {
        $('#' + this.data.id + 'TabGlyph').addClass('hidden');

        if (this.onActivate !== null) {
            this.onActivate(this.data.id);
        }
    };

    GameTab.prototype.addCategory = function(id, title) {
        var border;
        if(id == "energy")
            border = "none";
        else
            border = "";
        var data = {id: id, title: title, htmlId: this.data.htmlId, border: border};
        var html = categoryTemplate(data);
        this.categories[id] = data;
        this.categoryEntries[id] = [];

        $('#' + this.data.htmlId + '_nav').append($(html));

        $('#' + this.data.htmlId + '_' + id + '_collapse').click({htmlId: this.data.htmlId, category: id}, function(args) {
            var htmlId = args.data.htmlId;
            var category = args.data.category;
            if($(this).hasClass("collapsed")){
                $('.collapse_' + htmlId + '_' + category).show();
                $(this).removeClass("collapsed");
            } else {
                $('.collapse_' + htmlId + '_' + category).hide();
                $(this).addClass("collapsed");
            }
        });
    };

    GameTab.prototype.addNavEntry = function(category, id) {
        if(!this.categories[category]) {
            console.error("addNavEntry called with invalid category: " + category);
            return;
        }

        var data = {id: id, htmlId: this.data.htmlId, category: category};
        var html = navEntryTemplate(data);
        var element = $(html);

        if(this.categoryEntries[category].length > 0) {
            var lastCategoryId = this.categoryEntries[category][this.categoryEntries[category].length - 1];
            $('#' + this.data.htmlId + '_' + lastCategoryId + '_ne').after(element);
        } else {
            $('#' + this.data.htmlId + '_' + this.categories[category].id + '_collapse').after(element);
        }

        $('#' + this.data.htmlId + '_' + id + '_ne').click({self: this, id: id, htmlId: this.data.htmlId, category: category}, function(args) {
            var self = args.data.self;
            for(var id in self.categoryEntries) {
                for(var i = 0; i < self.categoryEntries[id].length; i++) {
                    $('#' + args.data.htmlId + '_' + self.categoryEntries[id][i] + '_ne').removeClass('info');
                }
            }

            $(this).addClass('info');

            if(args.data.self.onNavActivate !== null) {
                args.data.self.onNavActivate(args.data.id);
            }
        });

        var contentHtml = navEntryContentTemplate(data);
        var contentElement = $(contentHtml);
        $('#' + this.data.htmlId + '_content').append(contentElement);

        this.categoryEntries[category].push(id);
    };

    GameTab.prototype.categoryHasEntries = function(category) {
        return this.categoryEntries[category].length;
    };

    GameTab.prototype.categoryHasUnlockedEntries = function(category) {
        for(var i = 0; i < this.categoryEntries[category].length; i++) {
            var res = Game.resources.getResourceData(this.categoryEntries[category][i]);
            if(res.unlocked) return true;
        }

        return false;
    };

    GameTab.prototype.getContentElementId = function(id) {
        return this.data.htmlId + '_' + id + '_netc';
    };

    GameTab.prototype.getNavElementId = function(id) {
        return this.data.htmlId + '_' + id + '_ne';
    };

    // ---------------------------------------------------------------------------
    // registration
    // ---------------------------------------------------------------------------
    Game.ui.createTab = function(data) {
        return new GameTab(data);
    }

}());