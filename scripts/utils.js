///<reference path="/scripts/libs/moment.min.js"/>

var utils = function(moment, $) {
    return {
        dates: {
            formatDate: function (args) {
                var result = "n/a";
                if (typeof args !== "undefined") {
                    var parsedDate = Date.parse(args.date);
                    if (!isNaN(parsedDate)) {
                        result = moment(args.date).format(args.format);
                    }
                }
                return result;
            }
        },

        ajax: {
            getFeed: function(url, callback) {
                //TODO: How to go about testing this? Should the google feed loader be part of this?
                $.ajax({
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