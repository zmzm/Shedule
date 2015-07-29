var jsdom = require('jsdom');

module.exports.SheduleParse = function (html, callback) {
    jsdom.env({
        html: html,
        scripts: [
            'http://code.jquery.com/jquery-1.9.1.js'
        ],
        done: function (err, window) {
            var $ = window.$;
            var tr = $('tr');
            var spannedIndex = -1;
            var classesIndex = 0;
            var schedule = [];
            $.each(tr, function (index) {
                if ($(this).attr('class') == 'row row-spanned') {
                    classesIndex = 0;
                    schedule[++spannedIndex] = {
                        day: $(this).find('.day').text(),
                        date: $(this).find('.date').text()
                    };
                    schedule[spannedIndex].classes = [];
                    schedule[spannedIndex].classes[classesIndex++] = {
                        time: $(this).find('.cell-time').text(),
                        subgroup: $(this).find('.cell-subgroup').text(),
                        discipline: $(this).find('.cell-discipline').text(),
                        staff: $(this).find('.cell-staff').text(),
                        auditory: $(this).find('.cell-auditory').text()
                    };

                }
                if ($(this).attr('class') == 'row row-empty') {
                    classesIndex = 0;
                    schedule[++spannedIndex] = {
                        day: $(this).find('.day').text(),
                        date: $(this).find('.date').text()
                    };
                    schedule[spannedIndex].classes = [];
                }
                if ($(this).attr('class') == 'row') {
                    schedule[spannedIndex].classes[classesIndex++] = {
                        time: $(this).find('.cell-time').text(),
                        subgroup: $(this).find('.cell-subgroup').text(),
                        discipline: $(this).find('.cell-discipline').text(),
                        staff: $(this).find('.cell-staff').text(),
                        auditory: $(this).find('.cell-auditory').text()
                    };
                }
            });


            callback(err, schedule);
        }
    });
};
