const path = require("path");
const { override, addWebpackAlias, babelInclude } = require("customize-cra");
const { addReactRefresh } = require("customize-cra-react-refresh");

module.exports = override(
  addWebpackAlias({
    web: path.join(__dirname, "/src"),
    "react-native": path.join(__dirname, "/react-native.js"),
  }),

  babelInclude([
    path.resolve("src"), // make sure you link your own source
  ]),

  // The newer version of react-hot-loader
  addReactRefresh()
);
