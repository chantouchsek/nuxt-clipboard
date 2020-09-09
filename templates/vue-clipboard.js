import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

export default () => {
  const [pluginOptions] = [<%= serialize(options) %>]
  const { autoSetContainer = false } = pluginOptions

  VueClipboard.config.autoSetContainer = autoSetContainer
  Vue.use(VueClipboard)
}
