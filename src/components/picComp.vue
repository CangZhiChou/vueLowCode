<!--
 * @Author: your name
 * @Date: 2021-07-22 22:06:19
 * @LastEditTime: 2021-07-28 22:22:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/templates/textComp.vue
-->
<template>
 <img class="wrapper" :style="setStyle" :src="picUrl" alt="" srcset="">
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
       
        data:{
            type:String
            // {url:'fj01.png'}
           
        }
    },
    data() {
        return {
            dataString:JSON.parse(this.data).filename

        };
    },
    computed: {
        picUrl(){
            return require('../assets/'+this.dataString)
        },

        setStyle(){
            return {
                width:this.width+'px',
                height:this.height+'px'
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
