<template>
  <div class="stars-wrapper">
    <div class="stars__bg" />
    <div class="stars__progress" :style="{ width: `${value * 20}%` }" />
    <img class="stars__img" :src="starsBg" alt="" />
  </div>
</template>

<script>
import starsBg from "@/assets/stars-bg.svg";
export default {
  name: "Stars",
  props: {
    value: Number,
  },
  data() {
    return {
      starsBg,
    };
  },
};
</script>

<style lang="scss" scoped>
.stars-wrapper {
  position: relative;
  width: 125px;
  height: 20px;
  .stars__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $bg-secondary;
    z-index: -1;
  }
  .stars__progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $stars;
    z-index: -1;
  }
  .stars__img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
