///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("feedView", {
    setup: function () {
        var mainHtml = "<div id='feed'></div>";
        $("#qunit-fixture").append(mainHtml);
    }
});

test("Creating a view should set the 'el' selector.", function () {
    var view = new Weber.FeedView();
    strictEqual(view.$el.selector, '#feed');
});

test("Rendering the view should create and render summary view for each post", function () {
    var feed = { };
    var view = new Weber.FeedView({ collection: feed });

    //TODO
});
