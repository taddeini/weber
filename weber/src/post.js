///<reference path="/assets/js/libs/moment.min.js" />

//TODO: Time to modularize this, and excise the dependencies out into a facade (i.e. moment.js)
var post = function(raw) {

    raw.pubDateDisplay = function () {
        return moment(raw.publishedDate).format("MMMM DD, YYYY h:mma") + " CDT";
    };

    raw.pubDateMeta = function() {
        return moment(raw.publishedDate).format(); //defaults to ISO-8601
    };

    return raw;
};