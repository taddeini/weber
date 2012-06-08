Weber.PostDetailView = Backbone.View.extend({
    el: "#detail",

    initialize: function () {
        this.template = Weber.tmpl("#postDetailTemplate");
    },

    render: function () {
        var content = this.template(this.model.toJSON());
        this.$el.html(content);
        return this;
    }
});