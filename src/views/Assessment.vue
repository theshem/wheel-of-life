<template>
  <article class="assessment">
    <h1>The Wheel of Life Assessment</h1>
    <p>The assessment can usually be filled out in less than a minute.</p>

    <Stepper
      :wheel-data="wheelData"
      :steps="steps"
      @show-result="showResult" />

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

export default {
  name: 'Assessment',

  props: {
    wheelData: {
      type: Object,
      required: true,
    },

    steps: {
      type: Array,
      required: true,
    },

    chartData: {
      type: Object,
      required: true,
    },
  },

  components: {
    Chart,
    Stepper,
  },

  methods: {
    showResult() {
      this.$router.push({
        name: 'result',
        query: this.wheelData,
      });
    },
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
