///<reference path="/assets/js/libs/moment.min.js"/>

sandbox = function(moment) {
    var _moment = moment;
    return {
        formatDate: function(args) {
            var parsedDate = Date.parse(args.date);

            if (isNaN(parsedDate)) {
                return "n/a";
            } else {
                return _moment(args.date).format(args.format);
            }
        }
    };
};