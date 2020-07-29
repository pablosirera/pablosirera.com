<template>
  <div>
    <h2 class="text-center text-xl pb-3 font-semibold">
      {{ $t('home.lastVideos') }}
    </h2>
    <a
      v-for="(video, index) in videos"
      :key="index"
      class="flex justify-start mb-4 cursor-pointer p-2 rounded hover:bg-green-main-700-40"
      @click="showVideo(video.id)"
    >
      <img
        :src="`https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg`"
        :alt="video.title"
        loading="lazy"
        class="w-40 h-24 rounded"
      />
      <h4 class="pl-3">{{ video.title }}</h4>
    </a>

    <div v-if="shouldShowVideo" class="lightbox" @click="hideVideo()">
      <div class="lightbox-container">
        <div class="lightbox-content">
          <button class="lightbox-close" @click="hideVideo()">
            Close | ✕
          </button>
          <div class="video-container">
            <iframe
              id="youtube"
              width="960"
              height="540"
              :src="`https://www.youtube.com/embed/${videoId}?showinfo=0`"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubeVideos',
  data: () => ({
    shouldShowVideo: false,
    videoId: null,
    // TODO: maybe translate this
    // TODO: integrate with youtube api
    videos: [
      {
        title: 'Añadir modo oscuro a una aplicación VUE | 🔴 Live Coding #12',
        id: 'FcxlrEwrJkw',
      },
      {
        title:
          'Mejorando nuestra aplicación con Vue y FIREBASE | 🔴 Live Coding #11',
        id: 'McZZrYNBhTc',
      },
      {
        title: 'Crear un blog con Nuxt y Nuxt Content + SEO tips | 🔴 Live',
        id: '1W_3c7O9E8k',
      },
    ],
  }),
  methods: {
    showVideo(videoId) {
      this.videoId = videoId
      this.shouldShowVideo = true
    },
    hideVideo(div, videoId) {
      this.shouldShowVideo = false
    },
  },
}
</script>

<style lang="scss" scoped>
.lightbox {
  background-color: rgba(0, 0, 0, 0.8);
  @apply z-10 bottom-0 right-0 left-0 top-0 fixed overflow-scroll;

  &-container {
    max-width: 960px;
    margin: 185px auto;
    padding: 0 3%;

    @apply z-20 block h-auto relative;

    @media screen and (max-width: 768px) {
      margin-top: 50%;
    }
  }

  &-content {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);
  }

  &-close {
    top: -22px;
    right: 3%;

    @apply block text-white border-none uppercase bg-transparent absolute font-light text-xs;
  }
}

.video-container {
  padding-bottom: 56.25%;
  padding-top: 30px;

  @apply relative overflow-hidden h-0;
}

.video-container iframe,
.video-container object,
.video-container embed {
  @apply absolute h-full w-full left-0 top-0;
}
</style>
