///<reference path="/Assets/Scripts/Libs/qunit.js"/> 
///<reference path="/Assets/Scripts/Libs/moment.min.js"/> 
///<reference path="/Source/Utils.js"/>
///<reference path="/Source/Post.js"/>

module("Post", {
    setup: function() {
        this.testUtils = Utils(moment);
    }
});

test("PublishDate_FormatsToPublishDateDisplay", function() {
    var testPostData = { publishedDate: "Wed, 9 Oct 2011 23:14:48 +0000" };

    var testPost = Post(this.testUtils).init({ postData: testPostData });
    var result = testPost.pubDateDisplay;

    equal(result, "October 9, 2011 6:14pm CDT");
});

test("PublishDate_FormatsToPublishDateMeta", function() {
    var testPostData = { publishedDate: "Wed, 02 Feb 2009 10:11:19 -0700" };

    var testPost = Post(this.testUtils).init({ postData: testPostData });
    var result = testPost.pubDateMeta;

    equal(result, "2009-02-02T11:11:19-06:00");
});