// vanilla

// global namespace
var JSApp = JSApp || {};

JSApp.toTopButton = {

    options: {
        // Content of the button
        back_to_top_text: '<i class="fa fa-chevron-up"></i>',

        // CSS class of the button
        back_to_top_class: 'back-to-top',

        // CSS class of the button
        back_to_top_showclass: 'unhide',

        // Offset when the button is to show
        back_to_top_offset: 100,

        // Scrolltop time
        back_to_top_duration: 800,

        // Appender
        appender: document.getElementsByClassName('container')[0]
    },

    scrollTo: function(element, to, duration) {
        var
            start = element.scrollTop,
            change = to - start,
            increment = 20,
            _this = this
        ;

        var animateScroll = function(elapsedTime) {
            elapsedTime += increment;
            var position = _this.easeInOut(elapsedTime, start, change, duration);
            element.scrollTop = position;
            if (elapsedTime < duration) {
                setTimeout(function() {
                    animateScroll(elapsedTime);
                }, increment);
            }
        };

        animateScroll(0);
    },

    easeInOut: function(currentTime, start, change, duration) {
        currentTime /= duration / 2;
        if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start;
        }
        currentTime -= 1;
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    },

    init: function(){
        var
            button = document.createElement('a'),
            body = this.options.appender,
            _this = this
        ;

        // Set Class
        button.classList.add(this.options.back_to_top_class);
        button.innerHTML = this.options.back_to_top_text;

        button.addEventListener('click', function(){
            var bod = document.documentElement || document.body;
            _this.scrollTo(bod, 0, _this.options.back_to_top_duration);
        });

        body.appendChild(button);

        ['scroll', 'resize'].forEach(function(ev) {
            window.addEventListener(ev, function() {
                var top = document.documentElement.scrollTop || document.body.scrollTop;
                if(top >= _this.options.back_to_top_offset){
                    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    button.classList.add(_this.options.back_to_top_showclass);
                    if(w > body.offsetWidth)
                        button.style.right = (w - body.offsetWidth) / 2 + 'px';
                }
                else {
                    button.classList.remove(_this.options.back_to_top_showclass);
                }
            });
        });
    }
};
document.addEventListener('DOMContentLoaded', function() {
    JSApp.toTopButton.init();
});
