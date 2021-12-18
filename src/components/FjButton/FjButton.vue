<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FjButton',
  props: {
    mode: {
      type: String,
      default: 'filled',
      validator: (val: string) =>
        ['filled', 'outlined', 'transparent'].includes(val),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) => ['big', 'medium', 'small'].includes(val),
    },
    color: {
      type: String,
      default: 'primary',
      validator: (val: string) =>
        ['primary', 'secondary', 'complementary', 'highlight'].includes(val),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Boolean, String, Number],
      default: '',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event: Event) => {
      emit('click', event, props.value)
    }

    return {
      handleClick,
    }
  },
})
</script>

<template>
  <div
    type="button"
    :class="['fj-button relative', mode, size, color]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span>
      <slot />
    </span>
  </div>
</template>

<style lang="postcss" scoped>
.fj-button {
  @apply border border-solid bg-transparent inline-block rounded-lg transition-all duration-200 font-medium cursor-pointer;
  &.filled {
    &.primary,
    &.complementary,
    &.highlight {
      @apply text-white;
    }
    &.secondary {
      @apply text-black;
    }
    &.primary,
    &.secondary {
      @apply bg-primary border-primary dark:bg-complementary dark:border-complementary;
      &:hover {
        @apply bg-secondary-300 border-secondary-300 dark:bg-complementary dark:border-complementary;
      }
      &:disabled {
        @apply bg-primary-300 border-primary-300;
      }
    }
    &.complementary {
      @apply bg-complementary border-complementary;
      &:hover {
        @apply bg-complementary-800 border-complementary-800;
      }
      &:disabled {
        @apply bg-complementary-300 border-complementary-300;
      }
    }
    &.white {
      @apply bg-white text-primary border-white;
      &:hover {
        @apply text-secondary-300;
      }
      &:disabled {
        @apply bg-primary-300 border-primary-300 text-white;
      }
    }
    &.highlight {
      @apply bg-highlight border-highlight;
      &:hover {
        @apply bg-highlight-800;
      }
      &:disabled {
        @apply bg-highlight-300 border-highlight-300;
      }
    }
  }
  &.outlined {
    &.primary {
      @apply border-primary text-primary;
      &:hover {
        @apply border-primary bg-primary text-white;
      }
    }
    &.secondary {
      @apply border-primary text-primary;
      &:hover {
        @apply border-primary bg-primary text-black;
      }
    }
    &.complementary {
      @apply border-complementary text-complementary;
      &:hover {
        @apply border-complementary-800 bg-complementary-800 text-white;
      }
      &:disabled {
        @apply bg-transparent text-base-400 border-base-400;
      }
    }
    &.white {
      @apply text-white border-white;
      &:hover {
        @apply bg-primary-700 text-white border-primary-700;
      }
      &:disabled {
        @apply text-white;
      }
    }
    &.highlight {
      @apply text-highlight border-highlight;
      &:hover {
        @apply bg-highlight text-white border-highlight;
      }
      &:disabled {
        @apply text-highlight-300 border-highlight-300 bg-transparent;
      }
    }
    &.primary,
    &.white {
      &:disabled {
        @apply text-primary-300 border-primary-300 bg-transparent;
      }
    }
  }
  &.transparent {
    @apply border-transparent;
    &.primary {
      @apply text-primary;
      &:disabled {
        @apply text-primary-300;
      }
    }
    &.complementary {
      @apply text-complementary;
      &:disabled {
        @apply text-base-400;
      }
    }
    &:hover {
      @apply bg-base-200;
    }
    &:disabled {
      @apply bg-white;
    }
    &.highlight {
      @apply text-highlight;
      &:disabled {
        @apply text-base-400;
      }
    }
    &:hover {
      @apply bg-base-200;
    }
    &:disabled {
      @apply bg-white;
    }
  }
  &.big,
  &.medium {
    @apply px-4;
  }
  &.big {
    @apply py-3 text-lg;
  }
  &.medium {
    @apply py-2 text-base;
  }
  &.small {
    @apply py-2 px-3 text-sm;
  }
  &:disabled {
    cursor: not-allowed;
  }
}
</style>
