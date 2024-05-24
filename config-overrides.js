// module.exports = function override(config, env) {
//   config.resolve.fallback = {
//     http: require.resolve("stream-http"),
//     https: require.resolve("https-browserify"),
//     os: require.resolve("os-browserify/browser"),
//   };

//   return config;

//   //   "scripts": {
//   //   "start": "react-scripts start",
//   //   "build": "react-scripts build",
//   //   "test": "react-scripts test",
//   //   "eject": "react-scripts eject"
//   // },
// };

// const { override, addWebpackModuleRule } = require("customize-cra");

// module.exports = override(
//   addWebpackModuleRule({
//     enforce: "pre",
//     test: /\.js$/,
//     loader: "source-map-loader",
//     exclude: [
//       /node_modules/, // exclude all node_modules
//       /src\/assets\/css\/dashboard-free.css/, // exclude specific file
//       /node_modules\/@react-aria\/ssr\/dist\/SSRProvider.mjs/, // exclude specific file
//     ],
//   })
// );

// const {
//   override,
//   addBabelPreset,
//   addDecoratorsLegacy,
// } = require("customize-cra");

// module.exports = override(
//   addBabelPreset("@babel/preset-env"),
//   addDecoratorsLegacy()
// );

const { override, addBabelPlugin } = require("customize-cra");

module.exports = override(
  addBabelPlugin(["@babel/plugin-transform-class-properties", { loose: true }]),
  addBabelPlugin(["@babel/plugin-transform-private-methods", { loose: true }]),
  addBabelPlugin([
    "@babel/plugin-transform-private-property-in-object",
    { loose: true },
  ])
);
