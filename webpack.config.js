const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Window: [path.resolve(path.join(__dirname, 'src/phoenix-web-adapter.js')), "Window"],
      Key: [path.resolve(path.join(__dirname, 'src/phoenix-web-adapter.js')), "Key"],
      Event: [path.resolve(path.join(__dirname, 'src/phoenix-web-adapter.js')), "Event"],
      Phoenix: [path.resolve(path.join(__dirname, 'src/phoenix-web-adapter.js')), "Phoenix"],
      Space: [path.resolve(path.join(__dirname, 'src/phoenix-web-adapter.js')), "Space"],
      Screen: [path.resolve(path.join(__dirname, 'src/phoenix-web-adapter.js')), "Screen"],
      PhoenixWeb: [path.resolve(path.join(__dirname, 'src/phoenix-web-adapter.js')), "PhoenixWeb"],
    }),
  ],
};
