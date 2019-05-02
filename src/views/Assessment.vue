<template>
  <article class="assessment">
    <h1>The Wheel of Life Assessment</h1>
    <p>The assessment can usually be filled out in less than a minute.</p>

    <Stepper :wheel-data="wheelData" />
  </article>
</template>

<script>
import Stepper from '@/components/Stepper/index.vue';

export default {
  name: 'Assessment',

  props: {
    wheelData: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  components: {
    Stepper,
  },
};
</script>
