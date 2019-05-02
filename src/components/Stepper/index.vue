<template>
  <Step
    class="wizard"
    :title="steps[currentStep]"
    :value="currentStepValue"
    @set-value="next">
    <p>How would you rate this area of your life?</p>
  </Step>
</template>

<script>
import Step from '@/components/Stepper/Step.vue';
import { event } from '@/utils';

export default {
  name: 'Stepper',

  components: {
    Step,
  },

  data() {
    return {
      currentStep: 0,
    };
  },

  props: {
    wheelData: {
      type: Object,
      default() {
        return {};
      },
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

    currentStepValue() {
      return this.wheelData[this.steps[this.currentStep]];
    },
  },

  methods: {
    next(val) {
      event.$emit('set-wheel', {
        [this.steps[this.currentStep]]: val,
      });

      this.currentStep += 1;

      if (this.currentStep > this.steps.length - 1) {
        this.$router.push({ name: 'result' });
      }
    },
  },
};
</script>

<style lang="scss">
.wizard {
  margin-top: 2rem;
}
</style>
