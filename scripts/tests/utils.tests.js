///<reference path="/scripts/libs/qunit.js" /> 
///<reference path="/scripts/libs/sinon-1.3.4.js" />

module("utils", {
    setup: function() {
        this.testUtils = utils(moment);
    }
});

test("A valid date with a format string should format correctly.", function() {
    var validDate = "Wed, 29 Oct 2011 23:14:48 +0000",
        result = this.testUtils.dates.formatDate(
        {
            date: validDate,
            format: "MMM DD, YYYY h:mm:ss"
        });

    strictEqual(result, "Oct 29, 2011 6:14:48");
});

test("A valid date with no format string should default to ISO-8601 formatting.", function () {
    var validDate = "Wed, 29 Oct 2011 23:14:48 +0000",
        result = this.testUtils.dates.formatDate({ date: validDate });
    strictEqual(result, "2011-10-29T18:14:48-05:00");
});

test("An invalid date should format to 'n/a'.", function() {
    var invalidDate = "Wed, 29 Oct 2009 abc -0700",
        result = this.testUtils.dates.formatDate({ date: invalidDate });
    strictEqual(result, "n/a");
});

test("An undefined date should format to 'n/a'.", function () {
    var result = this.testUtils.dates.formatDate();
    strictEqual(result, "n/a");
});

test("A null date should format to 'n/a'.", function () {
    var result = this.testUtils.dates.formatDate({ date: null });
    strictEqual(result, "n/a");
});
