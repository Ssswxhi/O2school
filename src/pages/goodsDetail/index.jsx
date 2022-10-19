import { View, Text, Image } from "@tarojs/components";
import Taro, { getCurrentInstance, useDidShow } from "@tarojs/taro";
// import SellerInfor from './index-components/SellerInfor'
import Seller from "../../components/Seller";
import Tabbar from "../../components/Tabbar";
import "./index.scss";
// import BottomBar from './index-components/BottomBar'
import URL from "../tool/url";

export default function GoodsDetail() {
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
            console.log("获得商品详细信息成功");
            console.log(res);
            console.log(res.data);
          }
        });
      }
    });
  });

  return (
    <View>
      <Seller />
      <View className="top">
        <View className="price">
          <Text className="newPrice">￥300</Text>
          <Text className="at-article__info">￥1800</Text>
        </View>

        <View className="introduce">
          Apple Pencil
          为绘画、记笔记、标注文档设立了一个新标准：直观、精准，又妙趣横生。它具有几乎难以察觉的延迟感，像素级别的精准度，灵敏的倾斜角度和压力感应，并支持防手掌误触。这一切让它用起来格外得心应手，因此每当灵感涌现，你都可以随手捕捉。
        </View>

        <View className="parameter">
          <Text className="intro-left">品牌</Text>
          <Text className="intro-right">苹果</Text>
        </View>
        <View className="parameter">
          <Text className="intro-left">成色</Text>
          <Text className="intro-right">七成新</Text>
        </View>
        <View className="parameter">
          <Text className="intro-left">功能状态</Text>
          <Text className="intro-right">功能完好无维修</Text>
        </View>

        <View>
          <Image
            className="at-article__img"
            src="https://tse1-mm.cn.bing.net/th/id/OIP-C.rTGiQV8om-RtvlcoPEzKpQHaFj?pid=ImgDet&rs=1"
            mode="widthFix"
          />
          <Image
            className="at-article__img"
            src="https://images.squarespace-cdn.com/content/v1/5005c8fc84ae929b37214ebd/1448277102993-GYQFWRVSKFF3WVYJ3BDQ/ke17ZwdGBToddI8pDm48kAsY1zIhZQ4_vuCLJ5fUuld7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTEhmGl7ct3iESOwdTF0i-G9X5svLo3Ajl3IBl-G_HlsELlAdvQ2Nu8ls4sFHcLsBw/image-asset.jpeg"
            mode="widthFix"
          />
        </View>
      </View>

      <Tabbar />
    </View>
  );
}
