///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("postDetailView", {
    setup: function () {
        var templateTag = "<script id='postDetailTemplate' type='text/template'><header><%=title%></header></script>",
            elTag = "<section id='detail'></section>"
        $("#qunit-fixture").append(templateTag);
        $("#qunit-fixture").append(elTag);
    }
});

test("Creating a view initializes the view's template.", function () {
    this.spy(Weber, "tmpl");
    var view = new Weber.PostDetailView();
    
    ok(typeof view.template !== "undefined");
    ok(Weber.tmpl.calledOnce);
    strictEqual(Weber.tmpl.getCall(0).args[0], "#postDetailTemplate");
});

test("Creating a view should set the 'el' to 'main'", function () {
    var view = new Weber.PostDetailView();
    strictEqual(view.$el.selector, '#detail');
});

test("Rendering a view should hydrate the template with the model.", function () {
    var post = new Weber.Post({ id: 1, title: "foo" }),
        view = new Weber.PostDetailView({ model: post }),
        result = view.render();

    ok(typeof result !== "undefinded");
    strictEqual(result.$el.html(), "<header>foo</header>");
});