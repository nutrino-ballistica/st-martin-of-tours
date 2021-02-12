<template>
  <div @keydown.esc="goHome">
    <div :class="backgroundClasses" />

    <div class="app">
      <Header v-show="home" />

      <main>
        <Dialogue v-show="away">
          <template #title>
            {{ title }}
          </template>

          <router-view />
        </Dialogue>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header.vue'
import Dialogue from '@/components/Dialogue.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Header,
    Dialogue
  }
})
export default class App extends Vue {
  public get backgroundClasses (): string[] {
    const extras = this.away ? ['shadowed'] : []
    return ['background', ...extras]
  }

  public get home (): boolean {
    return this.isHome
  }

  private get isHome (): boolean {
    return this.$route.fullPath === '/'
  }

  public get away (): boolean {
    return !this.isHome
  }

  public get title (): string | null | undefined {
    return this.$route.name
  }

  public goHome (): void {
    this.$router.push('/')
  }
}
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

  &.shadowed {
    filter: brightness(20%);
  }
}

.app {
  width: 80%;
  margin: auto auto;
}
</style>
