<template>
  <div class="home">
    <h1>The Wheel of Life</h1>
    <p>
      The Wheel of Life is a simple yet powerful tool for visualizing all areas of your life
      at once to see where you most need improvement. It only takes a minute to complete
      and it's totally free!
    </p>

    <router-link :to="{ name: 'assessment' }">Fill out your wheel!</router-link>
  </div>
</template>

<script>
import { event } from '@/utils/event';

export default {
  name: 'Home',

  created() {
    event.$emit('reset-wheel');
  },
};
</script>
