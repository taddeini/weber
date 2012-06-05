///<reference path="/scripts/libs/qunit.js"/> 
///<reference path="/scripts/libs/moment.min.js"/> 
///<reference path="/scripts/utils.js"/>

module("utils", {
    setup: function() {
        this.testUtils = utils(moment);
    }
});

test("A valid date should format correctly.", function() {
    var validDate = "Wed, 29 Oct 2011 23:14:48 +0000";
    var result = this.testUtils.dates.formatDate(
        {
            date: validDate,
            format: "MMM DD, YYYY h:mm:ss"
        });

    strictEqual(result, "Oct 29, 2011 6:14:48");
});

test("And invalid date formats to 'n/a'.", function() {
    var invalidDate = "Wed, 29 Oct 2009 abc -0700";
    var result = this.testUtils.dates.formatDate({ date: invalidDate });
    strictEqual(result, "n/a");
});
