import { View,Text } from "@tarojs/components";

import './index.scss'
export default function(){
  const weeks  = ['周一','周二','周三','周四','周五','周六','周日']
  return (
    <View className='week-header'>
     <View className='week-in'>
        <Text className='item1'>10月</Text>
      {
        weeks.map((item)=>{
          return <View className='item active'>
            <View className='item-box'> {item}
            <View className='month-time'>11/11</View></View>
          </View>
        })
      }
     </View>
    </View>
  )
}