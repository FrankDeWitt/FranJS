<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import LocalChanger from '@/components/LocalChanger.vue';

import FjButton from '@/components/FjButton/FjButton.vue';
import FjProfileCard from '@/components/FjProfileCard/FjProfileCard.vue';
import FjProfileData from '@/components/FjProfileData/FjProfileData.vue';
import FjProgressBar from '@/components/FjProgressBar/FjProgressBar.vue';

import FjIconBase from '@/components/FjIconBase/FjIconBase.vue'
import IconDice from '@/components/Icons/IconDice.vue'
import IconDownload from '@/components/Icons/IconDownload.vue'

export default defineComponent({
  name: 'FjAside',
  components: {
    LocalChanger,
    FjButton,
    FjIconBase,
    IconDice,
    IconDownload,
    FjProfileCard,
    FjProfileData,
    FjProgressBar
  },
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
})
</script>

<template>
  <div class="fixed top-0 flex flex-col justify-start h-screen p-10 overflow-y-scroll bg-white shadow dark:bg-gray-600 aside">
    <LocalChanger/>
    <FjProfileCard/>
    <hr class="my-6 border-0 border-t border-base-400">
    <div class="space-y-2">
      <FjProfileData>
        <template #title>
          <div class="px-2 py-1 bg-primary dark:bg-complementary">
            {{ t('Age') }}:
          </div>
        </template>
        <template #content>
          <div class="dark:text-white">
            31
          </div>
        </template>
      </FjProfileData>
      <FjProfileData>
        <template #title>
          <div class="p-2 bg-primary dark:bg-complementary">
            {{ t('Residence') }}:
          </div>
        </template>
        <template #content>
          <div class="dark:text-white">
            {{ t('Sp') }}
          </div>
        </template>
      </FjProfileData>
      <FjProfileData>
        <template #title>
          <div class="p-2 bg-primary dark:bg-complementary">
            {{ t('Freelance') }}:
          </div>
        </template>
        <template #content>
          <div class="text-success">
            {{ t('Available') }}
          </div>
        </template>
      </FjProfileData>
      <FjProfileData>
        <template #title>
          <div class="p-2 bg-primary dark:bg-complementary">
            {{ t('Address') }}:
          </div>
        </template>
        <template #content>
          <div class="dark:text-white">
            {{ t('Barcelona') }}
          </div>
        </template>
      </FjProfileData>
    </div>
    <hr class="my-6 border-0 border-t border-base-400 dark:border-white">
    <h4 class="text-base font-medium dark:text-white">
      {{ t('Languages') }}
    </h4>
    <div class="mt-6 space-y-4 text-base-700 dark:text-white">
      <FjProgressBar
        label="Spanish"
        :progressValue="100"
      />
      <FjProgressBar
        label="English"
        :progressValue="80"
      />
    </div>
    <hr class="my-6 border-0 border-t border-base-400 dark:border-white">
    <h4 class="text-base font-medium dark:text-white">
      {{ t('Skills') }}
    </h4>
    <div class="mt-6 space-y-4 text-base-700 dark:text-white">
      <FjProgressBar
        label="Vue"
        :progressValue="80"
      />
      <FjProgressBar
        label="JavaScript"
        :progressValue="70"
      />
      <FjProgressBar
        label="CSS"
        :progressValue="90"
      />
    </div>
    <hr class="my-6 border-0 border-t border-base-400 dark:border-white">
    <h4 class="text-base font-medium dark:text-white">
      {{ t('Extra Skills') }}
    </h4>
    <div class="mt-6 space-y-2">
      <span class="flex items-center w-full text-primary dark:text-complementary">
        <FjIconBase width="18" height="18" icon-name="dice">
          <IconDice/>
        </FjIconBase>
        <p class="ml-2 text-base-700 dark:text-white">Tailwind, PostCss</p>
      </span>
      <span class="flex items-center w-full text-primary dark:text-complementary">
        <FjIconBase width="18" height="18" icon-name="dice">
          <IconDice/>
        </FjIconBase>
        <p class="ml-2 text-base-700 dark:text-white">GIT Knowledge</p>
      </span>
      <span class="flex items-center w-full text-primary dark:text-complementary">
        <FjIconBase width="18" height="18" icon-name="dice">
          <IconDice/>
        </FjIconBase>
        <p class="ml-2 text-base-700 dark:text-white">HTTP & REST</p>
      </span>
      <span class="flex items-center w-full text-primary dark:text-complementary">
        <FjIconBase width="18" height="18" icon-name="dice">
          <IconDice/>
        </FjIconBase>
        <p class="ml-2 text-base-700 dark:text-white">Unit testing</p>
      </span>
    </div>
    <hr class="my-6 border-0 border-t border-base-400 dark:border-white">
    <FjButton 
      class="text-center"
      color="secondary"
    >
    <div class="flex justify-evenly">
      {{ t('Download CV')}}
      <FjIconBase width="18" height="18" icon-name="download">
        <IconDownload/>
      </FjIconBase>
    </div>
    </FjButton>
  </div>
</template>

<style lang="postcss">
:root {
  --aside-width: theme('width.80');
}

.aside {
  width: var(--aside-width);
}
</style>
