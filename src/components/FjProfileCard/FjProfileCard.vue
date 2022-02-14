<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import FjIconBase from '@/components/FjIconBase/FjIconBase.vue'
import IconGit from '@/components/Icons/IconGit.vue'
import IconTwitter from '@/components/Icons/IconTwitter.vue'
import IconInstagram from '@/components/Icons/IconInstagram.vue'

export default defineComponent({
  name: 'FjProfileCard',
  components: {
    FjIconBase,
    IconGit,
    IconTwitter,
    IconInstagram,
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
  <div class="flex flex-col items-center">
    <div class="relative mb-6 w-36 h-36">
      <img
        class="inline object-cover rounded-full bg-primary dark:bg-complementary"
        src="@/assets/avatar.png"
        alt="Profile image"
      />
      <span
        class="absolute w-4 h-4 border-white rounded-full bottom-1 bg-success right-6"
      />
    </div>
    <h4 class="mb-2 text-lg font-medium">Fran J Salvador</h4>
    <p class="mb-3 text-sm font-normal text-gray-400">
      {{ t('Font-End Developer') }}
    </p>
    <div class="flex justify-around space-x-4">
      <span
        class="flex items-center content-center self-center justify-center rounded-full cursor-pointer w-7 h-7 bg-primary hover:bg-secondary-300 hover:border-secondary-300 dark:bg-complementary dark:border-complementary dark:hover:bg-complementary-800 dark:hover:border-complementary-800"
      >
        <FjIconBase width="18" height="18" icon-name="github">
          <IconGit />
        </FjIconBase>
      </span>
      <span
        class="flex items-center content-center self-center justify-center rounded-full cursor-pointer w-7 h-7 bg-primary hover:bg-secondary-300 hover:border-secondary-300 dark:bg-complementary dark:border-complementary dark:hover:bg-complementary-800 dark:hover:border-complementary-800"
      >
        <FjIconBase width="18" height="18" icon-name="write">
          <IconTwitter />
        </FjIconBase>
      </span>
      <span
        class="flex items-center content-center self-center justify-center rounded-full cursor-pointer w-7 h-7 bg-primary hover:bg-secondary-300 hover:border-secondary-300 dark:bg-complementary dark:border-complementary dark:hover:bg-complementary-800 dark:hover:border-complementary-800"
      >
        <FjIconBase width="18" height="18" icon-name="write">
          <IconInstagram />
        </FjIconBase>
      </span>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
