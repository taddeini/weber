Weber.Post = Backbone.Model.extend({
    defaults: {
        author: "",
        byline: "",
        title: "",
        publishedDate: null,
        publishedDateDisplay: "n/a",
        publishedDateMeta: "n/a",
        content: ""
    },

    initialize: function () {
        this.set({
            publishedDateDisplay: Weber.utils.dates.formatDate({
                date: this.get("publishedDate"),
                format: "MMMM D, YYYY h:mma"
            }),
            publishedDateMeta: Weber.utils.dates.formatDate({ date: this.get("publishedDate") })
        });
    }
});