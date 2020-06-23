<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="init">Init</button>
    <button @click="log">Log</button>
  </div>
</template>

<script>
import { PhoenixWeb } from '@/phoenix-web-adapter'
import * as Phoenix from "@/phoenix"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    init() {
      PhoenixWeb.init()
    },
    log() {
      PhoenixWeb.log()
    },
    applyBsp() {
      // applyBsp(z
console.log(Phoenix)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
