function refreshTimeUntilLimit() {
	for (var id in Game.resources.entries) {
		var limitType = id + 'LimitType';
		var limitTime = id + 'LimitTime';
		var amount = getResource(id);
		var storage = getStorage(id);
		var production = getProduction(id);
		setTimeUntilDisplayTest(limitType, limitTime, amount, storage, production);
	}
}

function setTimeUntilDisplayTest(targetLimitType, targetLimitTime, current, max, perSecond) {
	var targetTypeElement = $('#' + targetLimitType);
	var targetTimeElement = $('#' + targetLimitTime);
	var value = 0;
	var isDraining = false;
	if(perSecond > 0) {
		value = (max - current) / perSecond;
	} else if (perSecond < 0) {
		value = Math.abs(current / perSecond);
		isDraining = true;
	}

	if(value > 0) {
		var formattedTimeTest = Game.utils.getFullTimeDisplay(value);
		targetTimeElement.text(formattedTimeTest);

		if(isDraining){
			targetTypeElement.text('empty');
			targetTimeElement.addClass('red');
		} else {
			targetTypeElement.text('full');
			targetTimeElement.removeClass('red');
		}
	} else {
		targetTypeElement.text('full');
		targetTimeElement.text('N/A');
	}
}

function refreshPerSec(delta){

	var perSecondMultiplier = 1 + (Game.tech.entries.resourceEfficiencyResearch.count * 0.01) + (Game.stargaze.entries.darkMatter.current * Game.stargaze.dmBoost);

	antimatterps = 0;

	var plasmaps = Game.resources.entries.plasma.perSecond;
	var iceps = Game.resources.entries.ice.perSecond;

	if (antimatterToggled === true) {
		if (antimatter + antimatterps < antimatterStorage) {
			var plasmaCost = (Game.interstellar.antimatter.entries.drive.count*100);
			var iceCost = (Game.interstellar.antimatter.entries.drive.count*12000);
			if (getResource(RESOURCE.Plasma) + getProduction(RESOURCE.Plasma) >= plasmaCost &&
				getResource(RESOURCE.Ice) + getProduction(RESOURCE.Ice) >= iceCost) {
				plasmaps -= plasmaCost;
				iceps -= iceCost;
				antimatterps += Game.interstellar.antimatter.entries.drive.count/2;
			}
		}
		else {
			antimatter = antimatterStorage;
			antimatterps += Game.interstellar.antimatter.entries.drive.count/2;
		}
	}
}

function contains(array, obj) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === obj) {
			return true;
		}
	}
	return false;
}


//Copy To Clipboard
var copyTextareaBtn = document.querySelector('#copyExport');

copyTextareaBtn.addEventListener('click', function(event) {
	var copyTextarea = document.querySelector('#impexpField');
	copyTextarea.select();

	try {
		var successful = document.execCommand('copy');
		var msg = successful ? 'successful' : 'unsuccessful';
		console.log('Copying text command was ' + msg);
	} catch (err) {
		console.log('Oops, unable to copy');
	}
});

//ToolTips
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip({container: 'body'}); 
});

//Change Company Name
$('input[name="companyName"]').change(function(){
	Game.companyName = ($('input[name="companyName"]').val());
	Game.settings.updateCompanyName();
});

function calculateKardashevLevel() {
	return (Math.log10(calculateEnergyUse(1)-6))/10;
}