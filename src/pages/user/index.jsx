import Taro from "@tarojs/taro";
import { useState } from "react";
import Me from "./components/Me";
import My from "./components/My";
import List from "./components/List";
import { View } from "@tarojs/components";

function User() {
  const [log, setLog] = useState(true);
  Taro.getStorage({
    key: "userMess",
    success: res => {
      console.log(res);
      setLog(false);
    },
    fail: res => {
      setLog(true);
      Taro.navigateTo({ url: "/pages/login/index" });
    }
  });
  const click = () => {};

  return (
    <View>
      <View>
        <Me />
        <My />
      </View>

      <View className="middle"></View>

      <List onClick={click} />
      {/* <AtModal
  isOpened={log}
 
  cancelText='取消'
  confirmText='确认'
  onClose={ this.handleClose }
  onCancel={ this.handleCancel }
  onConfirm={ this.handleConfirm }
  content='请先登陆'
/> */}
    </View>
  );
}
export default User;
