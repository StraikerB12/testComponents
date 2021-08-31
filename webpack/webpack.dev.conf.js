const webpack = require('webpack');
const path = require('path');
const publicPath = 'kholobok-biz';

module.exports = () => ({
  output: {
    path: path.resolve(__dirname, `../${publicPath}`),
    filename: '[name].js',
    publicPath: `/${publicPath}/`,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
