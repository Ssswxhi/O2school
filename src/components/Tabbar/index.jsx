import { Text, View, Image, Button } from "@tarojs/components";
import {
  AtIcon,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction
} from "taro-ui";
import Taro from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";

function BottomBar() {
  const intoShop = () => {
    Taro.navigateTo({ url: "/pages/ownerpage/index" });
  };

  const [openBox, setOpenBox] = useState(false);
  //联系卖家出现弹出框，二维码图片，要支持保存图片到相册，Taro.saveImageToPhotosAlbum(option)，支持扫码scanCode()
  function connect() {
    setOpenBox(true);
  }
  const handleClose = () => {
    console.log("关闭");
    setOpenBox(false);
  };
  const handleCancel = () => {
    console.log("取消");
    setOpenBox(false);
  };

  const viewImg = () => {
    console.log("预览图片");
    //在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
    Taro.previewImage({
      current: qrCode, // 当前显示图片的http链接
      urls: [qrCode], // 需要预览的图片http链接列表
      success: res => {
        console.log(res);
        // Taro.scanCode({
        //   // 只允许从相机扫码
        //   onlyFromCamera: true,
        //   scanType: qrCode,
        //   success: res => {
        //     console.log(res);
        //   }
        // });
      }
    });
  };

  const qrCode =
    "https://tse1-mm.cn.bing.net/th/id/R-C.b6fd1206970844bf022e6b914d30ad0e?rik=ekVQvNWZCBtWlw&riu=http%3a%2f%2fimg14.360buyimg.com%2fn1%2fjfs%2ft1%2f23612%2f4%2f14947%2f149850%2f5cad9a58Eeaf87234%2f70d0c7686366b90a.jpg&ehk=CBDmKWE69344%2b3YQcsEp%2bWFUsfdDvjPCelF%2boLgF8uk%3d&risl=&pid=ImgRaw&r=0";
  return (
    <View className="bar">
      <View className="shop" onClick={intoShop}>
        <AtIcon prefixClass="ri" value="store-2-line" size="25" />
        <View className="des">进店</View>
      </View>

      <View className="star">
        <AtIcon prefixClass="ri" value="star-smile-line" size="25" />
        <View class="des">收藏</View>
      </View>
      <View className="contact" onClick={connect}>
        联系卖家
      </View>
      {/*   <AtModal
        isOpened={openBox}
        cancelText="取消"
        onClose={handleClose}
        onCancel={handleCancel}
        title="请加卖家vx"
        content={qrCode}
      /> */}
      <AtModal isOpened={openBox} onClose={handleClose} onCancel={handleCancel}>
        <AtModalHeader>请加卖家vx</AtModalHeader>
        <AtModalContent>
          <Image src={qrCode} onClick={viewImg} />
        </AtModalContent>
        <AtModalAction>
          <Button onClick={handleClose}>取消</Button>
        </AtModalAction>
      </AtModal>
    </View>
  );
}
export default BottomBar;
