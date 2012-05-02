///<reference path="/assets/js/libs/qunit.js"/> 
///<reference path="/assets/js/libs/moment.min.js"/> 
///<reference path="/src/utils.js"/>

module("sanbox", {
    setup: function() {
        this.testUtils = utils(moment);
    }
});

test("ValidDate_FormatsAsCorrectly", function() {
    var validDate = "Wed, 29 Oct 2011 23:14:48 +0000";
    var result = this.testUtils.dates.formatDate(
        {
            date: validDate,
            format: "MMM DD, YYYY h:mm:ss"
        });

    equal(result, "Oct 29, 2011 6:14:48");
});

test("InvalidDate_FormatsToNA", function() {
    var invalidDate = "Wed, 29 Oct 2009 abc -0700";
    var result = this.testUtils.dates.formatDate({ date: invalidDate });
    equal(result, "n/a");
});