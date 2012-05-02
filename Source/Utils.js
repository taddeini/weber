///<reference path="/Assets/Scripts/Libs/moment.min.js"/>

Utils = function(moment, $) {
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
            getFeed: function(url, callback) {
                //TODO: How to go about testing this? Should the google feed loader be part of this?
                _$.ajax({
                    url: document.location.protocol +
                        "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=" +
                        encodeURIComponent(url),
                    dataType: "json",
                    //TODO: Handle failure here
                    success: function(data) {
                        callback(data.responseData.feed);
                    }
                });
            }
        }
    };
};