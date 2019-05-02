<template>
  <section class="step">
    <h2 class="step__title">{{ title }}</h2>
    <slot></slot>

    <ul class="step__values">
      <template v-for="n in 10">
        <li
          :key="n"
          class="step__value">
          <button
            :class="[
              'step__rate-btn',
              { 'step__rate-btn--active': isSelected(n) },
            ]"
            @click="next(n)">
            {{ n }}
          </button>
        </li>
      </template>
    </ul>

    <button
      class="step__skip-btn"
      @click="skip">
      Skip →
    </button>
  </section>
</template>

<script>
export default {
  name: 'Step',

  props: {
    title: {
      type: String,
      required: true,
    },
    value: Number,
  },

  methods: {
    isSelected(n) {
      return n === this.value;
    },

    skip() {
      this.$emit('set-value', 0);
    },

    next(val) {
      this.$emit('set-value', val);
    },
  },
};
</script>

<style lang="scss">
  .step {
    text-align: center;

    &__title {
      text-transform: capitalize;
    }

    &__values {
      padding: 0;
      list-style: none;
    }

    &__value {
      display: inline-block;
    }

    &__rate-btn {
      font-size: 1.5rem;
      cursor: pointer;

      &--active {
        background-color: gold;
      }
    }
  }
</style>
