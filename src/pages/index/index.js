import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="index">
      <p>
        <Link to="/home/code">码农</Link>
        <Link to="/home/think">感悟</Link>
        <Link to="/home/study">学习</Link>
      </p>
    </div>
  )
}
export default Home