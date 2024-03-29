﻿///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("feedView", {
    setup: function () {
        var templateTag = "<script id='postSummaryTemplate' type='text/template'><li><%=title%></li></script>",
            feedEl = "<div id='feed'></div>";
            feed = new Weber.Feed({
                entries: [{ id: 1, title: "foo" }, { id: 2, title: "bar" }]
            });
            
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
    this.spy(feed.posts, "on");
    var view = new Weber.FeedView({ model: feed });
    ok(feed.posts.on.calledOnce);
});

test("Rendering of the feed view should contain a summary view for each post", function () {
    var view = new Weber.FeedView({ model: feed }),
        result = view.render();

    ok(typeof result !== "undefinded");
    strictEqual(result.$el.html(), "<li>foo</li><li>bar</li>");
});

test("Selecting a post calls the feed model setSeleted with the selected id.", function () {
    feed = new Weber.Feed({
        entries: [
            { id: 99, title: "foo", isSelected: false },
            { id: 100, title: "bar", isSelected: true }]
    });

    this.spy(feed, "setSelectedPost");
    var view = new Weber.FeedView({ model: feed }),
        postMarkup = "<div id='mockPost' data-id='99' />";

    $("#qunit-fixture").append(postMarkup);

    view.select({ currentTarget: '#mockPost' });

    ok(feed.setSelectedPost.calledOnce);
    strictEqual(feed.setSelectedPost.getCall(0).args[0], 99);
});
