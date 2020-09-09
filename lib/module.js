const path = require('path');

module.exports = function nuxtClipboardModule(moduleOptions = {}) {
  const { clipboard = {} } = this.options;
  const options = {
    ...clipboard,
    ...moduleOptions,
  };

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, './templates/vue-clipboard.js'),
    ssr: false,
    fileName: 'clipboard.js',
    options,
  });
};

module.exports.meta = require('../package.json');
