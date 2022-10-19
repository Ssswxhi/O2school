import { View, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./index.scss";
import { useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import URL from "../../../../../tool/url";

function Pub(props) {
  console.log("***************************");
  console.log(props);
  const { title, author, price,id } = props;
  /*   
  const [isSaled, setIsSaled] = useState("待出售");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [showImgUrl, setShowImgUrl] = useState(""); */
  // const [books,setBooks]=useState([])
  // setTitle(props.title);
  // setAuthor(props.author);
  // setPrice(props.price);
  // setShowImgUrl(
  //   "https://tse1-mm.cn.bing.net/th/id/R-C.b6fd1206970844bf022e6b914d30ad0e?rik=ekVQvNWZCBtWlw&riu=http%3a%2f%2fimg14.360buyimg.com%2fn1%2fjfs%2ft1%2f23612%2f4%2f14947%2f149850%2f5cad9a58Eeaf87234%2f70d0c7686366b90a.jpg&ehk=CBDmKWE69344%2b3YQcsEp%2bWFUsfdDvjPCelF%2boLgF8uk%3d&risl=&pid=ImgRaw&r=0"
  // );

  // <Pub title={title} author={inform} price={price} />;

  const isSaled = "待出售";
  const time = "";
  const showImgUrl =
    "https://tse1-mm.cn.bing.net/th/id/R-C.b6fd1206970844bf022e6b914d30ad0e?rik=ekVQvNWZCBtWlw&riu=http%3a%2f%2fimg14.360buyimg.com%2fn1%2fjfs%2ft1%2f23612%2f4%2f14947%2f149850%2f5cad9a58Eeaf87234%2f70d0c7686366b90a.jpg&ehk=CBDmKWE69344%2b3YQcsEp%2bWFUsfdDvjPCelF%2boLgF8uk%3d&risl=&pid=ImgRaw&r=0";
let itemID=id
  const del = () => {
    //删除物品
    Taro.getStorage({
      key: "token",
      success: res=> {
        console.log(res);
        let token = res.data;

        Taro.request({
          //"" `` 不影响，但是好像必须要加query参数
          url: URL + `/used-goods/item/${itemID}`,
          // url: URL + `/used-goods`,
          method: "DELETE",
          header: {
            token
          },
          success: res => {
            console.log("删除物品成功");
            console.log(res);
            console.log(res.data.data); //商品信息，为一个数组
           
          }
        });
      }
    });
  };
  return (
    <View className="pub">
      {/* {books.map(bookObj => {
        // const [title, inform, price] = bookObj;
        setTitle(bookObj.title);
        setAuthor(bookObj.inform);
        setPrice(bookObj.price);
        return ( */}

      <View className="top-show">
        <View className="top-left">
          <AtIcon
            prefixClass="ri"
            value="store-2-line"
            size="18"
            color="#FFC82C"
          />
          <Text>{isSaled}</Text>
        </View>

        <View className="top-right">
          <Text className="at-article__info">{time}</Text>
        </View>
      </View>

      <View className="middle-show"></View>

      <View className="top">
        <Image className="at-article__img" src={showImgUrl} mode="widthFix" />
        <View class="des">
          <View className="at-article__p">{title}</View>
          <View className="at-article__info">{author}</View>
          <View className="price">
            <Text>￥{price}元</Text>
          </View>
        </View>
      </View>

      <View className="middle-show"></View>
      <View className="bottom-show">
        <AtIcon
          onClick={del}
          prefixClass="ri"
          value="delete-bin-6-line"
          size="30"
          color="#999"
        ></AtIcon>
      </View>

      {/* );
      })}  */}
    </View>
  );
}
export default Pub;
