Weber.PostView = Backbone.View.extend({
    el: "#main",

    initialize: function () {
        this.template = Weber.tmpl("#postTemplate");
    },

    render: function () {
        var content = this.template(this.model.attributes);
        this.$el.html(content);
        return this;
    }
});