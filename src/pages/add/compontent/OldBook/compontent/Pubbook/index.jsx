import React from "react";
import { Button, View, Text } from "@tarojs/components";
import "./index.scss";
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
                getOnce()
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