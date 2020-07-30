<template>
  <div class="menu mr-2">
    <span @click="toggleMenu">
      <MenuIcon class="w-8 h-8 cursor-pointer menu-icon" />
    </span>
    <transition name="slide-fade">
      <div
        v-if="showMenu"
        v-click-outside="toggleMenu"
        class="menu-body bg-primary h-screen w-4/5 absolute top-0 right-0 z-10"
      >
        <span
          class="close flex justify-end text-white p-5 pt-12 text-2xl cursor-pointer"
        >
          <CrossIcon class="w-6 h-6" @click="toggleMenu" />
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
            <ColorModePicker class="p-5" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { NAV_LINKS } from '@/constants/navLinks'
import MenuIcon from '@/assets/icons/menu.svg?inline'

export default {
  name: 'Menu',
  components: {
    MenuIcon,
    CrossIcon: () => import('@/assets/icons/cross.svg?inline'),
  },
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
.menu-icon {
  fill: theme('colors.primary');
}

.menu-content {
  height: calc(100% - 184px);

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
