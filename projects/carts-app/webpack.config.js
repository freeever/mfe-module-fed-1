const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'carts',
  filename: "remoteEntry.js",

  exposes: {
    './Module': './projects/carts-app/src/app/carts/carts.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }

});
