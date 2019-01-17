<template>
  <div class="scroll-container" ref="container">
    <div
      v-for="(item, index) in pictures"
      class="scroll-item"
      :key="index"
      @touchstart.stop.prevent="handleStart"
      @touchmove.stop.prevent="handleMove"
      @touchend.stop.prevent="handleEnd"
      >
      <scroll-item :item="item" />
    </div>
  </div>
</template>

<script>
const viewportHeight = window.innerHeight;
// 超过整屏高度的 20% 即切换
const thread = Math.floor(viewportHeight * 0.2);

import ScrollItem from './ScrollItem';

export default {
  name: "picture-switcher",
  components: {
    ScrollItem,
  },
  props: {
    pictures: Array
  },
  data() {
    return {
      scrollIndex: 0,
      startPoint: 0
    };
  },
  mounted() {
    this.$children.forEach(el => {
      el.$el.style.backgroundColor = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6)
    })
  },
  methods: {
    handleStart(ev) {
      this.startPoint = ev.touches[0].clientY;
      this.$refs.container.style.transition = "none";
    },
    handleMove(ev) {
      const offsetY =
        -(viewportHeight * this.scrollIndex + this.startPoint) +
        ev.touches[0].clientY;
      this.moveContainer(offsetY);
    },
    handleEnd(ev) {
      const y = ev.changedTouches[0].clientY;
      if (Math.abs(this.startPoint - y) > thread) {
        // 点下坐标 - 离开坐标 > 所设定阈值 then 切换上下图片
        if (this.startPoint > y) {
          // 向上拖动，超出，下一张
          this.scrollIndex++;
          if (this.scrollIndex === this.pictures.length) {
            this.scrollIndex = this.pictures.length - 1;
          }
        } else {
          // 向下拖动，超出，上一张
          this.scrollIndex--;
          if (this.scrollIndex < 0) {
            this.scrollIndex = 0;
          }
        }
      }

      this.$refs.container.style.transition = ".4s ease-out";
      this.moveContainer(this.scrollIndex * -viewportHeight);
    },
    moveContainer(distance) {
      this.$refs.container.style.transform = "translateY(" + distance + "px)";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll-container {
  transition: none;
  height: 100vh;
}
.scroll-item {
  height: 100vh;
  overflow: hidden;
}
</style>
