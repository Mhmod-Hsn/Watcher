<template>
  <div class="video-slider">
    <VueSlickCarousel v-bind="settings" v-if="items">
      <VideoCard style="width: 280px" v-for="item in items" :key="item.id" :item="item" />
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VideoCard from "./VideoCard";

export default {
  name: "VideoSlider",
  props: {
    items: {
      required: true,
    },
  },
  components: { VideoCard, VueSlickCarousel },
  data: () => ({
    settings: {
      arrows: false,
      dots: false,
      infinite: true,
      centerPadding: "20px",
      slidesToShow: 1,
      variableWidth: true,
      swipeToSlide: true,
    },
  }),
};
</script>

<style lang="scss" >
.slick-prev:before,
.slick-next:before {
  color: var(--primary);
  font-size: 30px;
}
</style>
