///<reference path="/assets/js/libs/moment.min.js" />

//TODO: Time to modularize this, and excise the dependencies out into a facade (i.e. moment.js)
var post = function(raw) {

    raw.publishedDateDisplay = function () {
        return moment(raw.publishedDate).format("MMMM DD, YYYY h:mma") + " CDT";
    };

    return raw;
};