/*
 * @Author: your name
 * @Date: 2021-07-22 22:15:46
 * @LastEditTime: 2021-07-28 22:52:52
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
        key:"color",
        name:'文本颜色',
        value:'#bb8344',
        type:'color',
        placeholder:'请选择颜色'
    },{
        key:"fontSize",
        name:'字体大小',
        value:'14',
        type:'input',
        placeholder:'请输入字体大小'
    }]
    if(attr){
        attribute = attr
    }
    
    let data = {txt:'^_^'}
    if(dataStr){
        
        data = JSON.parse(dataStr)
    }
    let template = `<textComp ${getAttrStr(attribute)}  data='${JSON.stringify(data)}'></textComp>`
    return {attribute,data,template}
}

export default handle