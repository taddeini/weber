Weber.Feed = Backbone.Collection.extend({
    defaults: {
        title: ""
    },

    initialize: function (feedUrl, callbacks) {

        if (typeof feedUrl === "undefined") {
            throw new Error("Feed URL was not provided.");
        }

        var that = this;

        Weber.utils.ajax.getFeed(feedUrl, function (feed) {
            //TODO: Stuck on the best way to test this--need to come back to it.

            that.title = feed.title;
            that.models = feed.entries;

            _.each(callbacks, function (callback) {
                callback(that);
            });
        });
    },

    model: Weber.Post
});