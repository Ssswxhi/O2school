import React from "react";
import "./index.scss";

import { AtTabBar } from "taro-ui";

import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

// 'pages/user/components/My/Publish/index',

const goto = e => {
  if (e == 0) Taro.navigateTo({ url: "/pages/my/Publish/index" });
  if (e == 1) Taro.navigateTo({ url: "/pages/my/Star/index" });
  if (e == 2) Taro.navigateTo({ url: "/pages/my/Help/index" });
  //   console.log(e);
};

export default function My() {
  return (
    <View>
      <AtTabBar
        iconSize="26"
        fontSize="8"
        className="tabbar"
        selectedColor="#333"
        tabList={[
          {
            title: "我的发布",
            iconPrefixClass: "ri",
            iconType: "price-tag-3-line"
          },
          {
            title: "我的收藏",
            iconPrefixClass: "ri",
            iconType: "chat-heart-line"
          },
          {
            title: "帮助中心",
            iconPrefixClass: "ri",
            iconType: "question-line"
          }
        ]}
        onClick={goto}
      />
    </View>
  );
}
