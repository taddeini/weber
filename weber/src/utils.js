///<reference path="/assets/js/libs/moment.min.js"/>

utils = function(moment, $) {
    var _moment = moment;
    var _$ = $;
    
    return {
        dates: {
            formatDate: function(args) {
                var parsedDate = Date.parse(args.date);

                if (isNaN(parsedDate)) {
                    return "n/a";
                } else {
                    return _moment(args.date).format(args.format);
                }
            }
        },
        ajax: {
            post:function(args, callback) {
            },
            
            get:function(args, callback) {
            }
        }
    };
};