<script lang="ts">
import { ref, defineComponent } from 'vue'

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
  setup() {
    const theme = ref(true)

    function themeToggleBtn() {
      theme.value = !theme.value
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark')
          localStorage.setItem('color-theme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('color-theme', 'light')
        }
      }
    }

    return {
      theme,
      themeToggleBtn,
    }
  },
})
</script>

<template>
  <span
    :class="[
      'flex items-center content-center self-center justify-center rounded-full cursor-pointer w-7 h-7 border border-gray-500',
      theme ? 'bg-gray-500 text-white' : 'bg-white text-gray-500',
    ]"
    class=""
    @click="themeToggleBtn"
  >
    <FjIconBase width="18" height="18" icon-name="github">
      <IconSun v-if="!theme" />
      <IconMoon v-if="theme" />
    </FjIconBase>
  </span>
</template>

<style lang="postcss" scoped></style>
