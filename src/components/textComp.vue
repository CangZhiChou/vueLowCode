<!--
 * @Author: your name
 * @Date: 2021-07-22 22:06:19
 * @LastEditTime: 2021-07-25 22:29:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/templates/textComp.vue
-->
<template>
 <div class="wrapper" :style="setStyle">
     <span>{{dataString}}</span>
 </div>
</template>

<script>
export default {
    components: {

    },
    props: {
        width:{
            type:[String,Number]
        },
        height:{
            type:[String,Number]
        },
        color:{
            type:[String]
        },
        fontSize:{
            type:[String,Number]
        },
        data:{
            type:String
           
        }
    },
    data() {
        return {
            dataString:JSON.parse(this.data).txt

        };
    },
    computed: {
        setStyle(){
            return {
                width:this.width+'px',
                height:this.height+'px',
                fontSize:this.fontSize+'px',
                color:this.color
            }
        }



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
}
</style>
