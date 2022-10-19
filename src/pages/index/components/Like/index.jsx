import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import Taro, { useDidShow } from "@tarojs/taro";
import { useEffect } from "react";
import React, { useState } from "react";
import URL from "../../../tool/url";
//Taro框架\o2school\src\pages\tool\url.js
//D:\Download\Project\Taro框架\o2school\src\pages\index\index-components\GoodsShow.jsx

/* const go = () => {
  Taro.navigateTo({ url: "/pages/goodsDetail/index" });
}; */
export default function Like() {
  const [goods, setGoods] = useState([]);
  useDidShow(() => {
    Taro.getStorage({
      key: "token",
      success: function(res) {
        console.log(res);
        let token = res.data;

        Taro.request({
          //"" `` 不影响，但是好像必须要加query参数
          url: URL + "/used-goods?limit=20&page=1&type=0",
          // url: URL + `/used-goods`,
          method: "GET",
          header: {
            token
          },
          success: res => {
            console.log("查询物品信息成功");
            console.log(res);
            console.log(res.data.data); //商品信息，为一个数组
            setGoods(res.data.data);
          }
        });
      }
    });
  });
  const goodsdetail = (id) => {
    Taro.navigateTo({ url: `/pages/goodsDetail/index?id=${id}` });
  };

  let url = "https://pic.imgdb.cn/item/61b8811d2ab3f51d91ed2e51.png";
  return (
    <View className="box">
      <View>{console.log(goods)}</View>
      {goods.map(goodsObj => {
        console.log("goodggggggggggggg");
        const { showImgURL, describe, price,id } = goodsObj;
        return (
          <View className="item" onClick={()=>goodsdetail(id)}>
            <Image
              className="at-article__img"
              src={showImgURL}
              mode="widthFix"
            />
            <View className="text">{describe}</View>
            <View className="price">￥{price}</View>
          </View>
        );
      })}

      <View className="item">
        <Image className="at-article__img" src={url} mode="widthFix" />
        <View className="text">
          Apple Pencil
          为绘画、记笔记、标注文档设立了一个新标准：直观、精准，又妙趣横生。它具有几乎难以察觉的延迟感，像素级别的精准度，灵敏的倾斜角度和压力感应，并支持防手掌误触。这一切让它用起来格外得心应手，因此每当灵感涌现，你都可以随手捕捉。
        </View>
        <View className="price">￥100</View>
      </View>

      <View className="item">
        <Image
          className="at-article__img"
          src="https://tse1-mm.cn.bing.net/th/id/OIP-C.rTGiQV8om-RtvlcoPEzKpQHaFj?pid=ImgDet&rs=1"
          mode="widthFix"
        />
        <View className="text">
          Apple Pencil
          为绘画、记笔记、标注文档设立了一个新标准：直观、精准，又妙趣横生。它具有几乎难以察觉的延迟感，像素级别的精准度，灵敏的倾斜角度和压力感应，并支持防手掌误触。这一切让它用起来格外得心应手，因此每当灵感涌现，你都可以随手捕捉。
        </View>
        <View className="price">￥30</View>
      </View>

      <View className="item">
        <Image className="at-article__img" src={url} mode="widthFix" />
        <View className="text">
          Apple Pencil
          为绘画、记笔记、标注文档设立了一个新标准：直观、精准，又妙趣横生。它具有几乎难以察觉的延迟感，像素级别的精准度，灵敏的倾斜角度和压力感应，并支持防手掌误触。这一切让它用起来格外得心应手，因此每当灵感涌现，你都可以随手捕捉。
        </View>
        <View className="price">￥100</View>
      </View>

      <View className="item">
        <Image
          className="at-article__img"
          src="https://tse1-mm.cn.bing.net/th/id/OIP-C.rTGiQV8om-RtvlcoPEzKpQHaFj?pid=ImgDet&rs=1"
          mode="widthFix"
        />
        <View className="text">
          Apple Pencil
          为绘画、记笔记、标注文档设立了一个新标准：直观、精准，又妙趣横生。它具有几乎难以察觉的延迟感，像素级别的精准度，灵敏的倾斜角度和压力感应，并支持防手掌误触。这一切让它用起来格外得心应手，因此每当灵感涌现，你都可以随手捕捉。
        </View>
        <View className="price">￥90</View>
      </View>

      <View className="item">
        <Image
          className="at-article__img"
          src="https://cbu01.alicdn.com/img/ibank/2017/852/649/4053946258_886422965.jpg"
          mode="widthFix"
        />
        <View className="text">
          Apple Pencil
          为绘画、记笔记、标注文档设立了一个新标准：直观、精准，又妙趣横生。它具有几乎难以察觉的延迟感，像素级别的精准度，灵敏的倾斜角度和压力感应，并支持防手掌误触。这一切让它用起来格外得心应手，因此每当灵感涌现，你都可以随手捕捉。
        </View>
        <View className="price">￥180</View>
      </View>
    </View>
  );
}
