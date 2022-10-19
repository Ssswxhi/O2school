import React, { useState } from "react";
import { View, Text, Image, Button } from "@tarojs/components";
import Taro, { getCurrentInstance } from "@tarojs/taro";
import { AtInput, AtForm, AtAvatar, AtImagePicker } from "taro-ui";
import { Picker } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import URL from "../../../../tool/url";
import "./index.scss";

export default function Inform() {
  //   console.log(getCurrentInstance());
  const { router } = getCurrentInstance();
  console.log("~~~~~~~");
  console.log(router.params.avatar);
  let imgurl = router.params.avatar; //旧的头像
  const [avatarUrl, setAvatarUrl] = useState(imgurl);
  const changeAva = () => {
    Taro.chooseImage({
      count: 1, // 上传一张图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        setAvatarUrl(tempFilePaths)
      }
    })
  };

  //更新昵称
  const [nickName, setNickName] = useState("");
  const changeName = input => {
    console.log(input); //就是输入框的内容
    setNickName(input);
    return nickName;
  };

  const select1 = ["男", "女"];
  const select2 = ["长安校区东区", "长安校区西区", "雁塔校区"];
  const [gender, setGender] = useState("选择性别");
  const [campus, setCampus] = useState("选择校区");
  const [date, setDate] = useState("选择生日");
  //   const [nick,setNick]=useState()
  //   const [avatarUrl,setAvatarUrl]=useState()

  const changeGender = e => {
    console.log(e); //e.detail.value的值为数组元素下标
    const value = e.detail.value;
    // if(value===0)setGender('男')
    // else setGender('女')
    // value === 0 ? setGender(select1[0]) : setGender(select1[1]);
    setGender(select1[value]);
    console.log(gender);
  };

  const changeCampus = e => {
    const value = e.detail.value;
    console.log(value);
    // if (value === 0) setCampus(select2[0]);
    // else if (value === 1) setCampus(select2[1]);
    // else setCampus(select2[2]);
    setCampus(select2[value]);
    console.log(campus);
  };

  const changeDate = e => {
    console.log(e.detail.value);
    setDate(e.detail.value);
  };
  const submit = () => {
    Taro.getStorage({
      key: "token",
      success: res => {
        console.log("获取token");
        console.log(res);
        let token = res.data;
        Taro.request({
          url: URL + "/user/inform",
          method: "PUT",
          header: {
            "content-type": "application/json",
            token: token
          },
          date: {
            nickName,
            avatarUrl,
            gender
          },
          success: res => {
            console.log("成功");
            console.log(res);
            if (res.data.data) {
              console.log('33333333333333333333333333333333333');
              Taro.setStorage({
                key: "updateInfo",
                data: {
                  nickName,
                  avatarUrl,
                  campus,
                  date,
                  gender
                }
              });
            }
          }
        });
      }
    });
  };

  return (
    <View>
      <AtForm>
        <View class="head" onClick={changeAva}>
          <Text className="text">头像</Text>
          <Image className="image" src={avatarUrl} />
        </View>
        <AtInput
          name="value1"
          placeholder="填写专属昵称"
          type="text"
          title="昵称"
          value={nickName}
          onChange={changeName}
        />
        {/* <AtInput name="value2" placeholder="选择性别" title="性别" />
        <AtInput name="value3" placeholder="选择生日" title="生日" />
        <AtInput name="value4" placeholder="选择校区" title="校区" /> */}
      </AtForm>
      <Picker mode="selector" range={select1} onChange={changeGender}>
        <AtList>
          <AtListItem title="性别" extraText={gender} />
        </AtList>
      </Picker>

      <Picker mode="selector" range={select2} onChange={changeCampus}>
        <AtList>
          <AtListItem title="校区" extraText={campus} />
        </AtList>
      </Picker>

      <Picker mode="date" onChange={changeDate}>
        <AtList>
          <AtListItem title="生日" extraText={date} />
        </AtList>
      </Picker>

      <Button onClick={submit}>保存信息</Button>
    </View>
  );
}
