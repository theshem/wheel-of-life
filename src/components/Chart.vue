<script>
import { PolarArea, mixins } from 'vue-chartjs';
import 'chartjs-plugin-labels';

const { reactiveProp } = mixins;

export default {
  name: 'Chart',

  extends: PolarArea,

  mixins: [reactiveProp],

  props: {
    chartData: {
      type: Object,
      required: true,
    },

    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, {
      legend: {
        display: false,
      },
      layout: {
        padding: 16,
      },
      plugins: {
        labels: {
          render: 'label',
          fontSize: 16,
          fontStyle: 'bold',
          position: 'border',
          fontColor: '#fff',
        },
      },
      scale: {
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1,
        },
      },
      ...this.options,
    });
  },
};
</script>
