/*
 * @Author: your name
 * @Date: 2021-07-22 22:25:08
 * @LastEditTime: 2021-07-28 22:30:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/templates/index.js
 */
import textComp from './textComp'
import picComp from './picComp'
import tabList from './tabList'

let obj={
    textComp,
    picComp,
    tabList
}

// info.type--->就是组件的名称
let getComponent = (info ,attr,data)=>{
      let component =  obj[info.type](attr,data)
      component.info = info
    return component
}

export default getComponent