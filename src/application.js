///<reference path="/assets/js/libs/moment.min.js"/>
///<reference path="/assets/js/libs/underscore.min.js"/>
///<reference path="/src/utils.js"/>

application = (function(moment, _) {
    var _modules = { };

    return {
        register: function(moduleId, initializer) {
            _modules[moduleId] = {
                initializer: initializer,
                instance: null
            };
        },
        
        start: function(moduleId) {
            _modules[moduleId].instance =
                _modules[moduleId].initializer(utils(this, moment));
            _modules[moduleId].instance.init();
        },

        startAll: function() {
            _.each(_modules, function(moduleId) {
                if (_modules.hasOwnProperty(moduleId)) {
                    this.start(moduleId);
                }
            });
        }
    };
})(moment, _);
