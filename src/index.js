import './phoenix.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Phoenix Visualizer',
    screens: [],
    spaces: [],
    windows: [],
  },
  template: `
    <div>
      {{ message }}
      <button @click="init">Init</button>
      <button @click="log">Log</button>

      <div>Screens count : {{ screens.length }}</div>
      <div>Spaces count : {{ spaces.length }}</div>
      <div>Windows count : {{ windows.length }}</div>
    </div>
  `,
  methods: {
    init() {
      PhoenixWeb.init()
      this.updateData()
    },
    log() {
      PhoenixWeb.log()
    },
    updateData() {
      this.screens = PhoenixWeb.screens
      this.spaces = PhoenixWeb.spaces
      this.windows = PhoenixWeb.windows
    },
  },
})
