///<reference path="/assets/js/libs/qunit.js"/> 
///<reference path="/assets/js/libs/moment.min.js"/> 
///<reference path="/src/utils.js"/>
///<reference path="/src/post.js"/>

module("post", {
    setup: function() {
        this.testUtils = utils(moment);
    }
});

test("PublishDate_FormatsToPublishDateDisplay", function() {
    var testPostData = { publishedDate: "Wed, 29 Oct 2011 23:14:48 +0000" };

    var testPost = post(this.testUtils).init({ postData: testPostData });
    var result = testPost.pubDateDisplay;

    equal(result, "October 29, 2011 6:14pm CDT");
});

test("PublishDate_FormatsToPublishDateMeta", function() {
    var testPostData = { publishedDate: "Wed, 02 Feb 2009 10:11:19 -0700" };

    var testPost = post(this.testUtils).init({ postData: testPostData });
    var result = testPost.pubDateMeta;

    equal(result, "2009-02-02T11:11:19-06:00");
});