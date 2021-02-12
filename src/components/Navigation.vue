<template>
  <nav class="navigation">
    <ul>
      <li class="view"><router-link to="/church">The ACGRC</router-link></li>
      <li class="view"><router-link to="/worship">Worship</router-link></li>
      <li class="view"><router-link to="/mission">Mission</router-link></li>
      <li class="view"><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default class Navigation extends Vue {}
</script>

<style lang="less">
.navigation {
  padding: 30px;

  ul {
    padding-left: 0;
    list-style-type: none;
  }

  .view {
    border: 1px solid white;

    /* phone: landscape */
    @media (min-width: 27rem) {
      display: inline-block;
      padding: 4px 16px;
    }

    a {
      font-family: serif;
      font-variant: all-small-caps;
      font-weight: bold;
      color: white;
      text-decoration: none;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
