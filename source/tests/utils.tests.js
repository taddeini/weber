///<reference path="/assets/scripts/qunit.js"/> 
///<reference path="/assets/scripts/moment.min.js"/> 
///<reference path="/source/utils.js"/>

module("utils", {
    setup: function() {
        this.testUtils = utils(moment);
    }
});

test("ValidDate_FormatsCorrectly", function() {
    var validDate = "Wed, 29 Oct 2011 23:14:48 +0000";
    var result = this.testUtils.dates.formatDate(
        {
            date: validDate,
            format: "MMM DD, YYYY h:mm:ss"
        });

    equal(result, "Oct 29, 2011 6:14:48");
});

test("InvalidDate_FormatsToNA", function() {
    var invalidDate = "Wed, 29 Oct 2009 abc -0700";
    var result = this.testUtils.dates.formatDate({ date: invalidDate });
    equal(result, "n/a");
});

//module("post", {
//    setup: function () {
//        this.testUtils = utils(moment);
//    }
//});

//test("PublishDate_FormatsToPublishDateDisplay", function () {
//    var testPostData = { publishedDate: "Wed, 9 Oct 2011 23:14:48 +0000" };

//    var testPost = post(this.testUtils).init({ postData: testPostData });
//    var result = testPost.pubDateDisplay;

//    equal(result, "October 9, 2011 6:14pm CDT");
//});

//test("PublishDate_FormatsToPublishDateMeta", function () {
//    var testPostData = { publishedDate: "Wed, 02 Feb 2009 10:11:19 -0700" };

//    var testPost = post(this.testUtils).init({ postData: testPostData });
//    var result = testPost.pubDateMeta;

//    equal(result, "2009-02-02T11:11:19-06:00");
//});