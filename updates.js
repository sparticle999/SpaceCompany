Game.updates = (function(){
	
	var instance = {};
	instance.entries = [];

	instance.versionNumber = 2;
	instance.updateRead = false;

	instance.updateTitleTemplate = Handlebars.compile(['<div id="updateAlert" class="alert alert-info alert-dismissible fade in">',
	    '<button href="#" class="close btn.btn-info" data-dismiss="alert" aria-label="close">Close</button>',
	    '<strong>New Update!</strong> These are the features since you last played (V1 onwards):<br>',
	    '<ul id="updateLog"></ul>',
	'</div>'].join('\n'));
	instance.updateTemplate = Handlebars.compile('<li><span>{{desc}}</span></li>');

	instance.initialise = function(){
		if(Game.resources.entries.metal.current != 0){
			var extra = 0;
			var target = $('#updateBox');
			var html = this.updateTitleTemplate();
			target.append($(html));
			for(var id in Game.updatesData) {
				if(this.entries.length < 5){
					this.createDisplay(Game.updatesData[id]);
				}
				else{
					extra += 1;
				}
	            
	        }
	        if(extra > 0){
	        	var extraUpdates = {
	        		desc: '+' + extra + ' more. Click the version number to see the full changelog.',
	        		read: false
	        	}
	        	this.createDisplay(extraUpdates);
	        }
	    	if(this.updateRead === false){
	    		document.getElementById("updateAlert").className = "hidden";
	    	}
	    } else {
	    	for(var id in Game.updatesData) {
				Game.updatesData[id].read = true;
	            
	        }
	    }
	}

	instance.createDisplay = function(self){
		if(self.read == false){
			this.entries.push(self);
			var target = $('#updateLog');
	        var html = this.updateTemplate(self);
	        target.append($(html));
	        self.read = true;
	        this.updateRead = true;
		}
	}

	instance.save = function(data){
		data.updates = {versionNumber: 3, entries: {}};
		for(var id in Game.updatesData){
			data.updates.entries[id] = Game.updatesData[id].read;
		}
	}

	instance.load = function(data){
		if(data.updates) {
			if(data.updates.versionNumber && data.updates.versionNumber == 3){
				Game.updates.versionNumber = data.versionNumber;
				for(var id in data.updates.entries){
					Game.updatesData[id].read = data.updates.entries[id];
				}
			}
		}
	}

	instance.getUpdateData = function(id) {
        return Game.updatesData[id];
    };

	return instance;

}());

Game.updatesData = (function(){

	var instance = {};

	instance.revamp = {
		desc: 'Completely Revamped the entire game, changing the entire codebase, most UI, added a bunch of endgame features, changed rebirth, massively increased interstellar complexity',
		read: false
	};

	return instance;

}());