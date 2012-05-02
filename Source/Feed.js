///<reference path="/Assets/Scripts/Libs/moment.min.js" />

Feed = function(utils) {
    return {
        init: function(args) {
            var _feedData = utils.ajax.getFeed(args.feedUrl, function(result) {
                //TODO: This is rendering a post here, not a feed
                //TODO: Passing around utils all the time doesnt seem correct.
                var post = Post(utils).init({ postData: result.entries[0] });
                $("#postTemplate").tmpl(post).appendTo("#main");
            });
        }
    };
};