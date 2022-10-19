<<<<<<< HEAD
import { Component } from 'react'
import './app.scss'

class App extends Component {

    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // this.props.children 是将要会渲染的页面
    render() {
        return this.props.children
    }
}

export default App
=======
import {
  Component
} from 'react';

import './app.scss';
// import('./assets/icons/remixicon.css')
// import 'taro-ui/dist/style/components/button.scss'


class App extends Component {
  render() {
    return this.props.children
  }
}


export default App
>>>>>>> 6e61335cb570dd2c1b66a5a3a72e1469d73c24fc
