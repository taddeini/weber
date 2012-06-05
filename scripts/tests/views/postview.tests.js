///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("postview", {
    setup: function () {
        $("body").append("<div id='postTemplate'></div>");
    },
    teardown: function () {
        $("#postTemplate").remove();
    }
});

test("Creating a post view initializes the view's template.", function () {
    this.spy(Weber, "tmpl");
    var view = new Weber.PostView();
    
    ok(typeof view.template !== "undefined");
    ok(Weber.tmpl.calledOnce);
    strictEqual(Weber.tmpl.getCall(0).args[0], "#postTemplate");
});

test("Creating a post view should set the 'el' selector.", function () {
    var view = new Weber.PostView();
    strictEqual(view.$el.selector, '#main');
});