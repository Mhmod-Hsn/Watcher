<template>
  <h3 class="section-title ml-2 pl-3 text-primary font-weight-bold">{{title}}</h3>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  border-left: 5px solid var(--primary);
  height: 30px;
  display: flex;
  align-items: center;
}
</style>