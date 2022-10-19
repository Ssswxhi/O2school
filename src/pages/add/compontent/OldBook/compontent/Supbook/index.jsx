<<<<<<< HEAD
import { useState, useEffect } from "react";
import { View, Text, Button } from "@tarojs/components";
import "./index.scss";
import Header from "../Header/index";
import { AtInputNumber, AtTag } from "taro-ui";
import { toOtherPage } from "../../../../../tool/tools";
export default function index(props) {
  useEffect(option => {
    console.log(option);
    console.log(this);
  });
  console.log(props);
  const newlevel = ["九成新", "全新", "八成新", "七成新"];
  const [price, setPrice] = useState(6);
  const [activeIndex, setActive] = useState(false);
=======
import { useState, useEffect ,useMemo} from "react";
import { View, Text, Button,Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import Header from "../Header/index";
import { AtInputNumber, AtTag ,AtToast} from "taro-ui";
import { toOtherPage } from "../../../../../tool/tools";
import URl from "../../../../../tool/url";
export default function index() {
  const newlevel = ["九成新", "全新", "八成新", "七成新"];
  const [price, setPrice] = useState(6);
  const [activeIndex, setActive] = useState(false);
  const [bookMessage,setBookMessage] = useState({});
  const [textValue, setTextValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [isOpenedValue, setIsOpenedValue] = useState(0);
  const [damaged ,setDamaged] = useState(0);
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
  const pubBookUrl = "/pages/add/compontent/OldBook/compontent/Pubbook/index";
  let handleChange = value => {
    setPrice(value);
  };
<<<<<<< HEAD
  // let getPrimary = target => {
  //   console.log(target);
  //   target.active = 'false'
  // };
=======
  let getInforms = ()=>{
    let informObj = {}
    for( const key in bookMessage ){
      if(['author','edition','publisher'].indexOf(key) > -1){
        informObj[key] = bookMessage[key];
      }  
  }
  return informObj   
  }
  let getDamaged = ()=>{
    const cdamaged =  newlevel[activeIndex];
    switch (cdamaged) {
      case "全新":
        setDamaged(100)
        break;
      case "八成新":
        setDamaged(80)
        break;
      case "七成新":
        setDamaged(70)
        break;
      default:
        setDamaged(90)
        break;
    }
  }
  let getTheBook = ()=>{
    Taro.getStorage({
      key: 'book',
      success: function (res) {
        setBookMessage(res.data)
        console.log(res.data)
      }
    })
  }
  let givOldBook = ()=>{
    if(newlevel[activeIndex] == undefined){
      setTextValue("请选择几成新");
      setIsOpenedValue(1);
    }else{
      console.log(getInforms());
     Taro.showLoading({
        title: "加载中"
      });
      let rtoken = "";
      Taro.getStorage({
        key: "token",
        success: function(res) {
          rtoken = res.data;
          console.log(rtoken);
          console.log(res.data);
          Taro.request({
            url: URl + "/used-goods/item",
            method: "PUT",
            header: {
              "content-type": "application/json",
              token: rtoken
            },
            data: {
              quantity: 1,
              type: 1,
              title: bookMessage.title,
              showImgURL: bookMessage.img,
              damaged: damaged,
              price: price,
              describe: bookMessage.summary,
              inform:getInforms()
            },
            success: function(res) {
              console.log(res);
              Taro.hideLoading();
              toOtherPage(pubBookUrl);
            },
            fail: function() {
              Taro.hideLoading();
              setTextValue("上传失败");
              setIsOpenedValue(1);
            }
          })
        }
    });
    }

  }
  useEffect(()=>{
    setIsOpenedValue(0);
    getTheBook()
    getDamaged();   
  },[])
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
  return (
    <View className="border-box">
      <Header state={1} />
      <View className="content-box">
        <View className="header-box">
<<<<<<< HEAD
          <View className="header-left">1</View>
          <View className="header-right">
            <Text className="book-title">程序员的数学</Text>
            <View className="book-author">
              <Text>爱上等哈</Text>
              <Text></Text>
            </View>
            <Text className="book-text">
              爱程序员的数学上等哈程序员的数学程序员的数学程序员的学上等哈程序员的数学程序员的数学程序员的学上等哈程序员的数学程序员的数学程序员的数学程序员的数学程序员的数学程序员的数学程序员学程序员的数学程序员的数的数学程序员的数学
            </Text>
            <Text className="perch" />
=======
          <View className="header-left">
          <Image
          className="imge"
          src={bookMessage.img}
        />
          </View>
          <View className="header-right">
            <Text className="book-title">{bookMessage.title}</Text>
            <View className="book-author">
              <Text>{bookMessage.author}</Text>
              <Text></Text>
            </View>
            <Text className="book-text">
            {bookMessage.summary}
            </Text>
            <Text className="perch"/>
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
          </View>
        </View>
        <View className="masster-box">
          <View className="content">
            <View className="content-text">
              <View className="header">
                <View className="title">价格(元)</View>
                <View className="addprice">
                  <AtInputNumber
                    className="price-add"
                    min={0}
                    max={10}
                    step={1}
                    width={100}
                    value={price}
                    onChange={handleChange}
                  />
                </View>
              </View>
              <View className="center">
                <View className="title">几成新</View>
                <View className="new-level">
                  {newlevel.map((item, index) => (
                    <View>
                      <AtTag
                        className="attag"
                        type="primary"
                        active={activeIndex === index}
                        name={item}
                        onClick={e => {
<<<<<<< HEAD
                          console.log(e);
=======
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
                          setActive(index);
                        }}
                      >
                        {item}
                      </AtTag>
                    </View>
                  ))}
                </View>
              </View>
              <View className="bottom">
                <Button
                  className="topubpage"
                  onClick={() => {
<<<<<<< HEAD
                    toOtherPage(pubBookUrl);
=======
                    givOldBook()
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
                  }}
                >
                  <Text>保存</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
<<<<<<< HEAD
=======
      <AtToast
            isOpened={isOpenedValue}
            text={textValue}
            icon={iconValue}
            status={statusValue}
          ></AtToast>
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
    </View>
  );
}
