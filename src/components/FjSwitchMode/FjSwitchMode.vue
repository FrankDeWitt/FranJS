<script lang="ts">
import { reactive, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import FjIconBase from '@/components/FjIconBase/FjIconBase.vue'
import IconSun from '@/components/Icons/IconSun.vue'
import IconMoon from '@/components/Icons/IconMoon.vue'

export default defineComponent({
  name: 'FjSwitchMode',
  components: {
    FjIconBase,
    IconSun,
    IconMoon,
  },  
  setup () {
    const { t } = useI18n();

    function switchMode() {
      console.log(localStorage.theme);
      localStorage.theme = localStorage.theme === 'light' ? 'dark' : 'light';
      console.log(localStorage.theme);
    }
    return {
      t,
      switchMode
    }
  }
})
</script>

<template>
  <span 
    class="flex items-center content-center self-center justify-center rounded-full cursor-pointer w-7 h-7 bg-primary"
    @click="switchMode"
  >
    <FjIconBase width="18" height="18" icon-name="github">
      <IconSun/>
    </FjIconBase>
  </span>
</template>

<style scoped>

</style>