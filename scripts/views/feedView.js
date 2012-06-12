Weber.FeedView = Backbone.View.extend({
    el: "#feed",

    events: {
        "click .postSummary": "select"
    },

    initialize: function () {
        if (!this.model) {
            throw new Error("A model is required.");
        }

        this.template = Weber.tmpl("#postSummaryTemplate");
        this.model.posts.on("change:isSelected", this.render, this);
    },

    render: function () {
        var postItems = [],
            that = this,
            content;
        
        this.model.posts.each(function (post) {
            content = that.template(post.toJSON());
            that.$el.append(content);
        });

        return this;
    },

    select: function (evt) {
        //var id = $(evt.currentTarget).data("id");
    }
});