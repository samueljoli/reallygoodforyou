'use strict';

const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');

const jsonLoaderRule = {
  type: 'javascript/auto',
  test: /\.(json)/,
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
  config = injectBabelPlugin('file-loader', config);

  config.module.rules.push(jsonLoaderRule);

  console.log(require('util').inspect(config, {depth:null}));

  return config;
};
