import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './index.scss'

class Header extends Component {
    render() {
      return (
        <div className="comHeader">
          <div className="headerContent">
            <div className="left">
              子不语
            </div>
            <div className="center">
              <Link to="/home/code">码农</Link>
              <Link to="/home/think">感悟</Link>
              <Link to="/code">学习</Link>
            </div>
            <div className="right">
              子不语
            </div>
          </div>
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