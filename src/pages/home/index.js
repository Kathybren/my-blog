import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Header from '../../components/header/index'

const getComponent = (name) => {
  const component = Loadable({
    loader: () => import(`../../pages/${name}/index.js`),
    loading() {
      return <div>正在加载</div>
    }
  })
  return component
}
class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path="/home/code" exact component = {getComponent('code')}></Route> 
        <Route path="/home/think" component = {getComponent('think')}></Route> 
      </div>
    )
  }
}
export default Home



