import { Text, View, Image } from '@tarojs/components'
import './index.scss'
import { AtIcon } from "taro-ui";
import { AtAvatar } from 'taro-ui'

export default function Seller() {
    return (
        <View className='seller'>
            <View className='img'>
                <AtAvatar circle openData={[{ type: 'userAvatarUrl' }]}></AtAvatar>
            </View>

            <View className='descri'>
                <View className='name-des'>
                    一个世界水手
                </View>
                <View className='address-des'>
                    <AtIcon size='14' className='icon' prefixClass='ri' value='map-pin-line' />
                    西安邮电大学长安校区东区
                </View>

            </View>

        </View>

    )
}


