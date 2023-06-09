/*
 * @Author: your name
 * @Date: 2021-07-22 22:22:20
 * @LastEditTime: 2021-07-25 21:59:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/utils/index.js
 */
import Vue from 'vue'
let getAttrStr=(attrs)=>{
    let attrStr = ''
    attrs.forEach(item=>{
        attrStr += item.key +"="+ item.value+"   "
    })
    return attrStr
}

export const genId = () => { //获取随机ID，
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4();
    // 0x10000：以0x开始的数据表示16进制，10000转成十进制数就是65536，实际上这是为了后面获取四位数随机号码所以乘以10000，而为了获取包含字母在内的字符就用16进制。
}

export const mountedComponent = (component)=>{
    let data = {}
    let id = component.info.id;
    let compWidth = 0 ;
    let compHeight = 0 ;
    if(component.attribute){
        component.attribute.forEach(item=>{
            data[item.key] = item.value
            if(item.key==='width'){
                compWidth = item.value
            }
            if(item.key==='height'){
                compHeight = item.value
            }
        })

    }
    setTimeout(()=>{
        new Vue({
            name:id.toString(),
            data(){
               return data
            },
            el:document.getElementById(id),
            template:component.template,
            mounted(){
                this.$el.id=id;
                this.$el.style.position="absolute";
                this.$el.style.cursor='pointer';
                this.$el.style.left=`${component.position.left}px`
                this.$el.style.top=`${component.position.top}px`
                this.$el.style.zIndex=component.position.zIndex
                this.$el.style.width=`${compWidth}px`
                this.$el.style.height=`${compHeight}px`
    
            }
    
        })

    },500)
   

}

export default getAttrStr