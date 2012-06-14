///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("postDetailView", {
    setup: function () {
        var templateTag = "<script id='postDetailTemplate' type='text/template'><header><%=title%></header></script>",
            postEl = "<section id='detail'></section>";

        $("#qunit-fixture").append(templateTag);
        $("#qunit-fixture").append(postEl);
    }
});

test("Creating a view without a model should throw an error", function () {
    try {
        var view = new Weber.PostDetailView();
        ok(false, "An error should have been thrown.");
    }
    catch (error) {
        ok(true);
        strictEqual(error.message, "A model is required.");
    }
});

test("Creating a view initializes the view's template.", function () {
    var feed = new Weber.Feed({ entries: [{ id: 1, title: "foo" }] });
    this.spy(Weber, "tmpl");
    var view = new Weber.PostDetailView({ model: feed });
    
    ok(typeof view.template !== "undefined");
    ok(Weber.tmpl.calledOnce);
    strictEqual(Weber.tmpl.getCall(0).args[0], "#postDetailTemplate");
});

test("Creating a view should set the 'el' to 'main'", function () {
    var feed = new Weber.Feed({ entries: [{ id: 1, title: "foo" }] });
    var view = new Weber.PostDetailView({ model: feed });
    strictEqual(view.$el.selector, '#detail');
});

test("Creating a view should bind render to the post change event", function () {
    var feed = new Weber.Feed({ entries: [{ id: 1, title: "foo" }] });
    this.spy(feed.posts, "on");
    var view = new Weber.PostDetailView({ model: feed });
    ok(feed.posts.on.calledOnce);
});

test("Rendering a view should hydrate the template with the selected model.", function () {
    var feed = new Weber.Feed({ entries: [{ id: 1, title: "foo", isSelected: true }] });
    var view = new Weber.PostDetailView({ model: feed }),
        result = view.render();

    ok(typeof result !== "undefinded");
    strictEqual(result.$el.html(), "<header>foo</header>");
});