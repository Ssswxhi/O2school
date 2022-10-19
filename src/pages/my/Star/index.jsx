import { View, Text, Image, Button } from "@tarojs/components";
import "./index.scss";
import Taro, { useDidShow } from "@tarojs/taro";
import { AtSwipeAction } from "taro-ui";

function Star() {
  /*  Taro.request({
        url:'http://yapi.smart-xwork.cn/mock/116240/used-goods/collect/{itemID}',
        method:"POST",
        header: {
            "content-type": "application/json",
           
        },
        success:(res)=>{
            console.log(res);
        }
    }) */
  return (
    <View className="top">
      <Image
        className="at-article__img"
        src="https://tse1-mm.cn.bing.net/th/id/R-C.b6fd1206970844bf022e6b914d30ad0e?rik=ekVQvNWZCBtWlw&riu=http%3a%2f%2fimg14.360buyimg.com%2fn1%2fjfs%2ft1%2f23612%2f4%2f14947%2f149850%2f5cad9a58Eeaf87234%2f70d0c7686366b90a.jpg&ehk=CBDmKWE69344%2b3YQcsEp%2bWFUsfdDvjPCelF%2boLgF8uk%3d&risl=&pid=ImgRaw&r=0"
        mode="widthFix"
      />
      <View class="des">
        <View className="at-article__p">content</View>
        <View className="at-article__info">这是作者</View>
        <View className="price">
          <Text>￥19.00元</Text>       
        </View>
        <Button className='btn'>取消收藏</Button>
      </View>

      
    </View>
  );
}
export default Star;
