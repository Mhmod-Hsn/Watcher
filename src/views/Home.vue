<template>
  <b-container fluid>
    <div class="home">
      <div id="recently-added" class="my-4">
        <SectionHeader title="Recently Added" />
        <VideoSlider :items="recentlyAdded" v-if="recentlyAdded" />
        <LoadingCard v-else />
      </div>

      <div id="_2020s" class="my-4">
        <SectionHeader title="2020's" />
        <VideoSlider :items="the_2020s" v-if="the_2020s" />
        <LoadingCard v-else />
      </div>

      <div id="series" class="my-4">
        <SectionHeader title="Series" />
        <VideoSlider :items="series" v-if="series" />
        <LoadingCard v-else />
      </div>

      <div id="movies" class="my-4">
        <SectionHeader title="movies" />
        <VideoSlider :items="movies" v-if="movies" />
        <LoadingCard v-else />
      </div>
    </div>
    
  </b-container>
</template>

<script>
import LoadingCard from "../components/LoadingCard";
import SectionHeader from "../components/layout/SectionHeader";
import VideoSlider from "../components/video/VideoSlider";
export default {
  name: "Home",
  components: { LoadingCard, SectionHeader, VideoSlider },
  data: () => ({
    recentlyAdded: null,
    the_2020s: null,
    series: null,
    movies: null,
  }),
  mounted() {
    this.getRecentVideo();
    this.get2020Video();
    this.getSeries();
    this.getMovies();
  },
  computed: {},
  methods: {
    getRecentVideo() {
      this.$store
        .dispatch("video/getVideos", "?_sort=created_at:DESC&_limit=10")
        .then((response) => (this.recentlyAdded = response.data));
    },
    get2020Video() {
      this.$store
        .dispatch("video/getVideos", "?release_year=2020")
        .then((response) => (this.the_2020s = response.data));
    },
    getSeries() {
      this.$store
        .dispatch("video/getVideos", "?category=2")
        .then((response) => (this.series = response.data));
    },
    getMovies() {
      this.$store
        .dispatch("video/getVideos", "?category=1")
        .then((response) => (this.movies = response.data));
    },
  },
};
</script>
