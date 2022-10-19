import { View, Text, Button } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import Pub from "./Pub";
import { useState, useEffect } from "react";
import URL from "../../tool/url";


export default function Publish() {
  const [books, setBooks] = useState([]);
  // useDidShow(() => {
  useEffect(() => {
    Taro.getStorage({
      key: "token",
      success: res => {
        console.log("获取token");
        console.log(res);
        let token = res.data;
        Taro.request({
          url: URL + "/used-goods/?limit=20&page=1&type=0",
          method: "GET",
          header: {
            "content-type": "application/json",
            token: token
          },
          success: res => {
            console.log(res);
            console.log(res.data.data); //我的发布物品，结果为数组
            //  const[title,inform,price]=res.data.data
            // const books = res.data.data; //这是异步的
            setBooks(res.data.data);
          }
        });
      }
    });
  }, []);
  // });

  return (
    <View id="publish">
      <View>{console.log(books)}</View>
     
      {books.map(bookObj => {
        console.log("aaaaaaaaaaaaaaaaaa");
        const { showImgURL, title, describe, price, id } = bookObj;
        return (
          <Pub
            showImgURL={showImgURL}
            title={title}
            author={describe}
            price={price}
            id={id}
          />
        );
      })}
    
    </View>
  );
}
