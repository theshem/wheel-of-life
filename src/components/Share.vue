<template>
  <section class="share">
    <h2 class="share__title">WIP: Share The Result</h2>
    <ul class="share__list">
      <li class="share__item">Save as PNG</li>
      <li class="share__item">Copy URL</li>
      <li class="share__item">Share to Twitter</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Share',
};
</script>

<style lang="scss">
  .share {
    /* temporarily disabled */
    color: darkgray;
    user-select: none;

    &__list {
      list-style: none;
      padding: 0;
      margin-left: -.5rem;
      margin-right: -.5rem;
    }

    &__item {
      display: inline-block;
      margin: 0 .5rem;
    }
  }
</style>
