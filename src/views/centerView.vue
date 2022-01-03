<!--
 * @Author: your name
 * @Date: 2021-07-21 22:38:11
 * @LastEditTime: 2021-07-29 22:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/views/centerView.vue
-->
<template>
  <div
    id="canvasBox"
    class="wrapper"
    @dragover="dragOver"
    @drop="drop"
    @click="checkComp"
  >
    <div
      :id="item.info.id"
      v-for="(item, index) in components"
      :key="index"
    ></div>
    <div
      id="borderBox"
      @contextmenu.prevent="rightClick"
      @mousedown="mouseDownStart"
      class="borderStyle"
      v-if="currComp"
      :style="setBorderStyle"
    ></div>
  </div>
</template>

<script>
import { genId } from "../utils/index";
import { mountedComponent } from "../utils/index";
import getComponent from "../templates/index";
export default {
  components: {},
  props: {
    mycurrComp: {
      type: Object,
    },
  },
  data() {
    return {
      components: [],
      zIndex: 0,
      currComp: null,
      startPosition: { x: 0, y: 0 },
    };
  },
  computed: {
    setBorderStyle() {
      let compWidth = 0;
      let compHeight = 0;
      debugger;
      if (this.currComp) {
        this.currComp.attribute.forEach((item) => {
          if (item.key === "width") {
            compWidth = item.value;
          }
          if (item.key === "height") {
            compHeight = item.value;
          }
        });
        return {
          width: `${compWidth}px`,
          height: `${compHeight}px`,
          left: `${this.currComp.position.left}px`,
          top: `${this.currComp.position.top}px`,
          zIndex: `${this.currComp.position.zIndex}`,
        };
      } else {
        return {};
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    updateArrList(val) {
      this.components.forEach((item) => {
        if (item.info.id === val.info.id) {
          item.attribute = val.attribute;
          item.data = val.data;
          item.template = val.template;
        }

        // item = val
      });
    },

    // 右击回调
    rightClick() {
      if (confirm("你确定要删除当前这个组件吗？")) {
        document.getElementById(this.currComp.info.id).remove();
      }
      this.currComp = null;
    },

    // 鼠标按下回调
    mouseDownStart(e) {
      // 记录按下瞬间的位置
      this.startPosition.x = e.clientX;
      this.startPosition.y = e.clientY;
      // 注册移动鼠标和鼠标松开的事件
      document.addEventListener("mousemove", this.mouseMove, true);
      document.addEventListener("mouseup", this.mouseUp, true);
    },

    // 鼠标移动的回调
    mouseMove(e) {
      // 计算偏移量
      let offsetX = e.clientX - this.startPosition.x;
      let offsetY = e.clientY - this.startPosition.y;

      // 设置组件的当前位置
      let comp = document.getElementById(this.currComp.info.id);
      Object.assign(comp.style, {
        left:
          this.boundaryLimit(
            "x",
            this.currComp.position.left + offsetX,
            this.currComp
          ) + "px",
        // this.currComp.position.left + offsetX +'px',
        top:
          this.boundaryLimit(
            "y",
            this.currComp.position.top + offsetY,
            this.currComp
          ) + "px",
        // this.currComp.position.top + offsetY +'px'
      });

      // 设置选中框的位置
      let boderComp = document.getElementById("borderBox");
      Object.assign(boderComp.style, {
        left:
          this.boundaryLimit(
            "x",
            this.currComp.position.left + offsetX,
            this.currComp
          ) + "px",
        // this.currComp.position.left + offsetX +'px',
        top:
          this.boundaryLimit(
            "y",
            this.currComp.position.top + offsetY,
            this.currComp
          ) + "px",
        // this.currComp.position.top + offsetY +'px'
      });
    },

    // 鼠标松开的回调
    mouseUp(e) {
      // 移出事件
      document.removeEventListener("mousemove", this.mouseMove, true);
      document.removeEventListener("mouseup", this.mouseUp, true);

      // 更新组件数据
      this.currComp.position.left = this.boundaryLimit(
        "x",
        this.currComp.position.left + (e.clientX - this.startPosition.x),
        this.currComp
      );

      // this.currComp.position.left +(e.clientX - this.startPosition.x);
      this.currComp.position.top = this.boundaryLimit(
        "y",
        this.currComp.position.top + (e.clientY - this.startPosition.y),
        this.currComp
      );
      // this.currComp.position.top +(e.clientY - this.startPosition.y);
    },

    // 边界限定
    boundaryLimit(type, num, comp) {
      // 画布的宽高
      let canvas = document.getElementById("canvasBox");
      let canvasWidth = canvas.clientWidth;
      let canvasHeight = canvas.clientHeight;

      // 组件的宽高
      let compWidth = 0;
      let compHeight = 0;
      comp.attribute.forEach((item) => {
        if (item.key === "width") {
          compWidth = item.value;
        }
        if (item.key === "height") {
          compHeight = item.value;
        }
      });

      // 边界值
      let maxX = canvasWidth - compWidth;
      let maxY = canvasHeight - compHeight;

      let lastNum = 0;

      if (type === "x") {
        if (num < 0) {
          lastNum = 0;
        } else if (num > maxX) {
          lastNum = maxX;
        } else {
          lastNum = num;
        }
      } else if (type === "y") {
        if (num < 0) {
          lastNum = 0;
        } else if (num > maxY) {
          lastNum = maxY;
        } else {
          lastNum = num;
        }
      }

      return lastNum;
    },

    checkComp(e) {
      let reg = /\w{8}-\w{4}/;
      let node = e.target;
      let count = 0;
      while (node && !reg.test(node.id)) {
        count++;
        if (count > 20) {
          return;
        }
        node = node.parentNode;
      }

      if (node && node.id) {
        this.currComp = this.components.find((item) => {
          if (item.info.id === node.id) {
            return item;
          }
        });
      } else {
        this.currComp = null;
      }
      this.$emit("currComp", this.currComp);
    },

    // 拖拽到画布的回调
    dragOver(e) {
      e.preventDefault();
    },

    // 鼠标松开的回调
    drop(e) {
      e.preventDefault();
      let info = JSON.parse(e.dataTransfer.getData("info"));
      info.id = genId();
      let component = getComponent(info);
      this.zIndex++;

      // 找到组件的宽高
      let compWidth = 0;
      let compHeight = 0;
      component.attribute.forEach((item) => {
        if (item.key === "width") {
          compWidth = item.value;
        }
        if (item.key === "height") {
          compHeight = item.value;
        }
      });
      let left = e.offsetX - compWidth / 2;
      let top = e.offsetY - compHeight / 2;
      if (left < 0) {
        left = 0;
      }
      if (top < 0) {
        top = 0;
      }
      component.position = { left, top, zIndex: this.zIndex };
      this.components.push(component);
      mountedComponent(component);
    },
  },
  watch: {
    mycurrComp(val) {
      this.currComp = val;
      this.updateArrList(val);
    },
  },
};
</script>

<style scoped lang="less">
.wrapper {
  flex: 1;
  background: #eee;
  position: relative;
  .borderStyle {
    border: 1px solid green;
    position: absolute;
  }
}
</style>
