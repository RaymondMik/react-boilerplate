const path = require('path');

const applicationPaths = {
  outputPath: path.resolve(__dirname, `../dist`),
  entryPath: path.resolve('src'),
}

module.exports = applicationPaths;