<template>
  <div>
    <video preload="auto"
    data-setup="{}" ref="videoPlayer" class="video-js"></video>
    </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
</script>

<style>
@media only screen and (max-width: 600px) {
  .video-js{
    width: 440px; height: 250px;
  }

}

@media only screen and (min-width: 992px) {
  .video-js{
    width: 1370px; height: 700px;
  }

}
</style>