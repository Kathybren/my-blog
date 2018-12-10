import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import Card from './components/card'
import './index.scss'

class Code extends Component {
  componentDidMount() {
    this.props.getInit()
  }
  render() {
    return (
      <div className="code">
        <div className="codeContent">
          <Card />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state.getIn(['code', 'aaa']))
  return {
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getInit() {
      dispatch(actionCreators.getList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Code)