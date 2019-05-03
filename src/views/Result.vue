<template>
  <article class="result">
    <h1>Your Wheel of Life</h1>

    <div class="result__chart-wrapper">
      <Chart
        :chart-data="chartData"
        :options="resultOptions"
      />
    </div>

    <Share />
  </article>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Share from '@/components/Share.vue';

export default {
  name: 'Result',

  components: {
    Chart,
    Share,
  },

  props: {
    chartData: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    result() {
      return this.chartData;
    },

    resultOptions() {
      return {
        legend: {
          display: true,
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

  mounted() {
    console.log(this.$route.query);
  },
};
</script>

<style>
  .result__chart-wrapper {
    max-width: 40rem;
    margin-left: auto;
    margin-right: auto;
  }
</style>
