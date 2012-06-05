var Weber = (function (moment, $, _) {
    if (!Weber) {
        Weber = {
            utils: utils(moment, $),
            tmpl: function (id) {
                return _.template($(id).html());
            }
        };
    }
    return Weber;
}(moment, jQuery, _));
