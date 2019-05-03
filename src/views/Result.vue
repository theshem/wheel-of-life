<template>
  <article class="result">
    <h1>Your Wheel of Life</h1>

    <div class="result__chart-wrapper">
      <Chart
        :chart-data="result"
        :scale="scale"
        :options="resultOptions"
      />
    </div>

    <Share />
  </article>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Share from '@/components/Share.vue';
import { getChartData } from '@/utils/chart';

export default {
  name: 'Result',

  components: {
    Chart,
    Share,
  },

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

    scale: {
      type: Object,
      required: true,
    },
  },

  computed: {
    result() {
      const { query = {} } = this.$route;

      if (this.isValidResult(query)) {
        return getChartData(query, this.steps);
      }

      return this.chartData;
    },

    resultOptions() {
      return {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            padding: 18,
          },
        },

        plugins: {
          labels: {
            render({ label, value }) {
              return `${label}\n${value}`;
            },
            fontSize: 20,
            fontStyle: 'normal',
            position: 'outside',
            fontColor: '#000',
            border: 1,
          },
        },
      };
    },
  },

  methods: {
    isValidResult(data) {
      return this.steps.every(step => Reflect
        .has(data, step)
        && Number(data[step]) >= this.scale.min
        && Number(data[step]) <= this.scale.max);
    },
  },
};
</script>

<style>
  .result__chart-wrapper {
    max-width: 39rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>
