Weber.PostDetailView = Backbone.View.extend({
    el: "#detail",

    initialize: function () {
        if (!this.model) {
            throw new Error("A model is required.");
        }

        this.template = Weber.tmpl("#postDetailTemplate");
        this.model.posts.on("change:isSelected", this.render, this);
    },

    render: function () {
        var selectedPost = this.model.posts.find(function (post) {
            return post.isSelected();
        });

        if (selectedPost) {
            this.$el.html("");
            var content = this.template(selectedPost.toJSON());
            this.$el.html(content);
        }
        return this;
    }
});