module.exports = {
  env: 'development', // 部署环境，可选值：development，production
  port: 3001, // node.js监听端口，如果环境变量有配置NODE_PORT，该选项无效
  dataSyncInterval: 5000, // 数据库配置同步频率，毫秒
  dataSaveInterval: 5000, // 数据统计存储到数据库频率，毫秒
  socketTimeout: 30000, //服务端socket超时时间（毫秒）
  apiHost: 'localhost', // 系统对外的域名，主要用作外部回调链接
  sendCallback: false, // 是否发送”下载“点击回调，测试环境不要发送
  creative: {
    maxViewTimes: 1000, // 同一个广告在同一个设备上每天的最多展现次数
    maxContinuouslyViewTimes: 2, // 同一个广告在同一设备上最多连续展现次数，大于等于1
    closeExpire: 600000, // 关闭某个广告后，多长时间内不展现，毫秒
    downloadExpire: 1800000, // 某广告发生下载后，多长时间不占线，毫秒，需要比uniqueTimeout大
    downloadedExpire: 86400000, // 某个广告发生下载完成后，多长时间不展现，毫秒
    eventTimeout: 86400000, // 展现->点击->下载->下载完成，各个事件之间可以间隔的最大时间，毫秒
    uniqueTimeout: 14400000, // 排重统计计算周期，需要小于等于eventTimeout，毫秒
    userInfoTimeout: 7776000000
  },
  evaluate: {
    defaultRate: 0.05, // 默认转化率
    downloadTopRate: 0.1, // 发生过转化的用户的置顶转化率
    minRate: 0.0005, // 兜底转化率
    factor: 3, // 计算广告效果时，使用总体效果和个人效果一起计算，这个参数控制总体效果的权重
    minCost: 8000, // 最低CPA价格，10000表示1元
    recentListMax: 30000, // 广告/游戏 通用最大保留条数
    recentCreativeExpire: 15724800000, // 广告近期数据过期时间，需要比{转化事件步骤}*eventTimeout大
    recentCreativeListMax: 10000, // 广告近期数据最大保留条数
    recentCreativeListMin: 1000, // 广告近期数据最少条数，大于等于该条数才能作为计算的依据
    recentProjectExpire: 15724800000, // 游戏近期数据过期时间，需要比{转化事件步骤}*eventTimeout大
    recentProjectListMax: 10000, // 游戏近期数据最大保留条数
    recentProjectListMin: 1000, // 游戏近期数据最少条数，大于等于该条数才能作为计算的依据
    recentOrgExpire: 15724800000, // 公司近期数据过期时间，需要比{转化事件步骤}*eventTimeout大
    recentOrgListMax: 10000, // 公司近期数据最大保留条数
    recentOrgListMin: 1000, // 公司近期数据最少条数，大于等于该条数才能作为计算的依据
    userRecentExpire: 604800000 // 个人近期数据过期时间，这个数字一定比{转化事件步骤}*eventTimeout大
  },
  queryDatabase: { // 查询时用的数据库配置
    protocol: 'mysql',
    query: {
      pool: true, // 是否使用连接池，尽量使用连接池，可以断线重连
      debug: true // 是否开启debug
    },
    host: '127.0.0.1', // 数据库域名
    database: 'tapad_api', //数据库
    user: 'root', // 数据库用户名
    password: '', // 数据库密码
    connectionLimit: 2 //连接池连接数
  },
  updateDatabase: { // 更新时用的数据库配置
    protocol: 'mysql',
    query: {
      pool: true, // 是否使用连接池，尽量使用连接池，可以断线重连
      debug: true // 是否开启debug
    },
    host: '127.0.0.1', // 数据库域名
    database: 'tapad_api', //数据库
    user: 'root', // 数据库用户名
    password: '', // 数据库密码
    connectionLimit: 1 //连接池连接数
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    password: undefined,
    prefix: 'tapadapi'
  },
  userInfo: {
    host: '127.0.0.1',
    port: 6379,
    password: undefined,
    prefix: 'userInfo'
  },
  tapadAlsRedis: {
    host: '127.0.0.1',
    port: 6379,
    password: undefined,
    prefix: ''
  },
  log: {
    type: 'console', // 日志记录方式（file，console），当该项为console时，path和pattern选项无效
    path: __dirname + '/../storage/log', // 日志文件目录
    pattern: '-yyyy-MM-dd' // 日志文件日期格式
  },
  logForCollect: { // 用作收集为目的的日志
    tapadActive: {
      pathname: __dirname + '/../storage/log-for-collect/tapad-active/tapad-active.log',
      pattern: '-yyyy-MM-dd'
    },
    tapadUserTag: {
      pathname: __dirname + '/../storage/log-for-collect/tapad-usertag/tapad-usertag.log',
      pattern: '-yyyy-MM-dd'
    },
    tapadBidInfo: {
      path: __dirname + '/../storage/log-for-collect/tapad-bidinfo/tapad-bidinfo.log',
      pattern: '-yyyy-MM-dd'
    },
    tapadTrack: {
      pathname: __dirname + '/../storage/log-for-collect/tapad-track/tapad-track.log',
      pattern: '-yyyy-MM-dd'
    },
    tapadABTest: {
      pathname: __dirname + '/../storage/log-for-collect/tapad-abtest/tapad-abtest.log',
      pattern: '-yyyy-MM-dd'
    },
    tapadFeature: {
      pathname: __dirname + '/../storage/log-for-collect/tapad-feature/tapad-feature.log',
      pattern: '-yyyy-MM-dd-hh'
    },
    tapadDownload: {
      pathname: __dirname + '/../storage/log-for-collect/tapad-download/tapad-download.log',
      pattern: '-yyyy-MM-dd-hh'
    },
  },
  distributedSys: {
    isWorker: true,
    amount: 4,  // 集群总数
    no: 0  // 所在分片，0 ～ (amount - 1)
  }
};