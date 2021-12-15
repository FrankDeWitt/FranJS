<template>
  <div class="fixed top-0 flex justify-center h-screen p-10 bg-white shadow aside">
    <slot/>
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
