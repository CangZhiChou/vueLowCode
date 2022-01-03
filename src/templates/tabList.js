/*
 * @Author: your name
 * @Date: 2021-07-22 22:15:46
 * @LastEditTime: 2021-07-28 22:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /复习空间/可视化布局/visible-layout0721/my-app/src/templates/textComp.js
 */
import getAttrStr from '../utils/index'

let handle = (attr,dataStr)=>{
    let attribute =[{
        key:"width",
        name:'宽度',
        value:'100',
        type:'input',
        placeholder:'请输入宽度'
    },{
        key:"height",
        name:'高度',
        value:'40',
        type:'input',
        placeholder:'请输入高度'
    },{
        key:"itemWidth",
        name:'条目宽度',
        value:'100',
        type:'input',
        placeholder:'请输入条目宽度'
    }]
    if(attr){
        attribute = attr
    }
    
    let data = {list:['欧美','亚洲','非洲','美洲']}
    if(dataStr){
        data = JSON.parse(dataStr)
    }
    let template = `<tabList ${getAttrStr(attribute)}  data='${JSON.stringify(data)}'></tabList>`
    return {attribute,data,template}
}

export default handle