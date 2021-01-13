<template>
  <header class="header">
    <router-link to="/">
      <img class="logo" src="@/assets/logo.png" />
    </router-link>

    <hr />

    <section class="title">
      <h3 class="main">St. Martin of Tours Gnostic Church of Asheville</h3>
      <h3 class="sub">Part of the Apostolic Church of the Golden Rosy Cross</h3>
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
.logo {
  width: 100px;
}

.title {
  .main {
    font-family: serif;
    color: #ff7d7f;
  }

  .sub {
    color: white;
    font-family: serif;
    font-variant: all-small-caps;
  }
}
</style>
