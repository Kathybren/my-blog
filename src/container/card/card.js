import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import titleImg from '../../common/img/bgimg.jpg'
const Card = () => {
  return (
    <div className="cardCom" >
      <img src = {titleImg} alt="title" />
      <div className="title">
      <Link
        to={'/home/detail/'+ 1}
      >Flutter免费视频第三季-布局</Link>
        <p></p>
        <div>技术胖 发布于 11月26, 2018</div>
      </div>
      <div className="descripe">
        Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018Flutter免费视频第三季-布局
        技术胖 发布于 11月26, 2018
      </div>
    </div>
  )
}
export default Card