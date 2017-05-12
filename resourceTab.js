Game.resourceTab = (function(){

    var instance = {};

    instance.entries = {};
    instance.mainTemplate = null;
    instance.root = null;

    instance.initialize = function() {

        instance.mainTemplate = Handlebars.compile(
            ['<div id="{{id}}" class="tab-pane fade in" style="margin-left:10px; width:100px; float:left;">',
                '<div class="container" style="max-width:800px;">',
                    '<table class="table"></table>',
                '</div>',
            '</div>'].join('\n'));

        instance.titleTemplate = Handlebars.compile(
            ['<td style="border:none;">',
                '<h2 class="default btn-link">{{name}}</h2>',
                '<span>{{desc}}</span>',
                '<br><br>',
                '<div onclick="{{func}}" class="btn btn-default" id="{{id}}_gain">ERR</div>',
                '<br><br>',
            '</td>'].join('\n'));

        instance.upgradeTemplate = Handlebars.compile(
            ['<td style="border:none;">',
                '<h3 class="default btn-link">{{name}}</h3>',
                '<span>{{desc}}</span>',
                '<span>{{cost}}</span>',
                '<br><br>',
                '<div onclick="{{func}}" class="btn btn-default">Buy</div>',
              '</td>'].join('\n'));

        instance.buildingTemplate = Handlebars.compile(

        );

        this.root = $('#resourceTabParent');
    };

    instance.update = function(delta) {
    };

    instance.createEntry = function() {

    };

    return instance;
}());