module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
      webpackProductionSetting(config);
    } else {
      // mutate for development...
      webpackDevelopSetting(config);
    }
  }
};

function webpackProductionSetting(config) {
  config.output.filename = 'js/arnold.js';
}

function webpackDevelopSetting(config) {
  config.output.filename = 'js/arnold.js';
}



