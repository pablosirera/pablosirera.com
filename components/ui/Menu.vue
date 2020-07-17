<template>
  <div class="menu">
    <span @click="toggleMenu">
      <img
        class="w-8 cursor-pointer"
        src="/images/icons/menu.svg"
        :alt="$t('general.openMenu')"
        loading="lazy"
      />
    </span>
    <transition name="slide-fade">
      <div
        v-if="showMenu"
        class="menu-body bg-primary h-screen w-full absolute top-0 left-0 z-10"
      >
        <span
          class="close flex justify-end text-white p-3 font-bold text-2xl cursor-pointer"
          @click="toggleMenu"
        >
          <img
            class="w-6"
            src="/images/icons/cross.svg"
            :alt="$t('general.closeMenu')"
            loading="lazy"
          />
        </span>
        <div class="menu-content">
          <div class="text-center flex flex-col p-5">
            <a
              v-for="(link, index) in links"
              :key="index"
              class="link font-bold text-2xl text-blue-main-800 rounded p-4 cursor-pointer"
              @click="navigateTo(link.url)"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { NAV_LINKS } from '@/constants/navLinks'

export default {
  name: 'Menu',
  data: () => ({
    showMenu: false,
  }),
  computed: {
    links() {
      return NAV_LINKS
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    navigateTo(url) {
      this.toggleMenu()
      this.$router.push(url)
    },
  },
}
</script>

<style lang="scss" scoped>
$heightClose: 60px;

.close {
  height: $heightClose;
}

.menu-content {
  height: calc(100% - 120px);

  @apply flex justify-center items-center;

  .link:hover {
    background: rgba(0, 0, 0, 0.2);
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
