// import { useState } from "react";
// import { View, Button } from "@tarojs/components";
// import { AtSteps } from "taro-ui";
// import "./index.scss";
// import { reLaunchPage } from "../../tools";
// const scanBookUrl = "/pages/add/compontent/OldBook/compontent/Scanbook/index";
// const supBookUrl = "/pages/add/compontent/OldBook/compontent/Supbook/index";
// const pubBookUrl = "/pages/add/compontent/OldBook/compontent/Pubbook/index";
// export default function index() {
//   return (
//     <View className="border-box">
//       <View className="content-box">
//         <View
//           onClick={() => {
//             reLaunchPage(scanBookUrl);
//           }}
//         >
//           点击扫码
//         </View>
//         {/* <View
//           onClick={() => {
//             reLaunchPage(supBookUrl);
//           }}
//         >
//           保存
//         </View>
//         <View
//           onClick={() => {
//             reLaunchPage(pubBookUrl);
//           }}
//         >
//           再来一本
//         </View> */}
//       </View>
//     </View>
//   );
// }

<<<<<<< HEAD
import React from "react";
import { AtIcon } from "taro-ui";
import { View, Button, Input, Text } from "@tarojs/components";
import "./index.scss";
import Header from "./compontent/Header/index";
import { toOtherPage } from "../../../tool/tools";
const supBookUrl = "/pages/add/compontent/OldBook/compontent/Supbook/index";
export default function index() {
=======
import React ,{useState,useEffect, useMemo}from "react";
import Taro, { Events } from "@tarojs/taro";
import { AtIcon ,AtToast} from "taro-ui";
import { View, Button, Input, Text ,Image} from "@tarojs/components";
import "./index.scss";
import Header from "./compontent/Header/index";
import { toOtherPage } from "../../../tool/tools";
import isbnImage from '../../../images/isbn.jpg'
const events = new Events()
let supBookUrl = "/pages/add/compontent/OldBook/compontent/Supbook/index";
export default function index() {
  const [isbnValue, setIsbnValue] = useState('')
  const [textValue, setTextValue] = useState("");
  const [iconValue, setIconValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [isOpenedValue, setIsOpenedValue] = useState(0);
  const [theKey , setTheKey] = useState(false);
  const getImage =  () => {
    Taro.scanCode({
      success: (res) => {
        // console.log(res)
        console.log(res.result);
        setIsbnValue(res.result)
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  };
  const getBookvalue = () => {
    Taro.request({
      url: `http://118.31.113.49/api/isbn/v1/index?key=d7ba9fa7634764f2fd5bb81e8183ce18&isbn=${isbnValue}`,
      method: "GET",
      success: async function(res) {
        if(res.data.data.length == 0){
          setIsOpenedValue(1);
          setTextValue("未查找到该ISBN码值");
        }else{
          let newArr = {};
          await setTheKey(true)
          Taro.setStorage({
            key: "book",
            data: res.data.data
          });
        }
        
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  let getIsbnValue = (event)=>{
      setIsbnValue(event.detail.value);
  }
  useEffect(()=>{
    setIsOpenedValue(0);
    // console.log(isbnValue);
    // Taro.eventCenter.trigger('getIsbnValue',isbnValue)
  },[isbnValue])
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
  return (
    <View className="border-box">
      <Header state={0} />
      <View className="content-box">
        <View className="head-box">
          <Input
<<<<<<< HEAD
=======
            value={isbnValue}
            onInput = {getIsbnValue}
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
            type="number"
            placeholder="输入ISBN码"
            className="isbn-input"
          />
        </View>
<<<<<<< HEAD
        <View className="text-box">111</View>
=======
        <View className="text-box">
        <Image
          className="imge"
          src={isbnImage}
        />
        </View>
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
        <View className="bottom-box">
          <Text>大家可以直接通过摄像头扫描出</Text>
          <Text>ISBN码</Text>
          <Text>
            <AtIcon
              prefixClass="ri"
              value="ri-arrow-down-s-fill"
              size="10"
              color="#999"
            ></AtIcon>
          </Text>
        </View>
        <View className="tosuppage">
<<<<<<< HEAD
          <Button>
            <Text>点击扫码</Text>
          </Button>
          <Button
            onClick={() => {
              toOtherPage(supBookUrl, "123");
=======
          <Button onClick={getImage}>
            <Text>点击扫码</Text>
          </Button>
          <Button
            onClick={async() => {
              const url = `${supBookUrl}?isbn=${isbnValue}`
              await  getBookvalue();
              if(theKey == true){
                toOtherPage(url, '123');
              }
              
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
            }}
          >
            <Text>提交</Text>
          </Button>
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
{
  /* <Button
          onClick={() => {
            toOtherPage(supBookUrl);
          }}
        >
          跳转一
        </Button> */
}
