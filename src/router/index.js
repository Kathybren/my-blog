import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const getComponent = (name) => {
  const component = Loadable({
    loader: () => import(`../pages/${name}/index.js`),
    loading() {
      return <div>正在加载</div>
    }
  })
  return component
}
const Router = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path="/" exact component = {getComponent('index')}></Route> 
        <Route path="/home" component = {getComponent('home')}></Route> 
      </div>
    </BrowserRouter>
  )
}
export default Router