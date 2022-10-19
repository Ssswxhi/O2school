<<<<<<< HEAD
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
=======
import { View } from "@tarojs/components";
import "./index.scss";
import Left from "./Left";
import Right from "./Right";
export default function(props) {
  const courseDate = props.courseDate;
  const thisWeek = props.thisWeek;
  return (
    <View className="content">
      <Left />
      <Right courseDate={courseDate} thisWeek={thisWeek} />
    </View>
  );
}
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
