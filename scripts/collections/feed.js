Weber.Feed = Backbone.Collection.extend({
    initialize: function (feedUrl, callbacks) {

        if (typeof feedUrl === "undefined") {
            throw new Error("Feed URL was not provided.");
        }

        var that = this;

        Weber.utils.ajax.getFeed(feedUrl, function (feed) {
            that.models = feed;
            _.each(callbacks, function (callback) {
                callback(that);
            });
        });
    },

    model: Weber.Post
});