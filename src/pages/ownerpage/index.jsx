import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import SellerInfor from './index-components/SellerInfor'
// import  FlowBox from './index-components/FlowBox'
import Goods from './Goods'
import Seller from '../../components/Seller'
import './index.scss'


export default function HomePage(){
    return (
        <View>
           <Seller/>
            <View className='line'></View>
            <View className='side'>
                <View className='tip'>
                    <Text class='tip-show'>全部宝贝hhh</Text>
                </View>                
                <Goods/>             
            </View>
           
        </View>
    )
}
