<template>
  <nav class="links">
    <router-link to="/" class="links__item">Home</router-link>
    <router-link to="/assessment" class="links__item">Start</router-link>
    <a href="https://github.com/theshem/wheel-of-life" class="links__item" target="_blank" rel="noopener noreferrer">Github</a>
  </nav>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
  .links {
    display: flex;

    &__item {
      padding: 0 .5rem;
      display: inline-block;
      vertical-align: top;
    }
  }
</style>
