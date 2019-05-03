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

    scale: {
      type: Object,
      default() {
        return {
          min: 0,
          max: 10,
          stepSize: 1,
        };
      },
    },
  },

  computed: {
    getOptions() {
      return {
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
          ticks: this.scale,
        },
        ...this.options,
      };
    },
  },

  mounted() {
    this.renderChart(this.chartData, this.getOptions);
  },
};
</script>
