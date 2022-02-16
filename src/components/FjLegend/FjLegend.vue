<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'FjLegend',
  props: {
    dataElements: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
})
</script>

<template>
  <div
    v-if="dataElements"
    class="flex flex-col p-6 bg-gray-200 dark:bg-gray-800 legend"
  >
    <div
      v-for="element in dataElements"
      :key="element.id"
      class="flex flex-col bg-white px-9 dark:bg-gray-600 first:pt-10 last:pb-10 legend-child"
    >
      <div class="flex">
        <div class="w-1/3">
          <h4 class="text-lg font-medium dark:text-white">
            {{ element.place }}
          </h4>
          <div class="flex items-center justify-between mt-2">
            <span class="text-sm font-normal text-base-700 dark:text-gray-400">
              {{ element.position }}
            </span>
            <span
              class="p-0 px-2 font-normal text-white text-xxs bg-primary dark:bg-complementary dark:text-black"
              >{{ element.start_date }} - {{ element.end_date }}</span
            >
          </div>
        </div>
        <div class="w-2/3 ml-32">
          <h4 class="text-lg font-medium dark:text-white">
            {{ element.place }}{{ element.grade }}
          </h4>
          <p class="mt-2 text-sm font-normal text-base-700 dark:text-gray-400">
            {{ element.description }}
          </p>
        </div>
      </div>
      <hr class="my-6 border-0 border-t border-base-400 dark:border-white" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.legend-child:last-child hr {
  @apply hidden;
}
</style>
