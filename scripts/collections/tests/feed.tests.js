///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/sinon-1.3.4.js"/>

module("feed", {});

test("A new feed with no feed url should throw an exception.", function () {
    try{
        var feed = new Weber.Feed();
        ok(false, "An excpetion should have been thrown.");
    }
    catch(exception) {
        strictEqual(exception.message, "Feed URL was not provided.");
    }
});

test("A new feed should populate the models from the feed Url.", function () {
    var ajax = this.mock(Weber.utils.ajax);
    ajax.expects("getFeed").once();

    var feed = new Weber.Feed("http://foo.bar.com");

    ajax.verify();
});