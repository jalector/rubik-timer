
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config');

const ENV = process.env.IONIC_ENV;

useDefaultConfig[ ENV ].resolve.alias = {
  "@app/env": path.resolve('./src/config/env/environment' + (ENV === 'prod' ? '' : '.dev' ) + '.ts')
};

console.log("############ Proceso corriendo para ["+ process.env.IONIC_ENV +"] ######################");

module.exports = function () {
  return useDefaultConfig;
};