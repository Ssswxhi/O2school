import React from "react";
import { Button, View, Text } from "@tarojs/components";
import "./index.scss";
<<<<<<< HEAD
import Header from "../Header/index";
import { toOtherPage, reLaunchPage } from "../../../../../tool/tools";
const indexBookUrl = "/pages/add/compontent/OldBook/index";
export default function index() {
=======
import Taro from "@tarojs/taro";
import Header from "../Header/index";
import {reLaunchPage } from "../../../../../tool/tools";
const indexBookUrl = "/pages/add/compontent/OldBook/index";
export default function index() {
  let getOnce = ()=>{
    Taro.removeStorage({
      key: 'book',
      success: function (res) {
        reLaunchPage(indexBookUrl);
      }
    })
  }
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
  return (
    <View className="border-box">
      <Header state={2} />
      <View className="content-box">
        <View className="header" />
        <View className="content">
          <View className="pic-box">图片</View>
          <View className="con-box">恭喜您 发布成功</View>
          <View className="all-box">查看详情</View>
          <View
            className="nut-box"
            onClick={() => {
              // toOtherPage();
              console.log(111);
            }}
          >
            <Button
              onClick={() => {
<<<<<<< HEAD
                reLaunchPage(indexBookUrl);
=======
                getOnce()
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
              }}
            >
              <Text>再来一本</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
