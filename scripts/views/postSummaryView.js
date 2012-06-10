Weber.PostSummaryView = Backbone.View.extend({
    tagName: "li",

    events: {
        "click .postSummary": "select"
    },

    initialize: function () {
        this.template = Weber.tmpl("#postSummaryTemplate");
    },

    render: function () {
        var content = this.template(this.model.toJSON());
        this.$el.html(content);
        return this;
    },

    select: function () {
        this.model.setSelected(true);
    }
});