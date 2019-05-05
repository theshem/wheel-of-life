<template>
  <div id="app">
    <Header />

    <main class="content">
      <div v-if="loading" class="loading">Loading...</div>

      <transition
        v-else
        name="slide-fade"
        mode="out-in">
        <router-view
          :wheel-data="wheelData"
          :steps="steps"
          :chart-data="chartData"
          :scale="scale"
        />
      </transition>
    </main>

    <footer>
      Released under MIT license.
      Made with ♡ by
      <a href="https://github.com/theshem" target="_blank" rel="noreferrer noopener">@theshem</a>.
    </footer>
  </div>
</template>

<script>
import { getChartData } from '@/utils/chart';
import { event } from '@/utils/event';
import { fetchWheelData } from '@/utils/http';
import Header from '@/components/Header.vue';

export default {
  name: 'App',

  components: { Header },

  data() {
    return {
      steps: [],
      wheelData: {},
      scale: {},
      loading: true,
    };
  },

  computed: {
    chartData() {
      const { wheelData, steps } = this;
      return getChartData(wheelData, steps);
    },
  },

  created() {
    fetchWheelData()
      .then(({ steps, scale }) => {
        this.steps = steps;
        this.scale = scale;
        this.resetWheelData(steps);
      })
      .catch(e => console.error(e))
      .finally(() => {
        this.loading = false;
      });
  },

  mounted() {
    event.$on('set-wheel', (item) => {
      this.wheelData = {
        ...this.wheelData,
        ...item,
      };
    });

    event.$on('reset-wheel', () => {
      this.resetWheelData(this.steps);
    });
  },

  methods: {
    resetWheelData(steps) {
      this.wheelData = steps.reduce((acc, step) => ({
        ...acc,
        [step]: 0,
      }), {});
    },
  },
};
</script>

<style lang="scss">
  @import "~normalize.css";

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    display: flex;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex: 1;

    max-width: 60rem;
    padding: 0 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  .content {
    flex: 1;
    padding: 2rem 0;
  }

  nav {
    border-bottom: 1px solid #ddd;

    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  nav,
  footer {
    padding: 1.5rem 0;
  }

  footer {
    border-top: 1px solid #ddd;
  }

  h3 {
    margin: 40px 0 0;
  }

  a {
    color: #42b983;
  }

  a[target="_blank"]::after {
    content: " " url(~@/assets/external.png);
    display: inline-block;
    vertical-align: top;
    margin: -2px 5px;
    text-decoration: none;
  }

  button {
    padding: .5em .75em;
  }

  hr {
    margin: 2rem 0;
    border: 1px solid #ddd;
    border-bottom: 0;
  }

  .slide-fade-leave-active,
  .slide-fade-enter-active {
    transition-duration: .2s;
    transition-property: opacity, transform;

    // improves performance issues on mobile
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;

    will-change: opacity, transform;
  }

  .slide-fade-enter {
    opacity: 0;
    transform: translateX(-20px);
  }

  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }

  .loading {
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
