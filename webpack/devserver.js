const pathResolve = require('path').resolve;
const url = require('url');
const publicPath = '/kholobok-biz/';

module.exports = () => ({
  devServer: {
    host: 'localhost',
    disableHostCheck: true,
    port: 8050,
    open: true,
    historyApiFallback: {
      index: url.parse(publicPath).pathname,
    },
    contentBase: pathResolve('./src/assets'),
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
});
