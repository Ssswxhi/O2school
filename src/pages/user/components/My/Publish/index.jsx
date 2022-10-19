import { View, Text, Button } from "@tarojs/components";
import Taro, { useDidShow } from "@tarojs/taro";
import Pub from "./Pub";
import { useState, useEffect } from "react";

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
          url: URL+"/used-goods/user",
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
    <View>
      <View>{console.log(books)}</View>
      {/* {books.map(bookObj => {
        console.log("aaaaaaaaaaaaaaaaaa");
        const { title, inform, price,id} = bookObj;
        return <Pub title={title} author={inform} price={price} id={id} />;
      })} */}
    </View>
  );
}
