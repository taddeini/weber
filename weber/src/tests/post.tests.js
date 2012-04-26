///<reference path="/assets/js/libs/qunit.js"/> 
///<reference path="/src/post.js"/>

//TODO: Would be nice for the jQuery dependency not to be here
$(function() {
    
    test("NewPost_WithRawFeedData_FormatsPublishDisplayDate", function() {
        var raw = { publishedDate: "Wed, 29 Oct 2011 14:14:48 +0000" };
        
        var testPost = new post(raw);
        var result = testPost.publishedDateDisplay();
        
        equal(result, "October 29, 2011 9:14pm CDT");
    });
    
});