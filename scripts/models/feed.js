Weber.Feed = Backbone.Model.extend({
    initialize: function (args) {
        var postId = 1;
        args = args || {};
        this.posts = new Backbone.Collection();

        if (args.entries) {
            var postModels = args.entries.map(function (entry) {
                // Currently, the feed will create internal identifiers for each created post
                if (!entry.id) {
                    entry.id = postId;
                    postId += 1;
                }
                return new Weber.Post(entry);
            });
            this.posts.add(postModels);
        }
    },

    setSelectedPost: function (postId) {
        this.posts.each(function (post) {
            var isSelectedId = (post.get("id") === postId)

            if (isSelectedId && !post.isSelected()) {
                post.setSelected(true);
            }
            else if (!isSelectedId && post.isSelected()) {
                post.setSelected(false);
            }
        });
    }
});