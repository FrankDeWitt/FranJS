<script lang="ts">
import { defineComponent } from 'vue'
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
  <div class="fixed top-0 flex flex-col justify-start h-screen p-10 overflow-y-scroll bg-white shadow aside">
    <LocalChanger/>
    <FjProfileCard/>
    <hr class="my-6 border-0 border-t border-base-400">
    <div class="space-y-2">
      <FjProfileData>
        <template #title>
          <div class="px-2 py-1 bg-primary">
            {{ t('Age') }}:
          </div>
        </template>
        <template #content>
          <div>
            31
          </div>
        </template>
      </FjProfileData>
      <FjProfileData>
        <template #title>
          <div class="p-2 bg-primary">
            {{ t('Residence') }}:
          </div>
        </template>
        <template #content>
          <div>
            {{ t('Sp') }}
          </div>
        </template>
      </FjProfileData>
      <FjProfileData>
        <template #title>
          <div class="p-2 bg-primary">
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
          <div class="p-2 bg-primary">
            {{ t('Address') }}:
          </div>
        </template>
        <template #content>
          <div>
            {{ t('Barcelona') }}
          </div>
        </template>
      </FjProfileData>
    </div>
    <hr class="my-6 border-0 border-t border-base-400">
    <h4 class="text-base font-medium">
      {{ t('Languages') }}
    </h4>
    <div class="mt-6 space-y-4 text-base-700">
      <FjProgressBar
        label="Spanish"
        :progressValue="100"
      />
      <FjProgressBar
        label="English"
        :progressValue="80"
      />
    </div>
    <hr class="my-6 border-0 border-t border-base-400">
    <h4 class="text-base font-medium">
      {{ t('Skills') }}
    </h4>
    <div class="mt-6 space-y-4 text-base-700">
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
    <hr class="my-6 border-0 border-t border-base-400">
    <h4 class="text-base font-medium">
      {{ t('Extra Skills') }}
    </h4>
    <div class="mt-6 space-y-2">
      <span class="flex items-center w-full text-primary">
        <FjIconBase width="18" height="18" icon-name="dice">
          <IconDice/>
        </FjIconBase>
        <p class="ml-2 text-base-700">Tailwind, PostCss</p>
      </span>
      <span class="flex items-center w-full text-primary">
        <FjIconBase width="18" height="18" icon-name="dice">
          <IconDice/>
        </FjIconBase>
        <p class="ml-2 text-base-700">GIT Knowledge</p>
      </span>
      <span class="flex items-center w-full text-primary">
        <FjIconBase width="18" height="18" icon-name="dice">
          <IconDice/>
        </FjIconBase>
        <p class="ml-2 text-base-700">HTTP & REST</p>
      </span>
      <span class="flex items-center w-full text-primary">
        <FjIconBase width="18" height="18" icon-name="dice">
          <IconDice/>
        </FjIconBase>
        <p class="ml-2 text-base-700">Unit testing</p>
      </span>
    </div>
    <hr class="my-6 border-0 border-t border-base-400">
    <FjButton 
      class="text-center"
      color="secondary"
    >
    <div class="flex justify-evenly">
      {{ t('Download CV')}}
      <FjIconBase width="18" height="18" icon-name="dice">
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
