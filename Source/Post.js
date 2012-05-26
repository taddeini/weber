///<reference path="/Assets/Scripts/Libs/moment.min.js" />

var post = function(utils) {
    return {
        init: function(args) {
            var postData = args.postData;

            postData.pubDateDisplay = utils.dates.formatDate({
                date: postData.publishedDate,
                format: "MMMM D, YYYY h:mma"
            }) + " CDT";

            postData.pubDateMeta = utils.dates.formatDate({
                date: postData.publishedDate
            });

            return postData;
        },        
        render: function () {
        }
    };
};