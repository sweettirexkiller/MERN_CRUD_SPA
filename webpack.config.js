const buildValidations = require('./config/webpack/build-validations');
const commonConfig = require('./config/webpack/webpack.common');

const webpackMerge = require('webpack-merge');

const addons = (addonsArg) => {
    let addons = [...[addonsArg]].filter(Boolean);
    return addons.map(addonName => require(`./config/webpack/addons`));
};

module.exports = env => {
  if(!env){
      throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./config/webpack/webpack.${env.env}.js`);

  const mergedConfig = webpackMerge(
      commonConfig,
      envConfig,
      ...addons(env.addons)
  );

  return mergedConfig;
};