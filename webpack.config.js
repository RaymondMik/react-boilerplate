const path = require('path');

module.exports = (env) => {
  console.log(env);
  if (!env) {
    throw new Error('You must pass an --env.env flag into your build')
  }

  if (env.env != 'dev' && env.env != 'prod') {
    throw new Error('--env.env must be set either to dev or prod')
  }

  const webpackConfig = require(`./webpack_setup/webpack.${env.env}.config.js`);
  return webpackConfig;
}