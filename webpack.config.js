var path = require("path");
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./frontend/data_scrapers.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // {test: /\.less$/, loader: "style!css!less"},
      { test: /\.json$/, loader: 'json-loader' }
    ],
  },
  plugins: [
    // other plugins that you need
    new webpack.NormalModuleReplacementPlugin(/^\.\/package$/, function(result) {
        if(/cheerio/.test(result.context)) {
            result.request = "./package.json"
        }
    }),
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("development")
    //   }
    //   // 'global': {}
    // })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['', ".js", ".jsx" ]
  },
  // target: 'node'
};
