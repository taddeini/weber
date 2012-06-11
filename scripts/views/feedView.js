Weber.FeedView = Backbone.View.extend({
    el: "#feed",

    initialize: function () {
        if (!this.model) {
            throw new Error("A model is required.");
        }

        this.model.posts.on("change:isSelected", this.render, this);
    },

    render: function () {
        var postItems = [];

        this.model.posts.each(function (post) {
            var postSummaryView = new Weber.PostSummaryView({ model: post });
            postItems.push(postSummaryView.render().el);
        });

        this.$el.html("").append(postItems);
        return this;
    },
});