'use strict';

const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');

const jsonLoaderRule = {
  test: /\.(json)/,
  type: 'javascript/auto',
  exclude: path.resolve(__dirname, './node_modules/'),
  use: [{
    loader: 'file-loader'
  }],
};

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  );
  //  config = injectBabelPlugin(['file-loader', env, jsonLoaderRule], config);


  return config;
};
