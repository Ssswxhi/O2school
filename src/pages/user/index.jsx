import { View } from "@tarojs/components";
<<<<<<< HEAD

export default function(){
  return <View>用户</View>
}
=======
import NavBar from "../NavBar";
export default function() {
  return (
    <View>
      <NavBar
        background="#43BA6A"
        color="#fff"
        iconTheme="white"
        back
        renderCenter={
          <View className="trace-rowAlignCenter">自定义导航栏标题</View>
        }
      />
    </View>
  );
}
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
