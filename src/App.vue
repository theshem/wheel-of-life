<template>
  <div id="app">
    <nav>
      <router-link to="/">Start</router-link>
      <!--/ <router-link to="/result">Result</router-link>-->
    </nav>

    <main>
      <transition
        name="slide-fade"
        mode="out-in">
        <router-view
          class="content"
          :wheel-data="wheelData"
          :steps="steps"
          :chart-data="chartData"
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
import {
  pascalCase,
  color,
  event,
} from '@/utils';

export default {
  name: 'App',

  data() {
    return {
      wheelData: {
        health: 0,
        career: 0,
        love: 0,
        spirituality: 0,
        family: 0,
        money: 0,
        fun: 0,
        friends: 0,
      },
    };
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

  mounted() {
    event.$on('set-wheel', (item) => {
      this.wheelData = {
        ...this.wheelData,
        ...item,
      };
    });
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
</style>
