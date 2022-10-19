import React, { useState } from "react";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui";

const goWish = () => {
  Taro.navigateTo({ url:  '/pages/list/Wish/index' });
};
const goAbout = () => {
  Taro.navigateTo({ url:  '/pages/list/About/index' });
};
const goAgreement = () => {
  Taro.navigateTo({ url:   '/pages/list/Agreement/index'});
};
// const goLogout = () => {
//   Taro.navigateTo({ url: "./components/List/Logout/index" });
// };

export default function List() {
  const [openBox, setOpenBox] = useState(false);
  //退出登录弹出框
  function Logout() {
    setOpenBox(true);
  }
  const handleClose = () => {
    setOpenBox(false);
  };
  const handleCancel = () => {
    setOpenBox(false);
  };
  //点击确认退出登陆
  const handleConfirm = () => {
    Taro.clearStorage()
      .then(res => {
        console.log(res);
        console.log("退出登录成功");
        setOpenBox(false);
        Taro.redirectTo({
          url: "/pages/login/index"
        });
      })

//可以将这个放在父组件页
      /* .catch(res => {
        //没有登录的情况下点击退出登录
        console.log(res);
        console.log("请先登录");
        Taro.redirectTo({
          url: "/pages/login/index"
        });
      }); */
  };

  return (
    <View>
      <AtList class="list">
        <AtListItem title="心愿单" onClick={goWish} />
        <AtListItem title="关于我们" onClick={goAbout} />
        <AtListItem title="使用协议" onClick={goAgreement} />
        <AtListItem title="退出登录" onClick={Logout} />
      </AtList>
      <AtModal
        isOpened={openBox}  
        cancelText="取消"
        confirmText="确认"
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content="亲，您确定要注销？"
      />
    </View>
  );
}
