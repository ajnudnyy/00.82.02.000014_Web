/*
 * @Author: zack bai
 * @Date: 2017-07-03 15:11:55
 * @Last Modified by:   zack bai
 * @Last Modified time: 2017-08-02 15:11:55
 */
import React, {
  Component
} from 'react'
import ReactDom from 'react-dom'
import {
  connect
} from 'react-redux'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button
} from 'antd'
import Third from './third'

@connect(
  (state, props) => ({
    config: state.config,
  })
)

export default class sub extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page">
        <h1>我是二级页面</h1>
        <Third />
      </div>
    )
  }
}
