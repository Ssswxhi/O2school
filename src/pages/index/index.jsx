import { Component } from 'react'
import { Text, View } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui'

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？</Text>
        <AtButton type='primary' circle>hello</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle>来</AtButton>
        <AtIcon prefixClass='ri' value='home-line' />
      </View>
    )
  }
}
