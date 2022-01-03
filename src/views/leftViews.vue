<!--
 * @Author: your name
 * @Date: 2021-07-21 22:38:02
 * @LastEditTime: 2021-07-25 21:24:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/views/leftViews.vue
-->
<template>
 <div class="wrapper">
     <div 
         class="menuItem" 
         :data-type="item.type" 
         :data-name="item.name"
         draggable="true" 
         @dragstart="dragStart"
         v-for="(item,index) in menus" 
         :key='index'>{{item.name}}</div>
 </div>
</template>

<script>
import menus from './menuList'
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
          menus :menus
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        dragStart(e){
            let info = {
                name:e.target.getAttribute('data-name'),
                type:e.target.getAttribute('data-type')
            }
            e.dataTransfer.setData('info',JSON.stringify(info))


        }

    },
    watch: {

    },
};
</script>

<style scoped lang="less">
.wrapper{
    width: 243px;
    padding:8px;
    .menuItem{
        background: #eee;
        width:100px;
        height:100px;
        float:left;
        margin:10px;
        text-align: center;
        line-height: 100px;
        cursor:pointer;
        
    }
}
</style>
