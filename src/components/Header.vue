<template>
  <header>
    <router-link to="/">
      <img src="@/assets/logo.png" />
    </router-link>

    <hr />

    <section class="title">
      <h1 class="main">St. Martin of Tours Gnostic Church of Asheville</h1>
      <h2 class="sub">Part of the Apostolic Church of the Golden Rosy Cross</h2>
    </section>

    <hr />

    <Navigation />
  </header>
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Navigation
  }
})
export default class Header extends Vue {}
</script>

<style lang="less">
.title {
  .main {
  }

  .sub {
  }
}
</style>
