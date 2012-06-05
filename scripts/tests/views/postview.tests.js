///<reference path="/scripts/libs/qunit.js"/> 

module("postview", {
    setup: function () {
        $("body").append("<div id='postTemplate'></div>");
    },
    teardown: function () {
        $("#postTemplate").remove();
    }
});

test("Creating a post view initializes the view's template.", function () {
});

test("A post view should set the 'el' to the expected value.", function () {
    var view = new Weber.PostView();
    strictEqual(view.el, '#main');
});