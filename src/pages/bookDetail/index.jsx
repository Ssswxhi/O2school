import { View, Text, Image } from "@tarojs/components";
// import BookDetShow from "./index-components/BookDetShow";
import "./index.scss";
// import SellerInfor from "./index-components/SellerInfor";
import Seller from "../../components/Seller";
// import BottomBar from "./index-components/BottomBar";
import Tabbar from '../../components/Tabbar'
import Taro, { getCurrentInstance, useDidShow } from "@tarojs/taro";
import URL from "../tool/url";


/**
 *  这是书籍详情页面，从首页点击书籍进去之后
 */
export default function bookDet() {
  const { router } = getCurrentInstance();
  console.log(router);
  const itemID = router.params.id;
  console.log(itemID);
  useDidShow(() => {
    Taro.getStorage({
      key: "token",
      success: res => {
        console.log(res);
        let token = res.data;
        Taro.request({
          url: URL + `/used-goods/item/${itemID}`,
        //   url:`http://yapi.smart-xwork.cn/mock/116240/used-goods/item/${itemID}`,
          method: "GET",
          header: {
            token
          },
          success: (res) => {
            console.log("获得书籍详细信息成功");
            console.log(res);
            console.log(res.data);
          }
        });
      }
    });
  });

  
  return (
    <View>
      {/* <BookDetShow /> */}
      <View className="top">
        <Image
          className="at-article__img"
          src="https://tse1-mm.cn.bing.net/th/id/R-C.b6fd1206970844bf022e6b914d30ad0e?rik=ekVQvNWZCBtWlw&riu=http%3a%2f%2fimg14.360buyimg.com%2fn1%2fjfs%2ft1%2f23612%2f4%2f14947%2f149850%2f5cad9a58Eeaf87234%2f70d0c7686366b90a.jpg&ehk=CBDmKWE69344%2b3YQcsEp%2bWFUsfdDvjPCelF%2boLgF8uk%3d&risl=&pid=ImgRaw&r=0"
          mode="widthFix"
        />

        <View class="des">
          <View className="at-article__p">数据结构与算法分析</View>
          <View className="at-article__info">这是作者</View>
          <View className="price">
            <Text className="newPrice">￥19.00元</Text>
            <Text className="at-article__info">原价：￥40.70元</Text>
          </View>
        </View>
      </View>

      <View className="middle"></View>

      <View className="side">
        <View>
          <View className="title-pub">
            <Text>发布信息</Text>
          </View>
          <View className="line"></View>
          <Seller />
          <View className="introduce">
            <View className="intro">
              <Text className="intro-left">书籍类型：</Text>
              <Text className="intro-right">通用类书</Text>
            </View>

            <View className="intro">
              <Text className="intro-left">取货方式：</Text>
              <Text className="intro-right">买家自提</Text>
            </View>
            <View className="intro-time">
              <View className="at-article__info">发布于49分钟前</View>
            </View>
          </View>
        </View>

        <View>
          <View className="title-book">
            <Text>图书详情</Text>
          </View>
          <View className="line"></View>
          <View className="introduce">
            <View className="detail">
              <Text className="detail-left">isbn编 号</Text>
              <Text className="detail-right">97836347734680</Text>
            </View>
            <View className="detail">
              <Text className="detail-left">出 版 社</Text>
              <Text className="detail-right">清华大学出版社</Text>
            </View>
            <View className="detail">
              <Text className="detail-left">出 版 地</Text>
              <Text className="detail-right">北京</Text>
            </View>
            <View className="detail">
              <Text className="detail-left">出 版 时 间</Text>
              <Text className="detail-right">2017-01-01</Text>
            </View>
            <View className="detail">
              <Text className="detail-left">装 帧 方 式</Text>
              <Text className="detail-right">平装</Text>
            </View>
            <View className="detail-end">
              <Text className="detail-left">开 本</Text>
              <Text className="detail-right">26x19</Text>
            </View>
          </View>
        </View>
      </View>
      <Tabbar />
    </View>
  );
}
