const { resolve } = require('path');

module.exports = function nuxtClipboardModule(moduleOptions = {}) {
  const { clipboard = {} } = this.options;
  const options = Object.assign({}, moduleOptions, clipboard);

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, '../templates/vue-clipboard.js'),
    ssr: false,
    fileName: 'clipboard.js',
    options,
  });
};

module.exports.meta = require('../package.json');
