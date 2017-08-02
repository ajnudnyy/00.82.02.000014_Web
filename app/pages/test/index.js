/*
 * @Author: zack bai
 * @Date: 2017-07-03 15:11:55
 * @Last Modified by:   zack bai
 * @Last Modified time: 2017-08-02 15:11:55
 */

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import { Cascader, Select, Row, Col, Checkbox, Button } from 'antd'


import Sub from './sub'

@connect(
    (state, props) => ({
      config: state.config,
    })
)

export default class popCheck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
  }

  componentDidMount() {
    console.log(this.props)
  }


  render() {
    return (
      <div className="page">
        测试
        <span>weorwe</span>
        <img src="../../images/default.png" />
        <Sub />
      </div>
    )
  }
}
