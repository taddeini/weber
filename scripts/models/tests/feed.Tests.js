///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("feed", {});

test("Creating a feed with posts entries creates a collection of post models", function () {
    var feed = new Weber.Feed({
        title: "foo",
        entries: [
            { id: 99, title: "foo" },
            { title: "bar" }
        ]
    });

    ok(feed.posts.models);
    strictEqual(feed.get("title"), "foo");
    strictEqual(feed.posts.models.length, 2);
    strictEqual(feed.posts.models[0].get("title"), "foo");
    strictEqual(feed.posts.models[1].get("title"), "bar");
    // Ensure that internal identifiers are created automatically starting at 1, if not provided
    strictEqual(feed.posts.models[0].get("id"), 99);
    strictEqual(feed.posts.models[1].get("id"), 1);
});

test("Creating a feed with no post entries creates an empty post collection", function () {
    var feed = new Weber.Feed();
    ok(feed.posts.models);
    strictEqual(feed.posts.models.length, 0);
});

test("Setting a selected post marks it as current and de-selects other posts.", function () {
    var feed = new Weber.Feed({
        entries: [
            { id: 1, title: "foo", isSelected: false },
            { id: 2, title: "bar", isSelected: true }]
    });

    feed.setSelectedPost(1);

    ok(feed.posts.models[0].isSelected());
    ok(!feed.posts.models[1].isSelected());
});