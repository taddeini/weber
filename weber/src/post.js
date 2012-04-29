///<reference path="/assets/js/libs/moment.min.js" />

var post = function(utils) {
    return {
        init: function(args) {
            var _postData = args.postData;

            _postData.pubDateDisplay = utils.dates.formatDate({
                date: _postData.publishedDate,
                format: "MMMM DD, YYYY h:mma"
            }) + " CDT";

            _postData.pubDateMeta = utils.dates.formatDate({
                date: _postData.publishedDate
            });

            return _postData;
        }
    };
};