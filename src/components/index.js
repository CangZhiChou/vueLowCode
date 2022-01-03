/*
 * @Author: your name
 * @Date: 2021-07-22 22:10:33
 * @LastEditTime: 2021-07-28 22:24:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/components/index.js
 */
import textComp from './textComp'
import picComp from './picComp'
import tabList from './tabList'

let obj = {
    textComp,
    picComp,
    tabList
}

function install(Vue){
    Object.keys(obj).forEach(key=>{
         Vue.component(key,obj[key])
    })
}

let API = {
    version:'1.0',
    install
}

export default API