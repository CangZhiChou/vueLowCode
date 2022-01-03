<!--
 * @Author: your name
 * @Date: 2021-07-26 21:59:31
 * @LastEditTime: 2021-07-29 22:15:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/views/comps/headTab.vue
-->
<template>
 <div class="wrapper">
     <div class="tabItem" @click="checkTab(index)" :class="{'active':checkIndex===index}" v-for="(item,index) in tabList" :key="index">{{item}}</div>
 </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        checkIndex:{
            type:[String,Number]
        }

    },
    data() {
        return {
            tabList:['样式','数据'],
            checkIndex2:this.checkIndex,

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        checkTab(index){
            this.checkIndex2 = index;
            this.$emit('checkTabChange',this.checkIndex2)

        }

    },
    watch: {

    },
};
</script>

<style scoped lang="less">
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom:1px solid #eee;
    .tabItem{
        padding:15px;
        cursor:pointer;
    }
    .active{
        border-bottom:2px solid #5794f5;
    }

}
</style>
