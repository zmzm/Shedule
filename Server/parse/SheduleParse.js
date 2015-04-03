var jsdom = require('jsdom');

module.exports.SheduleParse = function(html) {
    jsdom.env({
        html: html,
        scripts: [
            'http://code.jquery.com/jquery-1.7.min.js'
        ],
        done: function (err, window) {
            var $ = window.jQuery;
            var tr = $('tr');
            var Index = 0;
            var schedule = [];
            $.each(tr, function(index) {
                if ( $(this).attr('class') === 'row row-spanned') {
                    schedule[++Index] = {
                        day:   $(this).find('.day').text(),
                        date: $(this).find('.date').text(),
                        time: $(this).find('.cell-time').text(),
                        subgroup: $(this).find('.cell-subgroup').text(),
                        discipline:$(this).find('.cell-discipline').text(),
                        staff: $(this).find('.cell-staff').text(),
                        auditory: $(this).find('.cell-auditory').text()
                    };

                }
                if ( $(this).attr('class') === 'row row-empty') {
                    schedule[++Index] = {
                        day:   $(this).find('.day').text(),
                        date: $(this).find('.date').text()
                    };
                }
                if ($(this).attr('class') === 'row') {
                    schedule[++Index] = {
                        time: $(this).find('.cell-time').text(),
                        subgroup: $(this).find('.cell-subgroup').text(),
                        discipline:$(this).find('.cell-discipline').text(),
                        staff: $(this).find('.cell-staff').text(),
                        auditory: $(this).find('.cell-auditory').text()
                    };
                }
            });


            console.log(schedule);
        }
    });
};
