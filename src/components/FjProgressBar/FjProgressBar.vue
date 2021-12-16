<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'FjProgressBar',
  props: {
    label: {
      type: String,
      default: ''
    },
    progressValue: {
      type: Number,
      default: 0
    },
  },
  setup () {
    const { t } = useI18n();

    return {
      t
    }
  }
})
</script>

<template>
  <div>
    <div class="flex justify-between">
      <p>{{ t(label)}}</p>
      <p>{{ progressValue }}%</p>
    </div>
    <div class="relative h-2 mt-2">
      <div class="absolute w-full h-full border rounded-full border-primary"></div>
      <div 
        class="absolute h-full rounded-full bg-primary" 
        :style="{ width: progressValue + '%' }"
      ></div>
    </div>
  </div>
</template>

<style scoped>

</style>