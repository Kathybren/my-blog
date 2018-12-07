import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.scss'

class Header extends Component {
    render() {
      return (
        <div className="comHeader">
        header
        </div>
      )
    }
}
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispathToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)