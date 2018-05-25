const webpackConfig = (env) => {
  if (!env) {
    throw new Error('You must pass an --env.env flag into your build');
  }

  if (env.env != 'dev' && env.env != 'prod') {
    throw new Error('--env.env must be set either to dev or prod');
  }

  return require(`./webpack.${env.env}.config.js`);
};

module.exports = webpackConfig;
