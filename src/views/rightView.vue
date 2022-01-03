<!--
 * @Author: your name
 * @Date: 2021-07-21 22:38:19
 * @LastEditTime: 2021-07-29 22:24:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/views/rightView.vue
-->
<template>
  <div class="wrapper">
    <headTab
      :checkIndex="checkIndex"
      @checkTabChange="checkTabChange"
    ></headTab>
    <div v-if="mycurrComp">
      <!-- 样式 -->
      <div v-if="checkIndex === 0">
        <div class="styleItem" v-for="(item, index) in mycurrComp.attribute" :key="index">
          <span class="label">{{ item.name }}:</span>
          <!-- type =input -->
          <input
            class="inputStyl"
            v-if="item.type === 'input'"
            @blur="updateComp"
            type="text"
            v-model="item.value"
          />
          <!-- type=color -->
          <input
           class="inputStyl"
            v-if="item.type === 'color'"
            type="color"
            @change="updateComp"
            v-model="item.value"
          />
        </div>
      </div>
      <!-- 数据 -->
      <div v-if="checkIndex === 1">
        <textarea @change="updateComp" class="dataBox" v-model="dataStr"></textarea>
      </div>
    </div>
    <div style="padding:15px;" v-else>当前没有正在编辑的组件</div>
  </div>
</template>

<script>
import headTab from "./comps/headTab.vue";
import getComponent from '../templates/index'
import {mountedComponent} from '../utils/index'
export default {
  components: {
    headTab,
  },
  props: {
    mycurrComp: {
      type: Object,
    },
  },
  data() {
    return {
      checkIndex: 0,
      dataStr:''
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    //   更新组件
    updateComp(){
        // 1、获取组件数据
        let component = getComponent(this.mycurrComp.info,this.mycurrComp.attribute,this.dataStr)
        // 2、设置组件的位置
        component.position = this.mycurrComp.position
        // 3、重新挂载组件
        mountedComponent(component)

        this.$emit('updateComp',component)



    },

    checkTabChange(index) {
      this.checkIndex = index;
    },
  },
  watch: {
      mycurrComp(val){
          if(val){
            this.dataStr = JSON.stringify(val.data)

          }

         
      }
  },
};
</script>

<style scoped lang="less">
.wrapper {
  width: 350px;
  .styleItem{
      margin:10px;
      display: flex;
      .label{
          display: inline-block;
          width:80px;
      }
      .inputStyl{
          flex:1 0 ;
         
      }
  }
  .dataBox{
      min-height: 300px;
      margin:15px;
      width:90%;
      
  }
}
</style>
