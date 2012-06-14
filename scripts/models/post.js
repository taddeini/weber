Weber.Post = Backbone.Model.extend({
    defaults: {
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
        if (!this.get("id")) {
            throw new Error("A post id is required.");
        }

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
    },

    isSelected: function () {
        return this.get("isSelected");
    }
});