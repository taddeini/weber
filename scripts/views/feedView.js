Weber.FeedView = Backbone.View.extend({
    el: "#feed",

    initialize: function () {
    },

    render: function () {
        var items = [];

        _.each(this.collection, function (postData) {
            var post = new Weber.Post(postData);
            var postSummaryView = new Weber.PostSummaryView({ model: post });
            items.push(postSummaryView.render().el);
        });

        this.$el.append(items);
        return this;
    }
});