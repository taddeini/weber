///<reference path="/assets/js/libs/moment.min.js" />

var post = function(sandbox) {
    return {
        init: function(postData) {
            postData.pubDateDisplay = sandbox.formatDate({
                date: postData.publishedDate,
                format: "MMMM DD, YYYY h:mma"
            }) + " CDT";

            postData.pubDateMeta = sandbox.formatDate({
                date: postData.publishedDate
            });

            return postData;
        }
    };
};