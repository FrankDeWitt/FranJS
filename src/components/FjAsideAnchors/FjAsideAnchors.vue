<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'


export default defineComponent({
  name: 'FjAsideAnchors',
  components: {
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
  <div class="fixed top-0 right-0 flex flex-col justify-start h-screen p-2 shadow bg-primary aside-anchors">

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
