<template>
  <div>
    <h2 v-if="hasTitle" class="text-3xl font-semibold text-center pb-3">
      {{ $t('home.lastVideos') }}
    </h2>
    <a
      v-for="(video, index) in allVideos"
      :key="index"
      :class="videoItemClasses"
      class="video-item mb-4 cursor-pointer p-2 rounded hover:bg-green-main-700-40"
      @click="showVideo(video.shortId)"
    >
      <img
        :src="video.img"
        :alt="video.title"
        loading="lazy"
        class="w-auto rounded video-img"
        :class="imgSize"
      />
      <h4>{{ video.title }}</h4>
    </a>

    <LightboxVideo
      v-if="shouldShowVideo"
      :video-id="videoId"
      @hide-video="hideVideo()"
    />
  </div>
</template>

<script>
export default {
  name: 'YoutubeVideos',
  components: {
    LightboxVideo: () => import('~/components/ui/LightboxVideo.vue'),
  },
  props: {
    videos: {
      type: Array,
      default: () => [],
    },
    hasTitle: {
      type: Boolean,
      default: true,
    },
    imgSize: {
      type: String,
      default: 'small',
      validator: value => ['small', 'big'].includes(value),
    },
    isResponsive: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    shouldShowVideo: false,
    videoId: null,
  }),
  computed: {
    allVideos() {
      return this.videos
        .map(video => {
          if (Object.keys(video.snippet.thumbnails).length) {
            const image =
              video.snippet.thumbnails.maxres ||
              video.snippet.thumbnails.default
            return {
              title: video.snippet.title,
              id: video.id,
              shortId: video.snippet.resourceId.videoId,
              img: image.url,
            }
          }
        })
        .filter(Boolean)
    },
    videoItemClasses() {
      return this.isResponsive ? 'video-item-responsive' : ''
    },
  },
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
.video-img {
  object-fit: cover;
  &.small {
    @apply h-24;
  }
  &.big {
    @apply h-48;
  }
}
.video-item {
  @apply flex justify-start;

  h4 {
    @apply pl-3;
  }

  &-responsive {
    @media (max-width: theme('screens.sm')) {
      @apply flex-col;

      h4 {
        @apply pl-0 pt-3;
      }
    }
  }
}
</style>
