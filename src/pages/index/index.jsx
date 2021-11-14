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
        <AtIcon prefixClass='ri' value='home-line' />
      </View>
    )
  }
}
