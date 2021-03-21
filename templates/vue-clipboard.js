import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

export default ({ app }) => {
  const { autoSetContainer = false } = <%= serialize(options) %> || {}

  VueClipboard.config.autoSetContainer = autoSetContainer
  Vue.use(VueClipboard)
}
