Weber.Feed = Backbone.Model.extend({
    initialize: function (args) {
        args = args || {};
        this.posts = new Backbone.Collection();

        if (args.entries) {
            var postModels = args.entries.map(function(entry){
                return new Weber.Post(entry);
            });
            this.posts.add(postModels);
        }
    },

    setSelectedPost: function (postId) {
    }
});