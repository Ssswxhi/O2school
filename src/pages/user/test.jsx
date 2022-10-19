import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import './index.scss'
import { AtList, AtListItem } from "taro-ui"
import "taro-ui/dist/style/components/list.scss";
import "taro-ui/dist/style/components/icon.scss";



function My() {
  return (
    <View>
  
      <View className='show'>
        <View className='show-infor1'>

        </View>
        <View className='show-infor2'>
          <View class='show-list'>
            <View class='show-list1'>
              <Text>
                <AtIcon size='40' prefixClass="ri" value="price-tag-3-line" />
              </Text>

            </View>

            <View class='show-list2'>
              <Text  >
                <AtIcon size='40' prefixClass='ri' value='chat-heart-line' />
              </Text>

            </View>

            <View class='show-list3'>
              <Text  >
                <AtIcon prefixClass="ri" value="question-line" size='40' />
              </Text>

            </View>
          </View>
         
          <View >
            <Text>我的发布</Text>
            <Text>我的收藏</Text>
            <Text>帮助中心</Text>
          </View>
        </View>
      </View>
      <AtList>
      <AtListItem title='心愿单' onClick={this.handleClick} />
      <AtListItem title='关于我们' onClick={this.handleClick} />
      <AtListItem title='使用协议' onClick={this.handleClick} />
      <AtListItem title='退出登录' onClick={this.handleClick} />
      </AtList>
      {/* <View className="list">

        <View><Text>心愿单</Text></View>
        <View><Text>关于我们</Text></View>
        <View><Text>使用协议</Text></View>
        <View><Text>退出登录</Text></View>

      </View> */}
    </View>


  )

}
export default My