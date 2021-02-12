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
  top: 0;
  left: 0;
  background-color: #1e2020;
  max-width: 40rem;

  /* phone: portrait (default) */
  margin: 1rem;
  padding: 1rem;

  /* phone: landscape */
  @media (min-width: 23rem) {
    margin: 3rem;
    padding: 3rem;
  }

  /* tablet: portrait */
  @media (min-width: 49rem) {
    width: 40rem;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0);
  }

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
