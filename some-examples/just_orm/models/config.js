var models = require('.');

module.exports = function (orm, db) {
  var config = db.define('config', {
    is_stop_creative:{type: 'number', required: true}
  },
  {
    methods: {
      serialize: function () {
        return {
          id: this.id,
          is_stop_creative: this.is_stop_creative
        };
      }
    },
    cache: false
  });
};
