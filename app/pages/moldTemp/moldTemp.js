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
import {
  Link
} from 'react-router'
import {
  Button,
  Spin,
  Row, Col
} from 'antd'
import {
  fetchHouseCheckList,
  updateHouseCheckListQuery,
  resetHouseCheckListQuery
} from 'actions/house'
import {
  resetAmList
} from 'actions/common'
import SearchTable from 'components/searchTable'

@connect(
  (state, props) => ({
    config: state.config,
    houseCheckSearchQuery: state.houseCheckSearchQuery,
    houseCheckSearchResult: state.houseCheckSearchResult,
  })
)
export default class moldTemp extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      data: {

      },
    }
    this._handleSubmit = this._handleSubmit.bind(this)
    this.cacheSearch = this.cacheSearch.bind(this)
    this._clear = this._clear.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchHouseCheckList({
      currentPage: 1
    }, (respose) => {}))
  }

  _handleSubmit(query, currentPage) {
    // query.amRegions = this._getAmRegions(query.am)
    this.props.dispatch(fetchHouseCheckList({...query,
      currentPage: currentPage
    }))
  }

  searchList() {
    const {
      data
    } = this.state
    data && data.list && data.list.map(item => {

    })
    const {
      config
    } = this.props
    return [{
      key: 'keyword',
      label: '关键字',
      type: 'text',
    }, {
      key: 'division',
      label: '行政区划',
      type: 'text',
    }, ]
  }


  _clear() {
    this.props.dispatch(resetAmList())
    this.props.dispatch(resetHouseCheckListQuery())
  }

  cacheSearch(item) {
    this.props.dispatch(updateHouseCheckListQuery(item))
  }

  tableData() {
    return this.props.houseCheckSearchQuery.list
  }

  render() {
    const {
      houseCheckSearchQuery,
      houseCheckSearchResult
    } = this.props

    // console.log(houseCheckSearchResult)
    return (
      <div className="page">
        <h2>模温机控制界面</h2>
        <Row>
          <Col span={12}>入煤: 514C.</Col>
          <Col span={12}>出煤: 514C.</Col>
        </Row>
      </div>
    )
  }
}
