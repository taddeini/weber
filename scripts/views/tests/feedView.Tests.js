///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("feedView", {
    setup: function () {
        var templateTag = "<script id='postSummaryTemplate' type='text/template'><%=title%></script>";
        var feedEl = "<div id='feed'></div>";
        $("#qunit-fixture").append(templateTag);
        $("#qunit-fixture").append(feedEl);
    }
});

test("Creating a view without a model should throw an error", function () {
    try {
        var view = new Weber.FeedView();
        ok(false, "An error should have been thrown.");
    }
    catch (error) {
        ok(true);
        strictEqual(error.message, "A model is required.");
    }
});

test("Creating a view should set the 'el' selector.", function () {
    var view = new Weber.FeedView({ model: new Weber.Feed() });
    strictEqual(view.$el.selector, '#feed');
});

test("Creating a view should bind render to the post collection change event", function () {
    var feed = new Weber.Feed({
        entries: [{ title: "foo" }, { title: "bar" }]
    });

    this.spy(feed.posts, "on");
    var view = new Weber.FeedView({ model: feed });

    ok(feed.posts.on.calledOnce);
});

test("Rendering of the feed view should contain a summary view for each post", function () {
    var feed = new Weber.Feed({
        entries: [{ title: "foo" }, { title: "bar" }]
    });
    var view = new Weber.FeedView({ model: feed });

    var result = view.render();

    ok(typeof result !== "undefinded");
    strictEqual(result.$el.html(), "<li>foo</li><li>bar</li>");
});

