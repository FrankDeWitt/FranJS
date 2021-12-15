<script lang="ts">
import { defineComponent } from 'vue'

import FjAside from './components/FjAside/FjAside.vue';
import FjProfileCard from './components/FjProfileCard/FjProfileCard.vue';

export default defineComponent({
  components: {     
    FjAside,
    FjProfileCard,
  },
    setup() {
        return {
        };
    },
})
</script>

<template>
  <FjAside>
    <FjProfileCard/>
  </FjAside>
</template>

<style>

</style>
