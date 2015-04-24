var jsdom = require('jsdom');

module.exports.SheduleParse = function(html, callback) {
    jsdom.env({
        html: html,
        scripts: [
            'http://code.jquery.com/jquery-1.9.1.js'
        ],
        done: function (err, window) {
            var $ = window.$;
            var tr = $('tr');
            var Index = 0;
            var Index1 = 0;
            var schedule = [];
            $.each(tr, function(index) {
                if ( $(this).hasClass('row-spanned')) {
                    schedule[++Index1] = {
                        day:   $(this).find('.day').text(),
                        date: $(this).find('.date').text(),
                        time: $(this).find('.cell-time').text(),
                        subgroup: $(this).find('.cell-subgroup').text(),
                        discipline:$(this).find('.cell-discipline').text(),
                        staff: $(this).find('.cell-staff').text(),
                        auditory: $(this).find('.cell-auditory').text()
                    };

                }
                if ( $(this).hasClass('row-empty')) {
                    schedule[++Index1] = {
                        day:   $(this).find('.day').text(),
                        date: $(this).find('.date').text()
                    };                    
                }
                if ($(this).attr('class') === 'row') {
                    schedule[++Index1] = {
                        time: $(this).find('.cell-time').text(),
                        subgroup: $(this).find('.cell-subgroup').text(),
                        discipline:$(this).find('.cell-discipline').text(),
                        staff: $(this).find('.cell-staff').text(),
                        auditory: $(this).find('.cell-auditory').text()
                    };
                }
            });


            callback(err,schedule);
        }
    });
};
