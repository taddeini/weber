///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("postSummaryView", {
    setup: function () {
        var templateTag = "<script id='postSummaryTemplate' type='text/template'><header><%=title%></header></script>";
        $("#qunit-fixture").append(templateTag);
    }
});

test("Creating a view initializes the view's template.", function () {
    this.spy(Weber, "tmpl");
    var view = new Weber.PostSummaryView();

    ok(typeof view.template !== "undefined");
    ok(Weber.tmpl.calledOnce);
    strictEqual(Weber.tmpl.getCall(0).args[0], "#postSummaryTemplate");
});

test("Creating a view should set the 'tagName' to 'li'", function () {
    var view = new Weber.PostSummaryView();
    strictEqual(view.tagName, 'li');
});

test("Rendering a view should hydrate the template with the model.", function () {
    var post = new Weber.Post({ title: "foo" });
    var view = new Weber.PostSummaryView({ model: post });

    var result = view.render();

    ok(typeof result !== "undefinded");
    strictEqual(result.$el.html(), "<header>foo</header>");
});