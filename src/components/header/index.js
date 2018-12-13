import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logo from '../../common/img/logo.jpeg'
import './index.scss'

class Header extends Component {
    render() {
      return (
        <div className="comHeader">
          <div className="headerContent">
            <div className="left">
              <img src={Logo} alt="logo"/>
            </div>
            <div className="center">
              <NavLink exact to="/home/code" activeClassName="selected">码农</NavLink>
              <NavLink to="/home/think" activeClassName="selected">感悟</NavLink>
              <NavLink to="/home/study" activeClassName="selected">学习</NavLink>
            </div>
            <div className="right">
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