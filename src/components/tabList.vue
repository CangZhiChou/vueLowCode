<!--
 * @Author: your name
 * @Date: 2021-07-22 22:06:19
 * @LastEditTime: 2021-07-28 22:33:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/templates/textComp.vue
-->
<template>
 <div class="wrapper" :style="setStyle">
      <div :style="setItemStyle" @click="myindex=index" :class="{active:myindex===index}" class="itemTab" v-for="(item,index) in dataList" :key="index">{{item}}</div>
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
        itemWidth: {
          type: [String, Number],
        },
        data:{
            type:String
           
        }
    },
    data() {
        return {
            dataList:JSON.parse(this.data).list,
            myindex:0,

        };
    },
    computed: {
       setItemStyle(){
           return {
               width:this.itemWidth+"px"
           }
       },

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
    display: flex;
    justify-content: space-around;
    align-items: center;
    .itemTab{
        background: #b5b6ba;
        color: #444;
         border-radius: 5px;
         text-align: center;
        &.active{
             background: #e68342;
             color: #fff;
        }
    }
}
</style>
