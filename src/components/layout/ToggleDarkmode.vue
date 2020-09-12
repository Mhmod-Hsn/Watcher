<template>
  <button @click="ToggleDarkMode">
<!--    <v-icon>{{$vuetify.theme.dark?'mdi-brightness-7 dark':'mdi-brightness-4'}}</v-icon>-->
  </button>
</template>

<script>
export default {
  methods: {
    ToggleDarkMode() {
      // this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
