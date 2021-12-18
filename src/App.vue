<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import FjAside from './components/FjAside/FjAside.vue';
import FjWrapper from './components/FjWrapper/FjWrapper.vue';
import FjAsideAnchors from './components/FjAsideAnchors/FjAsideAnchors.vue';

export default defineComponent({
  components: {
    FjAside,
    FjWrapper,
    FjAsideAnchors,
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
  <FjWrapper />
  <FjAside />
  <FjAsideAnchors />
</template>

<style>

</style>
