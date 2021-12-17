<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import FjHero from '@/components/FjHero/FjHero.vue';

export default defineComponent({
  name: 'FjWrapper',
  components: {
    FjHero,
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
  <FjHero/>
</template>

<style lang="postcss">
.wrapper {
  margin-left: var(--aside-width);
  margin-right: var(--aside-anchors-width);
}
</style>
