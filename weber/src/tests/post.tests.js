///<reference path="/assets/js/libs/qunit.js"/> 
///<reference path="/src/post.js"/>

//TODO: Would be nice for the jQuery dependency not to be here
$(function() {
    
    test("Post_WithRawFeedData_FormatsPublishDateDisplay", function() {
        var raw = { publishedDate: "Wed, 29 Oct 2011 23:14:48 +0000" };
        
        var testPost = new post(raw);
        var result = testPost.pubDateDisplay();
        
        equal(result, "October 29, 2011 6:14pm CDT");
    });

    test("Post_WithRawFeedData_FormatsPublishDateMeta", function() {
        var raw = { publishedDate: "Wed, 02 Feb 2009 10:11:19 -0700" };
        
        var testPost = new post(raw);
        var result = testPost.pubDateMeta();
        
        equal(result, "2009-02-02T11:11:19-06:00");
    });
    
});