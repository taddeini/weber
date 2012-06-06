///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("postview", {
    setup: function () {
        var template = "<script id='postTemplate' type='text/template'><div><%=title%></div></script>";
        var mainHtml = "<div id='main'></div>";
        $("#qunit-fixture").append(template);
        $("#qunit-fixture").append(mainHtml);
    }
});

test("Creating a view initializes the view's template.", function () {
    this.spy(Weber, "tmpl");
    var view = new Weber.PostView();
    
    ok(typeof view.template !== "undefined");
    ok(Weber.tmpl.calledOnce);
    strictEqual(Weber.tmpl.getCall(0).args[0], "#postTemplate");
});

test("Creating a view should set the 'el' selector.", function () {
    var view = new Weber.PostView();
    strictEqual(view.$el.selector, '#main');
});

test("Rendering a view should hydrate the template with the model.", function () {
    var model = new Weber.Post({ title: "foo" });
    var view = new Weber.PostView({ model: model });

    var result = view.render();

    ok(typeof result !== "undefinded");
    strictEqual(result.$el.html(), "<div>foo</div>");
});