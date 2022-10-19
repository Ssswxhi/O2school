import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import './index.scss'

function Help() {
  return (
    <View>
      <View class='list' >
        <AtIcon prefixClass="ri" value="customer-service-2-line" />
        <Text>在线咨询</Text>
      </View>
    </View>
  );
}
export default Help;
