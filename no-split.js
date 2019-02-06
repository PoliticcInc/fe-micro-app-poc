const rewire = require('rewire');
const webpack = require('webpack');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

// Consolidate chunk files instead
// config.optimization.splitChunks = {
//     name:'[name]',
//   cacheGroups: {
//       filename:'[name].js',
//     default: false,
//   },
// };
config.optimization.splitChunks ={
    
}
// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;

// JS
config.plugins= [
    // new webpack.optimize.LimitChunkCountPlugin({
    // //   maxChunks: 1,
    // }),
  ]
// config.output.filename = 'static/js/[name].js';
// config.output.name = '[name]';
// CSS. "5" is MiniCssPlugin
// config.plugins[5].options.filename = 'static/css/[name].css';
