<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import FjSwitchMode from '@/components/FjSwitchMode/FjSwitchMode.vue'

export default defineComponent({
  name: 'FjAsideAnchors',
  components: {
    LocaleSwitcher,
    FjSwitchMode,
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
    class="fixed top-0 right-0 flex flex-col justify-start h-screen p-2 bg-white shadow dark:bg-gray-600 aside-anchors"
  >
    <LocaleSwitcher />
    <FjSwitchMode />
  </div>
</template>

<style lang="postcss">
:root {
  --aside-anchors-width: theme('width.24');
}

.aside-anchors {
  width: var(--aside-anchors-width);
  right: 0;
}
</style>
