const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { shareAll } = require('@angular-architects/module-federation/webpack');
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.app.json'),
);

module.exports = {
  output: {
    uniqueName: "hostApp",
    publicPath: "auto",
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      
      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        ...sharedMappings.getDescriptors()
      }
    }),
    sharedMappings.getPlugin(),
  ]
};
