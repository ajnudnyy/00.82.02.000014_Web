/*
 * @Author: zack bai
 * @Date: 2017-07-03 15:11:55
 * @Last Modified by:   zack bai
 * @Last Modified time: 2017-08-02 15:11:55
 */
 
import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'

@connect(
  (state, props) => ({
    config: state.config,
  })
)
export default class welcome extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      data: {},
    }
  }

  // 组件已经加载到dom中
  componentDidMount() {

  }

  render() {
    return (
      <div className="welcome">
        <div className="content">
          <h2 className="title">IEC</h2>
        </div>
      </div>
    )
  }
}
