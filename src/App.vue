<template>
  <div>
    <div class="background" />

    <div class="app">
      <Header />

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #1e2226;
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: brightness(35%);
  background: url("./assets/background.jpg") top center/cover no-repeat;
}

.app {
  width: 80%;
  margin: auto auto;
}
</style>
