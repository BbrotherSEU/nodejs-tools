const models = require('./models');
const async = require('async');

var data = {};

function queryYomobApps (db, cb) {
    db.models.config.find({}, function (err, yomobApps) {
        if (err) {
            logger.error(`Get yomobApps error: ${err.stack}`);
            cb();
            return;
        }
        var yomobAppsMap = {};
        yomobApps.forEach((yomobApp) => {
            yomobAppsMap[yomobApp.is_stop_creative] = true;
        });

        data.yomobAppsMap = yomobAppsMap;
        cb();
    });
}

module.exports = {
    run: function (callback) {
        models.getConnection('query', function (db) {
            async.parallel([
                (callback) => {
                    queryYomobApps(db, callback);
                }
            ], (err, result) => {
                callback();
            });
        });
    },
    getData: function () {
        return data;
    }
};