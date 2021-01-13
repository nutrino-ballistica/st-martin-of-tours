<template>
  <div>
    <Header />

    <main>
      <router-view />
    </main>
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
  background-color: #1e2226;
  color: white;
}
</style>
