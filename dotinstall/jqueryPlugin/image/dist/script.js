function hoge() {
    console.log('hoge');
    console.log('hoge');
    console.log('aaaaa')
};
;
(function ($) {

    $.fn.showsize = function (options) {

        var elems = this;
        elems.each(function () {
            var opt = $.extend({}, $.fn.showsize.defaults, options, $(this).data());
            $(this).on('click', function () {
                var msg = $(this).width() + ' × ' + $(this).height();
                var parent = $(this).parent()[0];
                if ($(parent).attr('class') !== 'img-wrapper') {
                    $(this).wrap('<div style="position: relative;" class="img-wrapper"></div>');
                }
                var next = $(this).next()[0];
                if (next) {
                    $(next).remove();
                }
                var div = $('<div>')
                    .text(msg)
                    .css('position', 'absolute')
                    .css('top', 0)
                    .css('padding', '2px')
                    .css('font-size', opt.size + 'px')
                    .css('background', '#000000')
                    .css('color', getRandomColor())
                    .css('opacity', opt.opacity);
                $(this).after(div);
            });

        });
        return this;
    };

    function getRandomColor() {
        var hexColor = '#';
        for (var i = 0; i < 3; i++) {
            var decimal = Math.floor(Math.random() * 256);
            var hex = decimal.toString(16);
            hexColor += hex;
        }
        return hexColor;
    }

    $.fn.showsize.defaults = {
        size: 10,
        opacity: 0.9
    };

})(jQuery);;
function testName(name) {
    console.log('this is test!!');
    console.log(name);
};
