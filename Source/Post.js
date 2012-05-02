///<reference path="/Assets/Scripts/Libs/moment.min.js" />

Post = function(utils) {
    return {
        init: function(args) {
            var _postData = args.postData;

            _postData.pubDateDisplay = utils.dates.formatDate({
                date: _postData.publishedDate,
                format: "MMMM D, YYYY h:mma"
            }) + " CDT";

            _postData.pubDateMeta = utils.dates.formatDate({
                date: _postData.publishedDate
            });

            return _postData;
        }
    };
};