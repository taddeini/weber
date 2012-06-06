///<reference path="/scripts/libs/qunit.js"/> 

module("post", {});

test("A new post with no arguments should set default property values.", function() {
    var post = new Weber.Post();
    strictEqual(post.get("author"), "");
    strictEqual(post.get("byline"), "");
    strictEqual(post.get("title"), "");
    strictEqual(post.get("publishedDate"), null);
    strictEqual(post.get("publishedDateMeta"), "n/a");
    strictEqual(post.get("publishedDateDisplay"), "n/a");
    strictEqual(post.get("content"), "");
});

test("A post with a valid published date should format it for display.", function () {
    var post = new Weber.Post({ publishedDate: "Wed, 9 Oct 2011 23:14:48 +0000" });
    strictEqual(post.get("publishedDateDisplay"), "October 9, 2011 6:14pm");
});

test("A post with a valid publish date should format it for meta data.", function () {
    var post = new Weber.Post({ publishedDate: "Wed, 02 Feb 2009 10:11:19 -0700" });
    strictEqual(post.get("publishedDateMeta"), "2009-02-02T11:11:19-06:00");
});