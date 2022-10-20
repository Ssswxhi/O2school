import { Text, View } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";
import Taro from "@tarojs/taro";
import React, { useState } from "react";
import Like from "./components/Like";
import OldBook from "./components/OldBook";
import "./index.scss";
// const Header = () => (
//   <View className="header">
//     <Text>西邮小O❤AllSpark工作室</Text>
//   </View>
// );

// const goto = e => {
//   if (e == 0)
//     Taro.navigateTo({ url: "/pages/user/Publish/publish-show/publish" });
//   if (e == 1) Taro.navigateTo({ url: "/pages/user/Star/star" });
//   if (e == 2) Taro.navigateTo({ url: "/pages/user/Help/help" });
// };
//   Taro.request({
//    url:URL+`/used-goods?limit=20&page=1&time=0`,
//    method: "GET",

export default function() {
  const [current, setCurrent] = useState(0); //	当前选中的标签索引值
  const handleClick = e => {
    console.log("打印e" + e);
    setCurrent(e);
  };

  const tabList = [{ title: "猜你喜欢" }, { title: "二手教辅" }];

  return (
    // <View>
    //   <Header />
    // </View>
    <View class="test">
      <AtTabs
        current={current}
        tabList={tabList}
        onClick={handleClick}
        className="tabs"
        swipeable={true}
      >
        <AtTabsPane current={current} index={0}>
          <Like />
        </AtTabsPane>

        <AtTabsPane current={current} index={1}>
          <OldBook />
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
