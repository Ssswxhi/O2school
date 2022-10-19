import { View  } from "@tarojs/components";
import './index.scss'
import Left from './Left'
import Right from "./Right";
export default function(){
  return (
   <View className='content'> 
        <Left/>
        <Right/>
    </View>


  )
}