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

test("Creating a view should set the 'el' selector.", function () {
    var view = new Weber.FeedView();
    strictEqual(view.$el.selector, '#feed');
});

test("Rendering of the feed view should contain a summary view for each post", function () {
    var feed = new Weber.Feed({
        entries: [
            { title: "foo" },
            { title: "bar" }
        ]
    });
    var view = new Weber.FeedView({ model: feed });

    var result = view.render();

    ok(typeof result !== "undefinded");
    strictEqual(result.$el.html(), "<li>foo</li><li>bar</li>");
});
