<template>
  <article class="assessment">
    <h1>The Wheel of Life Assessment</h1>
    <p>The assessment can usually be filled out in less than a minute.</p>

    <Stepper :wheel-data="wheelData" :steps="steps" />

    <hr>

    <section class="preview">
      <h2 class="preview__title">Preview</h2>
      <Chart :chart-data="chartData" />
    </section>
  </article>
</template>

<script>
import Stepper from '@/components/Stepper/index.vue';
import Chart from '@/components/Chart.vue';

import { pascalCase, color } from '@/utils';

export default {
  name: 'Assessment',

  props: {
    wheelData: {
      type: Object,
      required: true,
    },
  },

  computed: {
    steps() {
      return [
        'health',
        'career',
        'love',
        'spirituality',
        'family',
        'money',
        'fun',
        'friends',
      ];
    },

    chartData() {
      const { wheelData } = this;

      const labels = this.steps.map(step => pascalCase(step));
      const data = this.steps.map(step => wheelData[step]);

      return {
        datasets: [{
          data,
          backgroundColor: color(this.steps.length),
        }],
        labels,
      };
    },
  },

  components: {
    Chart,
    Stepper,
  },
};
</script>

<style lang="scss">
  .preview {
    text-align: center;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 30rem;

    &__title {
      margin-bottom: 0;
    }
  }
</style>
