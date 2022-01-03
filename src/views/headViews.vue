<!--
 * @Author: your name
 * @Date: 2021-07-21 22:37:54
 * @LastEditTime: 2021-07-25 22:10:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/views/headViews.vue
-->
<template>
 <div class="wrapper">
   <h3>我们一起学前端</h3>
   <div class="btn-box">
      <div class="btn active">预览</div>
      <div class="btn ">保存</div>
      <div class="btn ">发布</div>
   </div>
 </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    watch: {

    },
};
</script>

<style scoped lang="less">
.wrapper{
    
    background: #000;
    height:80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:white;
    padding:0 15px;
    .btn-box{
        display: flex;
        width:200px;
        justify-content: space-around;
        .btn{
            background: white;
            color:#333;
            font-size: 13px;
            padding:2px 10px;
            border-radius: 4px;
            cursor:pointer;
            &.active{
                color:white;
                background: #5794f5;
            }
        }

    }

}
</style>
