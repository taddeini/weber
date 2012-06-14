///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("post", {});

test("A new post with no arguments should set default property values.", function() {
    var post = new Weber.Post({ id: 1 });
    strictEqual(post.get("author"), "");
    strictEqual(post.get("byline"), "");
    strictEqual(post.get("title"), "");
    strictEqual(post.get("publishedDate"), null);
    strictEqual(post.get("publishedDateMeta"), "n/a");
    strictEqual(post.get("publishedDateDisplay"), "n/a");
    strictEqual(post.get("content"), "");
    strictEqual(post.get("contentSnippet"), "");
    strictEqual(post.get("isSelected"), false);
});

test("A new post without an id should throw an error.", function () {
    try {
        var post = new Weber.Post();
        ok(false, "An error should have been thrown.");
    }
    catch (error) {
        ok(true);
        strictEqual(error.message, "A post id is required.");
    }
});

test("A new post with an invalid id should throw an error.", function () {
    try {
        var post = new Weber.Post({ id: 0 });
        ok(false, "An error should have been thrown.");
    }
    catch (error) {
        ok(true);
        strictEqual(error.message, "A post id is required.");
    }
});

test("A new post should set the id property to the value of the postId argument.", function () {
    var post = new Weber.Post({ id: 5 });
    strictEqual(post.get("id"), 5);
});

test("A post with a valid published date should format it for display.", function () {
    var post = new Weber.Post({ id: 1, publishedDate: "Wed, 9 Oct 2011 23:14:48 +0000" });
    strictEqual(post.get("publishedDateDisplay"), "October 9, 2011 6:14pm");
});

test("A post with a valid publish date should format it for meta data.", function () {
    var post = new Weber.Post({ id: 1, publishedDate: "Wed, 02 Feb 2009 10:11:19 -0700" });
    strictEqual(post.get("publishedDateMeta"), "2009-02-02T11:11:19-06:00");
});

test("Setting selected state on the model updates the property.", function () {
    var post = new Weber.Post({ id: 1, isSelected: false });
    post.setSelected(true);
    strictEqual(post.get("isSelected"), true);
});