import { Text, View, Image } from "@tarojs/components";
import "./index.scss";
import Taro, { useDidShow } from "@tarojs/taro";
import { useState } from "react";
import URL from "../../../tool/url";

export default function OldBook() {
  const [books, setBooks] = useState([]);
  useDidShow(() => {
    Taro.getStorage({
      key: "token",
      success: function(res) {
        console.log(res);
        let token = res.data;

        Taro.request({
          //"" `` 不影响，但是好像必须要加query参数
          url: URL + "/used-goods?limit=20&page=1&type=2",
          // url: URL + `/used-goods`,
          method: "GET",
          header: {
            token
          },
          success: res => {
            console.log("查询书籍信息成功");
            console.log(res);
            console.log(res.data.data); //商品信息，为一个数组
            setBooks(res.data.data);
          }
        });
      }
    });
  });
  const bookdetail = id => {
    Taro.navigateTo({ url: `/pages/bookDetail/index?id=${id}` });
  };

  return (
    <View>
      <View>{console.log(books)}</View>
      {books.map(bookObj => {
        console.log("bookbbbbbbbbbbbbbbbbbbbb");
        const { showImgURL, describe, price, id } = bookObj;
        return (
          <View className="top" onClick={() => bookdetail(id)}>
            <Image
              className="at-article__img"
              src={showImgURL}
              mode="widthFix"
            />
            <View class="des">
              <View className="at-article__p">{describe}</View>
              {/*   <View className='at-article__info'>
                            书籍作者
                        </View> */}
              <View className="price">￥{price}</View>
            </View>
          </View>
        );
      })}
    </View>
  );
}
