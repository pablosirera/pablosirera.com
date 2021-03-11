<template>
  <transition name="fade">
    <div
      class="border-t-4 rounded-b px-4 py-3 shadow-md fixed top-0"
      :class="theme"
      role="alert"
    >
      <div class="flex">
        <div v-if="hasIcon && isSuccess" class="py-1">
          <IconInfo class="fill-current h-6 w-6 text-teal-500 mr-4" />
        </div>
        <div v-if="isSuccess" class="text-blue-main-700">
          <p class="font-bold">Gracias por tu mensaje.</p>
          <p class="text-sm">Recibirás contestación lo antes posible.</p>
        </div>
        <div v-if="isError" class="text-blue-main-700">
          <p class="font-bold">Ha habido un error.</p>
          <p class="text-sm">Vuelve a intentarlo más tarde.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IconInfo from '@/components/icons/IconInfo.vue'

export default {
  name: 'BaseAlert',
  components: { IconInfo },
  props: {
    hasIcon: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'success',
      validate: (value) => ['success', 'error'].validate(value),
    },
  },
  computed: {
    isSuccess() {
      return this.theme === 'success'
    },
    isError() {
      return this.theme === 'error'
    },
  },
}
</script>

<style lang="scss" scoped>
.success {
  @apply border-primary bg-teal-100;
}

.error {
  @apply border-red-700 bg-red-300;
}
</style>
