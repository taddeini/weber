var Weber = (function (moment, $, _) {
    return {
        utils: utils(moment, $),
        tmpl: function (id) {
            return _.template($(id).html());
        }
    };
}(moment, jQuery, _));
