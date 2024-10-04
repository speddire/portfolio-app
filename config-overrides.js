const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    querystring: require.resolve("querystring-es3"),
    buffer: require.resolve("buffer/")
  };
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};
