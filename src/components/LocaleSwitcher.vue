<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'LocaleSwitcher',
  data() {
    const { t } = useI18n()
    return {
      t,
      langs: useI18n().availableLocales,
    }
  },
})
</script>

<template>
  <div class="flex justify-center">
    <div class="mb-3">
      <select
        v-model="$i18n.locale"
        class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 dark:text-white bg-white dark:bg-gray-600 bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:dark:border-complementary focus:outline-none"
        :aria-label="$i18n.locale"
      >
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ t(lang) }}
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
