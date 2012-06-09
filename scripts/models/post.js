Weber.Post = Backbone.Model.extend({
    defaults: {
        id: "",
        author: "",
        byline: "",
        title: "",
        publishedDate: null,
        publishedDateDisplay: "n/a",
        publishedDateMeta: "n/a",
        content: "",
        contentSnippet: "",
        isSelected: false
    },

    initialize: function () {
        this.set({
            publishedDateDisplay: Weber.utils.dates.formatDate({
                date: this.get("publishedDate"),
                format: "MMMM D, YYYY h:mma"
            }),
            publishedDateMeta: Weber.utils.dates.formatDate({ date: this.get("publishedDate") })
        });
    },

    setSelected: function (value) {
        this.set({ "isSelected": value });
        this.trigger("currentItem-changed", this);
    }
});