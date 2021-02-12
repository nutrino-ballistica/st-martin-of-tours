<template>
  <section class="dialogue">
    <div class="close">
      <router-link to="/" class="button">
        X
      </router-link>
    </div>

    <h2 class="title"><slot name="title" /></h2>

    <slot />
  </section>
</template>

<style lang="less">
.dialogue {
  display: inline-block;
  position: absolute;
  top: 3rem;
  left: 25%;
  background-color: #1e2020;
  width: 40rem;
  padding: 2rem;

  .close {
    text-align: right;

    .button {
      text-decoration: none;
      color: white;
    }
  }

  .title {
    font-family: serif;
    text-decoration: underline;
    text-align: left;
  }
}
</style>
