import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

const { autoSetContainer = false } = <%= serialize(options) %> || {}

VueClipboard.config.autoSetContainer = autoSetContainer
Vue.use(VueClipboard)
