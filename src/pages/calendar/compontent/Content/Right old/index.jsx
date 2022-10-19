import { View , Text, Button} from "@tarojs/components";
import { useState } from 'react'
import { AtFloatLayout } from "taro-ui"
import './index.scss'
import { AtFab } from 'taro-ui'
export default function(){
  
  const colours = ['#e54d42','#f37b1d','#fbbd08','#8dc63f','#39b54a','#1cbbb4','#0081ff','#6739b6','#9c26b0','#e03997','#a5673f','#8799a3']
  const [isOpened,setIsOpened] = useState();
  const addCourse = ()=>{
    setIsOpened('true')
    console.log(isOpened +1);
  }
  const closeCourse = ()=>{
    setIsOpened('false')
    console.log(isOpened  + 2);
  }
  let classN = 'coursebox';
  return (
    <View className='right'>
      {       
        courses.map((item)=>{
          if(item == ''){
            classN = ''
          }else{
            classN = 'coursebox'
          }
          return (
            <View className={classN}>
            <View className='coursetext'>{item}</View>
          </View>
          )
        })
      }      
      <View className='addcourse'>
        <AtFab onClick={addCourse}>
          <Text className='at-fab__icon at-icon at-icon-menu'>
          </Text>
        </AtFab>
      </View>
      <AtFloatLayout isOpened={false} title="添加课程" onClose={closeCourse}>
        <View>
          信息有待完善
        </View>
      </AtFloatLayout>
    </View>
  )
}