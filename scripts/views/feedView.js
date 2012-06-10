Weber.FeedView = Backbone.View.extend({
    el: "#feed",

    initialize: function () {
    },

    render: function () {
        var postItems = [];

        this.model.posts.each(function (post) {
            var postSummaryView = new Weber.PostSummaryView({ model: post });
            postItems.push(postSummaryView.render().el);
        });

        this.$el.append(postItems);
        return this;
    },
});