var post = function(raw) {

    raw.publishedDateDisplay = function () {
        var pubDate = new Date(raw.publishedDate);
//        var month = pubDate.getMonth();
//        var day = pubDate.getDay();
//        var year = pubDate.getYear();
//        return month + " " + day + ", " + year;
    };

    return raw;
};