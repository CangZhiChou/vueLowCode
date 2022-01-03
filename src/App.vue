<template>
  <div id="app">
    <head-view></head-view>
    <div class="content-box">
      <left-view></left-view>
      <center-view @currComp="currComp" :mycurrComp="mycurrComp"></center-view>
      <right-view @updateComp="updateComp"  :mycurrComp="mycurrComp"></right-view>
    </div>
  </div>
</template>

<script>
import headView from './views/headViews.vue'
import leftView from './views/leftViews.vue'
import centerView from './views/centerView.vue'
import rightView from './views/rightView.vue'

export default {
  name: 'App',
  components: {
    headView,
    leftView,
    centerView,
    rightView

  },
  data(){
    return {
      mycurrComp:null
    }
  },
  methods: {
    updateComp(comp){
       this.mycurrComp = comp
    },
    currComp(comp){
       this.mycurrComp = comp
    },
   
  }
}
</script>

<style lang="less">
.content-box{
  display: flex;
  height:calc(100vh - 80px);
}
</style>
