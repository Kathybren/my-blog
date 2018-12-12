import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Header from '../../components/header/index'
import Loading from '../../container/loading/index'

const getComponent = (name) => {
  const component = Loadable({
    loader: () => import(`../../pages/${name}/index.js`),
    loading: Loading
  })
  return component
}
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/home/code" exact component = {getComponent('code')}></Route> 
        <Route path="/home/think" exact component = {getComponent('think')}></Route> 
        <Route path="/home/study" exact component = {getComponent('study')}></Route> 
        <Route path="/home/detail/:id" exact component = {getComponent('detail')}></Route> 
      </div>
    )
  }
}
export default Home



