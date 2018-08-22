/**
 * orm框架
 * 1. DBMS支持
 *   Mysql&MariaDB
 *   PostgreSQL
 *   Amazon redshift
 *   SQLite
 * 2. 特性
 *   创建模型，同步、删除、批量创建、获取、查找、移除、计数、聚合函数
 *   定义自定义验证器
 *   模型实例的缓存和一致性
 *   插件：MySQL FTS，Pagination、Transaction、Timestamp、Migration
 */

var orm = require("orm");
var settings = require('../../../config/settings');

var availableTopics = {
    query: true,
    update: true
  }; // 支持的操作

var connections = {};

function setup(topic, cb) {
    var connection;
    if (topic == 'update') {
        connection = orm.connect(settings.updateDatabase);
    } else {
        connection = orm.connect(settings.queryDatabase);
    }
    connection.settings.set('instance.returnAllErrors', true);
    connections[topic] = connection;

    require('./config')(orm, connection);
    return cb(connection);
}

module.exports = {
    getConnection: function (topic, cb) {
        if (!availableTopics[topic]) {
            cb(undefined); // 不支持的操作返回空
        } else {
            var connection = connections[topic];
            if (!connection) {
                setup(topic, cb);
            } else {
                cb(connection);
            }
        }
    },
    close: function () {
      for (var i in connections) {
        connections[i].close();
      }
    }
}