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
  private backgrounds: string[] = [
    'christos',
    'invocation',
    'judgement',
    'maria',
    'martin',
    'misericordia',
    'nativity',
    'parsifal',
    'pater-noster',
    'pelican'
  ]

  private random = 'martin'

  created (): void {
    const length: number = this.backgrounds.length - 1
    const randomIndex: number = Math.round(Math.random() * length)
    this.random = this.backgrounds[randomIndex]
  }

  public get backgroundClasses (): string[] {
    const extras = this.away ? ['shadowed'] : []
    return ['background', this.random, ...extras]
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
  background: #000 top center/cover no-repeat;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  &.shadowed {
    filter: brightness(20%);
  }

  &.christos {
    background-image: url("./assets/backgrounds/christos.jpg");
  }

  &.invocation {
    background-image: url("./assets/backgrounds/invocation.jpg");
  }

  &.judgement {
    background-image: url("./assets/backgrounds/judgement.jpg");
  }

  &.maria {
    background-image: url("./assets/backgrounds/maria.jpg");
  }

  &.martin {
    background-image: url("./assets/backgrounds/martin.jpg");
  }

  &.misericordia {
    background-image: url("./assets/backgrounds/misericordia.jpg");
  }

  &.nativity {
    background-image: url("./assets/backgrounds/nativity.jpg");
  }

  &.parsifal {
    background-image: url("./assets/backgrounds/parsifal.jpg");
  }

  &.pater-noster {
    background-image: url("./assets/backgrounds/pater-noster.jpg");
  }

  &.pelican {
    background-image: url("./assets/backgrounds/pelican.jpg");
  }
}

.app {
  width: 80%;
  margin: auto auto;
}
</style>
