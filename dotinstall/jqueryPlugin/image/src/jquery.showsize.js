;
(function ($) {

    $.fn.showsize = function (options) {

        var elems = this;
        elems.each(function () {
            var opt = $.extend({}, $.fn.showsize.defaults, options);
            $(this).on('click', function () {
                var msg = $(this).width() + ' × ' + $(this).height();
                $(this).wrap('<div style="position: relative;"></div>');
                var div = $('<div>')
                    .text(msg)
                    .css('position', 'absolute')
                    .css('top', 0)
                    .css('padding', '2px')
                    .css('font-size', opt.size + 'px')
                    .css('background', '#000000')
                    .css('color', '#ffffff')
                    .css('opacity', opt.opacity);
                $(this).after(div);
            });

        });
        return this;
    };

    $.fn.showsize.defaults = {
        size: 10,
        opacity: 0.9
    };

})(jQuery);