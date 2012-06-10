///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("feed", {});

test("Creating a feed with a 'posts' argument creates a collection of post models", function () {
    var feed = new Weber.Feed({
        title: "foo",
        entries: [
            { title: "foo" },
            { title: "bar" }
        ]
    });

    ok(feed.posts.models);
    strictEqual(feed.get("title"), "foo");
    strictEqual(feed.posts.models.length, 2);
    strictEqual(feed.posts.models[0].get("title"), "foo");
    strictEqual(feed.posts.models[1].get("title"), "bar");
});

test("Creating a feed with no 'posts' argument creates an empty collection of posts", function () {
    var feed = new Weber.Feed();
    ok(feed.posts.models);
    strictEqual(feed.posts.models.length, 0);
});