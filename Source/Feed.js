///<reference path="/Assets/Scripts/Libs/moment.min.js" />

var feed = function(utils) {
    return {
        init: function(args) {
            var feedData = utils.ajax.getFeed(args.url, function(result) {
                //TODO: This is rendering a post here, not a feed
                //TODO: Passing around utils all the time doesnt seem correct.
                var testPost = post(utils).init({ postData: result.entries[0] });
                $("#postTemplate").tmpl(testPost).appendTo("#main");
            });
        }
    };
};