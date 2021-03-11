<template>
  <IconBase view-box="0 0 20 20" icon-name="info" v-bind="$props">
    <svg
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
      />
    </svg>
  </IconBase>
</template>

<script>
import IconMixin from '@/mixins/IconMixin.vue'

export default {
  name: 'IconInfo',
  mixins: [IconMixin],
}
</script>
