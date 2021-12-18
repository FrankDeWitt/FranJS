<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import FjHero from '@/components/FjHero/FjHero.vue'
import FjLegend from '@/components/FjLegend/FjLegend.vue'

import careerData from '@/data/career.json'
import workData from '@/data/work.json'

export default defineComponent({
  name: 'FjWrapper',
  components: {
    FjHero,
    FjLegend,
  },
  setup() {
    const { t, locale } = useI18n()
    return {
      t,
      locale,
      careerData: careerData,
      workData: workData,
    }
  },
})
</script>

<template>
  <div class="h-screen bg-gray-200 dark:bg-gray-800">
    <FjHero />
    <div class="bg-gray-200 wrapper dark:bg-gray-800">
      <h2
        class="pt-12 pb-6 text-3xl font-bold text-center text-black dark:text-white"
      >
        {{ t('Education') }}
      </h2>
      <FjLegend :data-elements="careerData[0][locale]" />
    </div>
    <div class="bg-gray-200 wrapper dark:bg-gray-800">
      <h2
        class="pt-12 pb-6 text-3xl font-bold text-center text-black dark:text-white"
      >
        {{ t('Work History') }}
      </h2>
      <FjLegend :data-elements="workData[0][locale]" />
    </div>
  </div>
</template>

<style lang="postcss">
.wrapper {
  margin-left: var(--aside-width);
  margin-right: var(--aside-anchors-width);
}
</style>
