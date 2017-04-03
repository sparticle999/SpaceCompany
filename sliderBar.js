(function ($) {

    var PPSliderClass = function (el, opts) {
        var element = $(el);
        var options = opts;
        var isMouseDown = false;
        var currentVal = 0;

        element.wrap('<div/>')
        var container = $(el).parent();

        container.addClass('pp-slider');
        container.addClass('clearfix');

        container.append('<div class="pp-slider-min">-</div><div class="pp-slider-scale"><div class="pp-slider-button" style="left: 70px;"><div class="pp-slider-divies"></div></div><div id="sliderValue" class="pp-slider-tooltip" style="left: 64px;">' + autoSaveTime + '</div></div><div class="pp-slider-max">+</div>');
        
        if (typeof(options) != 'undefined' && typeof(options.hideTooltip) != 'undefined' && options.hideTooltip == true)
        {
          container.find('.pp-slider-tooltip').hide();
        }

        if (typeof(options.width) != 'undefined')
        {
          container.css('width',(options.width+'px'));
        }
        container.find('.pp-slider-scale').css('width',(container.width()-30)+'px');

        var startSlide = function (e) {            
          
          isMouseDown = true;
          var pos = getMousePosition(e);
          startMouseX = pos.x;
          
          lastElemLeft = ($(this).offset().left - $(this).parent().offset().left);
          updatePosition(e);

          return false;
        };
        
        var getMousePosition = function (e) {
          //container.animate({ scrollTop: rowHeight }, options.scrollSpeed, 'linear', ScrollComplete());
          var posx = 0;
          var posy = 0;

          if (!e) var e = window.event;

          if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
          }
          else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
          }

          return { 'x': posx, 'y': posy };
        };

        var updatePosition = function (e) {
          var pos = getMousePosition(e);

          var spanX = (pos.x - startMouseX);

          var newPos = (lastElemLeft + spanX)
          var upperBound = (container.find('.pp-slider-scale').width()-container.find('.pp-slider-button').width());
          newPos = Math.max(0,newPos);
          newPos = Math.min(newPos,upperBound);
          currentVal = Math.round((newPos/upperBound)*20,0);

          container.find('.pp-slider-button').css("left", newPos);
          container.find('.pp-slider-tooltip').html(currentVal);
          container.find('.pp-slider-tooltip').css('left', newPos-6);
        };

        var moving = function (e) {
          if(isMouseDown){
            updatePosition(e);
            document.getElementById("autoSaveTime").innerHTML = document.getElementById("sliderValue").innerHTML;
            saveTimer = 0;
            return false;
          }

        };

        var dropCallback = function (e) {
          isMouseDown = false;
          element.val(currentVal);
          if(typeof element.options != 'undefined' && typeof element.options.onChanged == 'function'){
            element.options.onChanged.call(this, null);
          }

        };

        container.find('.pp-slider-button').bind('mousedown',startSlide);

        $(document).mousemove(function(e) { moving(e); });
        $(document).mouseup(function(e){ dropCallback(e); });
        
    };

    /*******************************************************************************************************/

    $.fn.PPSlider = function (options) {
        var opts = $.extend({}, $.fn.PPSlider.defaults, options);

        return this.each(function () {
            new PPSliderClass($(this), opts);
        });
    }

    $.fn.PPSlider.defaults = {
        width: 150
    };


})(jQuery);


$("#slider1").PPSlider({width: 700});