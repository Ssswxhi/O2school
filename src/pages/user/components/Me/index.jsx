import React from "react";
import { View } from "@tarojs/components";
import "./index.scss";
import { AtAvatar } from "taro-ui";
import { AtIcon } from "taro-ui";
import Taro, { useDidShow } from "@tarojs/taro";
import { useState } from "react";

export default function Me() {
  const [name, setName] = useState("昵称未设置");
  const [campus, setCampus] = useState("");
  const [avatar, setAvatar] = useState("");
  
  // 对应 onShow
  useDidShow(() => {
    console.log("###########################");
    Taro.getStorage({ key: "updateInfo" })
      .then(res => {
        console.log(res); //{errMsg: "getStorage:ok", data: {…}}
        const { nickName, avatarUrl, campus } = res.data;
        setName(nickName);
        setAvatar(avatarUrl);
        setCampus(campus);
      })
      .catch(err => {
        console.log(err); //errMsg: "getStorage:fail data not found"
        Taro.getStorage({
          key: "userMess",
          success: res => {
            console.log(res.data); //用户的信息，类型为对象
            console.log(res.errMsg); //getStorage:ok
            setName(res.data.nickName);
            setAvatar(res.data.avatarUrl);
            console.log(name);
            console.log(avatar);
          }
        });
      });
  });

  //跳转到更新信息页面
  const update = () => {
    console.log(111);
    console.log(avatar);
    Taro.navigateTo({
      url: "./components/Me/Information/index?avatar=" + avatar
    });
  };

  return (
    <View onClick={update}>
      <View className="img">
        <AtAvatar circle image={avatar}></AtAvatar>
      </View>
      <View className="des">
        <View className="name-des">{name}</View>
        <View className="address-des">
          <AtIcon
            size="14"
            className="icon"
            prefixClass="ri"
            value="map-pin-line"
          />
          {campus}
        </View>
      </View>
    </View>
  );
}
