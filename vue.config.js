const path = require('path');
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
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
  }
}
